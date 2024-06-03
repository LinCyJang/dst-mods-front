import type { ModsRequest } from '@/types/mods.d';
import { get } from '@/utils/methods'

export const getMods = (params: ModsRequest) => {
   return get('/dst/v1/mods', params)
}
