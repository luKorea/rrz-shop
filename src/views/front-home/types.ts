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
}

export interface IItemProps {
  url: string
  img: string
  id: number
}
