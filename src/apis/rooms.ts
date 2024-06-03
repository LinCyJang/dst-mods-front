import { get } from '@/utils/methods'
import type { RoomRequest, RoomsRequest } from '@/types/rooms.d'

/**
 * 地区
 */
export const getRegions = () => {
   return get('/dst/v1/lobby-regions')
}

/**
 * 房间列表
 * @param params
 * @returns 
 */
export const getRooms = (params: RoomsRequest) => {
  return get('/dst/v1/lobby-servers', params)
}

/**
 * 房间信息
 * @param params 
 * @returns 
 */
export const getRooms = (params: RoomRequest) => {
  return get('/dst/v1/lobby-read', params)
}
