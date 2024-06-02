export interface ModsRequest{
  page?:number,
  pageSize?:number,
  searchText?: string
}

export interface ModsRespones{
  data: {
    publishedfiledetails: any[]; // 替换为具体的类型
  };
}
