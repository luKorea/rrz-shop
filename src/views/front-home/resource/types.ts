// mock定义在在页面中，正式定义在types.ts
export interface IGoodsListProps {
  id: string
  title: string
  purse: number
  currentPrice: number
  originalPrice: number
  count: number
  isFree: boolean
  img: string
  day: number
}

type TIconType = 'new' | 'sport' | 'pay'

export interface IIconProps {
  title: string
  type: TIconType
  icon: string
  id: string
}

export type TTaskType = 'new' | 'day'
export interface ITaskProps {
  id: string
  title: string
  purse: number
  isSend: boolean
  icon: string
  type: TTaskType
}

export interface IItemProps {
  url: string
  img: string
  id: number
  type: string
}
