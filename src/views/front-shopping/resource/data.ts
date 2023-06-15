import { IGoodsListProps } from './types'
import { Random } from 'mockjs'
import type { IPageProps } from '@/types'

export function getGoodsData(page: IPageProps) {
  const newList: IGoodsListProps[] = []
  for (let i = 0; i < page.pageSize; i++) {
    newList.push({
      id: Random.id(),
      title: `顶配 iPhone Xs ${Random.integer(256, 270)} Pro Max`,
      purse: Random.integer(1, 100),
      currentPrice: Random.integer(666, 10000),
      originalPrice: Random.integer(999, 10000),
      count: Random.integer(2000, 10000),
      isFree: Random.boolean(),
      img: require(`@/assets/image/shopping/goods-item${i + 1}.png`)
    })
  }
  return newList
}
