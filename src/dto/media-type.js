/**
 * @type {{AUDIO: string, VIDEO: string, IMAGE: string, DOCUMENT: string}}
 * @enum {string}
 * @readonly
 */
var MediaType = {
    AUDIO: 'music',
    VIDEO: 'video',
    IMAGE: 'picture',
    DOCUMENT: 'document',
    STATIC: 'static_file'
};

/**
 * @type {{AUDIO: string, VIDEO: string, IMAGE: string, DOCUMENT: string}}
 */
module.exports = MediaType;