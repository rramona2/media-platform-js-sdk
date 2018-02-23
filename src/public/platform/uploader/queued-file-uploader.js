import async from 'async';

/**
 * @param {FileUploader} fileUploader
 * @param {number?} concurrency
 * @constructor
 */

class QueuedFileUploader {
  constructor(fileUploader, concurrency) {
    /**
     * @type {FileUploader}
     */
    this.fileUploader = fileUploader;

    /**
     * @type {QueueObject}
     */
    this.queue = async.queue(uploadWorker, concurrency ? concurrency : 4);

    function uploadWorker(uploadJob, callback) {
      uploadJob.once('upload-end', callback);
      uploadJob.run(fileUploader);
    }

    this.jobs = [];
  }

  /**
   * @param {UploadJob} uploadJob
   * @returns {QueuedFileUploader}
   */
  enqueue(uploadJob) {
    if (this.jobs.indexOf(uploadJob) > -1) {
      console.warn('upload job already queued');
      return this;
    }

    this.jobs.push(uploadJob);
    this.queue.push(
      uploadJob,
      function () {
        var i = this.jobs.indexOf(uploadJob);
        if (i > -1) {
          this.jobs.splice(i, 1);
        }
      }.bind(this)
    );

    return this;
  }

  /**
   * @description pauses the queue, in flight request will continue to completion
   * @returns {QueuedFileUploader}
   */
  pause() {
    this.queue.pause();
    return this;
  }

  /**
   * @description resume a paused queue
   * @returns {QueuedFileUploader}
   */
  resume() {
    this.queue.resume();
    return this;
  }

  /**
   * @description purges the queue, this will not abort in flight requests
   * @returns {QueuedFileUploader}
   */
  kill() {
    this.queue.kill();
    this.jobs = [];
    return this;
  }

  /**
   * @description the number of of jobs left in the queue
   * @returns {*}
   */
  length() {
    return this.queue.length();
  }
}

/**
 * @type {QueuedFileUploader}
 */
export default QueuedFileUploader;
export {QueuedFileUploader};