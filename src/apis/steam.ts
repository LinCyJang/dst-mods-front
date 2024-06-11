import { get } from '@/utils/methods'
import type { RoomRequest, RoomsRequest } from '@/types/rooms.d'

export const getSystemInfo = () => {
  return get('dst/v1/system')
}

export const installSteamcmd = () => {
  return get('dst/v1/install-steamcmd')
}

export const installDST = (params) => {
  return get('dst/v1/install-dst-server', params)
}