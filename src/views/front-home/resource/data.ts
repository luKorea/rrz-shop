import { IPageProps } from '@/types'
import { IGoodsListProps } from './types'
import { Random } from 'mockjs'

export function getGoodsData(page: IPageProps) {
  const newList: IGoodsListProps[] = []
  for (let i = 0; i < page.pageSize; i++) {
    newList.push({
      id: Random.id(),
      title: `顶配 iPhone Xs ${Random.integer(256, 270)} Pro Max`,
      purse: Random.integer(1, 100),
      currentPrice: Random.integer(666, 10000),
      originalPrice: Random.integer(100, 1000),
      count: 2434,
      isFree: Random.boolean(),
      img: require(`@/assets/image/shopping/goods-item${i + 1}.png`),
      day: Random.integer(30, 100)
    })
  }
  return newList
}
