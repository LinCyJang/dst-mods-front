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

type playerType = {
  colour: string;
  // 玩家的事件等级
  eventlevel: number;
  // 玩家的名称
  name: string;
  // 玩家的Steam网络ID
  netid: string;
  // 玩家的角色预制件
  prefab: string;
}

export type { RoomsType, RegionsType, RoomType, playerType }