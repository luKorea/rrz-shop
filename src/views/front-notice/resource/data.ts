import uuid from '@/utils/uuid'
import { IDataListProps } from './types'

export function getActiveData() {
  const newList: IDataListProps[] = []
  for (let i = 0; i < 10; i++) {
    newList.push({
      title: '活动通知' + i + Math.floor(Math.random() + 10),
      id: uuid(),
      time: new Date().toLocaleString(),
      desc:
        '恭喜获得20个租币，请查收。为了感谢其长久以来的陪伴，这里的文字请忽略。活动期间每天 11 点还会上线限量礼包，数量有限先到先得，用户们千万不要错过！ ' +
        i,
      isWatch: i % 2 === 0,
      subDesc: '此外，对于所有有贡献的用户' + i,
      subTitle: '小标题' + i,
      img: require('@/assets/image/notice/notice-detail.png'),
      purse: 20
    })
  }
  return newList
}

export function getOrderData() {
  const newList = []
  for (let i = 0; i < 10; i++) {
    newList.push({
      title: '订单已取消' + i,
      id: uuid(),
      time: new Date().toLocaleString(),
      desc: '订单已成功取消，感谢您的关注',
      isWatch: i % 2 === 0,
      subDesc: '此外，对于所有有贡献的用户',
      subTitle: '小标题',
      img: require('@/assets/image/notice/notice-detail.png'),
      purse: 20
    })
  }
  return newList
}
