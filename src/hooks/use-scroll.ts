//  使用时请设置页面 overflow: auto

import { onMounted, onUnmounted, ref, onDeactivated } from 'vue'
import { throttle } from 'underscore'

declare const RefSymbol: unique symbol
export interface Ref<T = any> {
  value: T
  /**
   * Type differentiator only.
   * We need this to be in public d.ts but don't want it to show up in IDE
   * autocomplete, so we use a private Symbol instead.
   */
  [RefSymbol]: true
}

type MaybeRef<T> = T | Ref<T>
type MaybeRefOrGetter<T> = MaybeRef<T> | (() => T)
export default function useScroll(elRef?: any) {
  let el = window as any

  const isReachBottom = ref(false)

  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const scrollListenerHandler = throttle(() => {
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop
      scrollHeight.value = el.scrollHeight
    }
    if (
      Math.round(clientHeight.value + scrollTop.value) >= scrollHeight.value
    ) {
      isReachBottom.value = true
    }
  }, 100)

  onMounted(() => {
    if (elRef) {
      el = elRef.value
    }
    console.log(el, 'el')
    el.addEventListener('scroll', scrollListenerHandler)
  })

  onUnmounted(() => {
    el.removeEventListener('scroll', scrollListenerHandler)
  })

  onDeactivated(() => {
    el.removeEventListener('scroll', scrollListenerHandler)
  })

  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}
