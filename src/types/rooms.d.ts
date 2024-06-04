export interface RoomsRequest{
  region: string,
  platform: string,
}

export interface RoomRequest{
  region: string,
  rowId: number,
}

export interface RoomsResponse{
  data: {
    GET: any[];
  };
}

