import uuid from '@/utils/uuid'
import { IGoodsListProps } from './types'

export function getGoodsData() {
  const newList: IGoodsListProps[] = []
  for (let i = 0; i < 4; i++) {
    newList.push({
      id: uuid(),
      title: '顶配 iPhone Xs 256 Pro Max',
      purse: 2048 + i,
      currentPrice: 9.9 + i,
      originalPrice: 12.8 + i,
      count: 2434 + i,
      isFree: i % 2 === 0,
      img: require(`@/assets/image/shopping/goods-item${i + 1}.png`)
    })
  }
  return newList
}
