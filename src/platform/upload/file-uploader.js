var fs = require('fs');
var Stream = require('stream');
var _ = require('underscore');
var request = require('request');
// require('request-debug')(request);
var MediaType = require('../../dto/media-type');
var ImageDTO = require('../../dto/image/image-dto');
var AudioDTO = require('../../dto/audio/audio-dto');
var VideoDTO = require('../../dto/video/video-dto');
var DocumentDTO = require('../../dto/document/document-dto');

/**
 * @param {ProviderConfiguration} configuration
 * @param {AuthenticatedHTTPClient} authenticatedHttpClient
 * @constructor
 */
function FileUploader(configuration, authenticatedHttpClient) {

    /**
     * @type {AuthenticatedHTTPClient}
     */
    this.authenticatedHttpClient = authenticatedHttpClient;

    this.configuration = configuration;

    this.uploadUrlEndpoint = 'https://' + this.configuration.domain + '/files/upload/url';
}

/**
 * retrieve a pre signed URL to which the file is uploaded
 * @param {string} userId
 * @param {string} mediaType
 * @param {function(Error, {uploadUrl: string}|null)} callback
 * TODO: optional file size for preflight testing
 */
FileUploader.prototype.getUploadUrl = function (userId, mediaType, callback) {

    this.authenticatedHttpClient.jsonRequest('GET', this.uploadUrlEndpoint, userId, { media_type: mediaType }, function (error, body) {

        if (error) {
            callback(error, null);
            return;
        }

        callback(null, { uploadUrl: body.upload_url, uploadToken: body.upload_token })
    })
};

/**
 * @param {string} userId
 * @param {string|Buffer|Stream} source
 * @param {MetadataDTO?} metadata
 * @param {function(Error, ImageDTO)} callback
 */
FileUploader.prototype.uploadImage = function (userId, source, metadata, callback) {

    var params = {};
    if (metadata) {
        params = metadata.toFormParams();
    }

    this.uploadFile(userId, MediaType.IMAGE, source, params, function (error, body) {

        if (error) {
            callback(error, null);
            return;
        }

        callback(null, new ImageDTO(body[0]));
    })
};

/**
 * @param {string} userId
 * @param {string|Buffer|Stream} source
 * @param {MetadataDTO?} metadata
 * @param {function(Error, AudioDTO)} callback
 */
FileUploader.prototype.uploadAudio = function (userId, source, metadata, callback) {

    var params = {};
    if (metadata) {
        params = metadata.toFormParams();
    }

    this.uploadFile(userId, MediaType.AUDIO, source, params, function (error, body) {

        if (error) {
            callback(error, null);
            return;
        }

        callback(null, new AudioDTO(body[0]));
    })
};

/**
 * @param {string} userId
 * @param {string|Buffer|Stream} source
 * @param {EncodingOptions?} encodingOptions
 * @param {MetadataDTO?} metadata
 * @param {function(Error, VideoDTO)} callback
 */
FileUploader.prototype.uploadVideo = function (userId, source, encodingOptions, metadata, callback) {

    var params = {};
    if (encodingOptions) {
        _.extendOwn(params, encodingOptions.toFormParams());
    }

    if (metadata) {
        _.extendOwn(params, metadata.toFormParams());
    }

    this.uploadFile(userId, MediaType.VIDEO, source, params, function (error, body) {

        if (error) {
            callback(error, null);
            return;
        }

        callback(null, new VideoDTO(body[0]));
    })
};

/**
 * @param {string} userId
 * @param {string|Buffer|Stream} source
 * @param {MetadataDTO?} metadata
 * @param {function(Error, DocumentDTO)} callback
 */
FileUploader.prototype.uploadDocument = function (userId, source, metadata, callback) {

    var params = {};
    if (metadata) {
        params = metadata.toFormParams();
    }

    this.uploadFile(userId, MediaType.DOCUMENT, source, params, function (error, body) {

        if (error) {
            callback(error, null);
            return;
        }

        callback(null, new DocumentDTO(body[0]));
    })
};

/**
 * @param {string} userId
 * @param {string} mediaType
 * @param {string|Buffer|Stream} source
 * @param {{}} params
 * @param {function(Error, *)} callback
 * @protected
 */
FileUploader.prototype.uploadFile = function (userId, mediaType, source, params, callback) {

    var calledBack = false;
    var stream = null;
    if (typeof source.pipe === 'function') {
        stream = source;
    } else if (typeof source === 'string') {
        stream = fs.createReadStream(source);
    } else if (source instanceof Buffer) {
        stream = new Stream.PassThrough();
        stream.end(source);
    } else {
        callback(new Error('unsupported source type: ' + typeof source), null);
        return;
    }
    stream.on('error', doCallback);

    this.getUploadUrl(userId, mediaType, function (error, response) {

        if (error) {
            doCallback(error, null);
            return;
        }

        var form = {
            media_type: mediaType,
            upload_token: response.uploadToken,
            file: stream
        };

        _.extendOwn(form, params);
        
        this.authenticatedHttpClient.anonymousFormDataRequest(response.uploadUrl, form, doCallback);
    }.bind(this));

    function doCallback(error, data) {
        if (!calledBack) {
            callback(error, data);
        }
        calledBack = true;
    }
};

/**
 * @type {FileUploader}
 */
module.exports = FileUploader;