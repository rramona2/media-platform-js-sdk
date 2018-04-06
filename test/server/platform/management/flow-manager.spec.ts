import * as nock from 'nock';
import {expect} from 'chai';
import {FlowManager} from '../../../../src/platform/management/flow-manager';
import {Configuration} from '../../../../src/platform/configuration/configuration';
import {Authenticator} from '../../../../src/platform/authentication/authenticator';
import {HTTPClient} from '../../../../src/platform/http/http-client';
import {ImportFileRequest} from '../../../../src/platform/management/requests/import-file-request';
import {CreateFlowRequest} from '../../../../src/platform/management/requests/create-flow-request';
import {Destination} from '../../../../src/platform/management/job/destination';
import {Source} from '../../../../src/platform/management/job/source';
import {TranscodeSpecification} from '../../../../src/platform/management/job/transcode-specification';
import {QualityRange} from '../../../../src/platform/management/job/quality-range';
import {Invocation} from '../../../../src/platform/management/metadata/invocation';
import {FlowComponent} from '../../../../src/platform/management/metadata/flow-component';
import {Flow} from '../../../../src/platform/management/metadata/flow';

const repliesDir = __dirname + '/replies/';

describe('flow manager', function () {

  const configuration = new Configuration('manager.com', 'secret', 'appId');
  const authenticator = new Authenticator(configuration);
  const httpClient = new HTTPClient(authenticator);
  const flowManager = new FlowManager(configuration, httpClient);

  const apiServer = nock('https://manager.com/').defaultReplyHeaders({
    'Content-Type': 'application/json'
  });

  afterEach(function () {
    nock.cleanAll();
  });


  it('Get flow request is parsing properly', function (done) {
    apiServer.get('/_api/flow_control/flow/flow_id')
      .once()
      .replyWithFile(200, repliesDir + 'get-flow-response.json');

    flowManager.getFlow('flow_id', function (error, data) {
      if (data === null) {
        return;
      }
      expect(data.invocation).to.be.an.instanceof(Invocation);
      expect(data.invocation.entryPoints).to.be.an.instanceof(Array);
      expect(data.invocation.entryPoints[0]).to.equal('import');
      expect(data.flow.import.type).to.equal('file.import');

      done();
    });
  });

  it('Create Flow', function (done) {
    apiServer.post('/_api/flow_control/flow')
      .once()
      .replyWithFile(200, repliesDir + 'get-flow-response.json');


    const invocation = new Invocation()
      .addSource(new Source().setPath('/to/here/file.mp4'))
      .addEntryPoint('import');

    const importFileRequest = new ImportFileRequest()
      .setDestination(new Destination().setPath('/to/here/file.mp4'))
      .setSourceUrl('http://from/here/file.mp4');

    const importComponent = new FlowComponent()
      .setType('file.import')
      .setSpecification(importFileRequest)
      .addSuccessor('transcode');

    const transcodeSpecification = new TranscodeSpecification()
      .setDestination(new Destination()
        .setDirectory('/test/output/')
        .setAcl('public')
      ).setQualityRange(new QualityRange({minimum: '240p', maximum: '1440p'}));

    const transcodeComponent = new FlowComponent()
      .setType('av.transcode')
      .setSpecification(transcodeSpecification)
      .setSuccessors([]);

    const createFlowRequest = new CreateFlowRequest()
      .setInvocation(invocation)
      .addFlowComponent('import', importComponent)
      .addFlowComponent('transcode', transcodeComponent);


    flowManager.createFlow(createFlowRequest, (error, data: Flow) => {
      expect(data !== null).to.be.true;
      expect(data.id).to.equal('flow_id');
      done();
    });
  });

  it('Delete Flow', function (done) {
    apiServer.delete('/_api/flow_control/flow/flow_id')
      .once()
      .replyWithFile(200, repliesDir + 'flow-delete-response.json');

    flowManager.deleteFlow('flow_id', function (error, data) {
      expect(data.message).to.equal('OK');
      done();
    });
  });

});
