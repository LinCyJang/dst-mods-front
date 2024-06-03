export interface ModsRequest{
  page?:number,
  pageSize?:number,
  searchText?: string
}

export interface ModsRespones{
  data: {
    publishedfiledetails: any[];
    total: number// 替换为具体的类型
  };
}
