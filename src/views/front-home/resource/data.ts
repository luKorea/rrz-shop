import uuid from '@/utils/uuid'
import { IGoodsListProps } from './types'

export function getGoodsData() {
  const newList: IGoodsListProps[] = []
  for (let i = 0; i < 4; i++) {
    newList.push({
      id: uuid(),
      title: `顶配 iPhone Xs 25${i} Pro Max`,
      purse: 2048,
      currentPrice: 9.9,
      originalPrice: 12.8 + i,
      count: 2434,
      isFree: true,
      img: require(`@/assets/image/shopping/goods-item${i + 1}.png`),
      day: 30 + i
    })
  }
  return newList
}
