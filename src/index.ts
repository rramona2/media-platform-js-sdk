import {Image} from './image/image';
import {NS} from './platform/authentication/NS';
import {Token} from './platform/authentication/token';
import {VERB} from './platform/authentication/VERB';
import {Configuration as ConfigurationServer} from './platform/configuration/configuration';
import {Destination} from './platform/management/job/destination';
import {ExtractPosterSpecification} from './platform/management/job/extract-poster-specification';
import {ExtractStoryboardSpecification} from './platform/management/job/extract-storyboard-specification';
import {ImageOperationSpecification} from './platform/management/job/image-operation-specification';
import {QualityRange} from './platform/management/job/quality-range';
import {Source} from './platform/management/job/source';
import {TranscodeSpecification} from './platform/management/job/transcode-specification';
import {Flow} from './platform/management/metadata/flow';
import {FlowComponent} from './platform/management/metadata/flow-component';
import {Invocation} from './platform/management/metadata/invocation';
import {LiveStream} from './platform/management/metadata/live-stream';
import {CreateArchiveRequest} from './platform/management/requests/create-archive-request';
import {CreateFlowRequest} from './platform/management/requests/create-flow-request';
import {DownloadUrlRequest} from './platform/management/requests/download-url-request';
import {ExtractArchiveRequest} from './platform/management/requests/extract-archive-request';
import {ExtractPosterRequest} from './platform/management/requests/extract-poster-request';
import {ExtractStoryboardRequest} from './platform/management/requests/extract-storyboard-request';
import {ImageOperationRequest} from './platform/management/requests/image-operation-request';
import {ImportFileRequest} from './platform/management/requests/import-file-request';
import {ListFilesRequest} from './platform/management/requests/list-files-request';
import {LiveStreamListRequest} from './platform/management/requests/live-stream-list-request';
import {LiveStreamRequest} from './platform/management/requests/live-stream-request';
import {SearchJobsRequest} from './platform/management/requests/search-jobs-request';
import {TranscodeRequest} from './platform/management/requests/transcode-request';
import {UploadFileRequest} from './platform/management/requests/upload-file-request';
import {UploadUrlRequest} from './platform/management/requests/upload-url-request';
import {MediaPlatform as MediaPlatformServer} from './platform/media-platform';

import {Configuration as ConfigurationClient} from './public/platform/configuration/configuration';
import {MediaPlatform as MediaPlatformClient} from './public/platform/media-platform';
import {UploadJob} from './public/platform/uploader/upload-job';
import {ExportedPublicMediaPlatform} from './types/media-platform/media-platform';

/**
 * @type {MediaPlatform}
 */
export const MediaPlatform = global && global.process && global.process.title ? MediaPlatformServer : MediaPlatformClient;

export {
  ConfigurationServer,
  ConfigurationClient
};

export {ExportedPublicMediaPlatform};

export {
  /**
   * @type {Image}
   */
    Image,
  /**
   *  @type {Source}
   */
    Source,
  /**
   *  @type {Destination}
   */
    Destination,
  /**
   * @type {QualityRange}
   */
    QualityRange
};

export const image = {
  /**
   * @type {Image}
   */
  Image,

  /**
   * @type {ImageOperationSpecification}
   */
  ImageOperationSpecification,

  /**
   * @type {ImageOperationRequest}
   */
  ImageOperationRequest
};

export const file = {
  /**
   * @type {UploadFileRequest}
   */
  UploadFileRequest,

  /**
   * @type {UploadUrlRequest}
   */
  UploadUrlRequest,

  /**
   * @type {DownloadUrlRequest}
   */
  DownloadUrlRequest,

  /**
   * @type {ListFilesRequest}
   */
  ListFilesRequest,

  /**
   * @type {ImportFileRequest}
   */
  ImportFileRequest,

  /**
   *  @type {Source}
   */
  Source,

  /**
   * @type {Destination}
   */
  Destination
};

export const archive = {
  /**
   * @type {CreateArchiveRequest}
   */
  CreateArchiveRequest,

  /**
   * @type {ExtractArchiveRequest}
   */
  ExtractArchiveRequest
};

export const auth = {
  /**
   * @type {Token}
   */
  Token,

  /**
   * @type {{SERVICE: string, MEMBER: string, APPLICATION: string, FILE: string}}
   */
  NS,

  VERB
};

export const transcode = {
  /**
   * @type {TranscodeRequest}
   */
  TranscodeRequest,

  /**
   * @type {TranscodeSpecification}
   */
  TranscodeSpecification,

  /**
   * @type {ExtractPosterRequest}
   */
  ExtractPosterRequest,

  /**
   * @type {ExtractPosterRequest}
   */
  ExtractStoryboardRequest,
  ExtractPosterSpecification,
  ExtractStoryboardSpecification,
  /**
   * @type {QualityRange}
   */
  QualityRange
};

export const flow = {
  /**
   * @type {CreateFlowRequest}
   */
  CreateFlowRequest,

  Flow,
  Invocation,
  FlowComponent
};

export const live = {
  /**
   * @type {LiveStreamRequest}
   */
  LiveStreamRequest,

  /**
   * @type {LiveStreamListRequest}
   */
  LiveStreamListRequest,

  /**
   * @type {LiveStream}
   */
  LiveStream
};

export const job = {
  /**
   * @type {SearchJobsRequest}
   */
  SearchJobsRequest
};

export const upload = {
  /**
   * @type {UploadJob}
   */
  UploadJob
};
