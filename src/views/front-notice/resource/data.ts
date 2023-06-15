import { Random } from 'mockjs'
import type { IDataListProps } from './types'
import type { IPageProps } from '@/types'

export function getActiveData(page: IPageProps) {
  const newList: IDataListProps[] = []
  for (let i = 0; i < page.pageSize; i++) {
    newList.push({
      title: Random.ctitle(),
      id: Random.id(),
      time: Random.datetime('yyyy-MM-dd HH:mm:ss'),
      desc: Random.ctitle(100),
      isWatch: Random.boolean(),
      subDesc: Random.ctitle(40),
      subTitle: Random.ctitle(),
      img: require('@/assets/image/notice/notice-detail.png'),
      purse: Random.integer(1, 100)
    })
  }
  return newList
}

export function getOrderData(page: IPageProps) {
  const newList = []
  for (let i = 0; i < page.pageSize; i++) {
    newList.push({
      title: Random.ctitle(),
      id: Random.id(),
      time: Random.datetime('yyyy-MM-dd HH:mm:ss'),
      desc: Random.ctitle(100),
      isWatch: Random.boolean(),
      subDesc: Random.ctitle(40),
      subTitle: Random.ctitle(),
      img: require('@/assets/image/notice/notice-detail.png'),
      purse: Random.integer(1, 100)
    })
  }
  return newList
}
