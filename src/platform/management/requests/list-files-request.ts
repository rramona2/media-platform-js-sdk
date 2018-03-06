export class ListFilesRequest {
  public nextPageToken: string | null = null;
  public pageSize: number | null = 20;
  public orderBy: string | null = null;
  public orderDirection: string | null = null;

  /**
   * @param cursor
   * @returns {ListFilesRequest}
   * @deprecated incorrect param name, use setNextPageToken
   */
  setCursor(cursor: string): this {
    this.nextPageToken = cursor;
    return this;
  }

  /**
   * @param nextPageToken
   * @returns {ListFilesRequest}
   */
  setNextPageToken(nextPageToken: string): this {
    this.nextPageToken = nextPageToken;
    return this;
  }

  /**
   * @param pageSize
   * @returns {ListFilesRequest}
   */
  setPageSize(pageSize: number): this {
    this.pageSize = pageSize;
    return this;
  }

  /**
   * @param orderBy name or date
   * @returns {ListFilesRequest}
   */
  setOrderBy(orderBy: string): this {
    this.orderBy = orderBy;
    return this;
  }

  /**
   * @returns {ListFilesRequest}
   */
  ascending(): this {
    this.orderDirection = 'acs';
    return this;
  }

  /**
   * @returns {ListFilesRequest}
   */
  descending(): this {
    this.orderDirection = 'des';
    return this;
  }
}