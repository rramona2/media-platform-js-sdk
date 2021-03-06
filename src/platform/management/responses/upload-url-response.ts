/**
 * Upload Url Response Interface
 * @doc UploadUrlResponse
 */
export interface IUploadUrlResponse {
  uploadToken: string;
  uploadUrl: string;
}

/**
 * Upload Url Response
 * @doc UploadUrlResponse
 */
export class UploadUrlResponse implements IUploadUrlResponse {
  public uploadToken: string;
  public uploadUrl: string;

  constructor(data: IUploadUrlResponse) {
    this.uploadToken = data.uploadToken;
    this.uploadUrl = data.uploadUrl;
  }
}
