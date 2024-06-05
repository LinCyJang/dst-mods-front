export interface RoomsRequest{
  region: string,
  platform: string,
}

export interface RoomRequest{
  region: string,
  rowId: string,
}

export interface RoomsResponse{
  data: {
    GET: any[];
  };
}

