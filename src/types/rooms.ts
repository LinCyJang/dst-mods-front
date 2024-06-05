type RoomsType = {
  name: string;
  platform: number;
  password: boolean;
  pvp: boolean;
  season: string;
  dedicated: boolean;
  serverpaused: boolean;
  mode: string;
  connected: number;
  maxconnections: number;
  tags: string,
  __addr: string;
  __rowId: string;
}

type RegionsType = {
  LobbyRegions: object[]
}

type RoomType = {

}

export type { RoomsType, RegionsType, RoomType }