import {
  showDialog,
  showToast,
  showSuccessToast,
  showFailToast,
  showLoadingToast,
  closeToast
} from 'vant'
import 'vant/es/dialog/style'
import 'vant/es/toast/style'

import type { DialogOptions } from 'vant'

const defaultValue: DialogOptions = {
  showCancelButton: true,
  showConfirmButton: true,
  cancelButtonText: '确认删除',
  confirmButtonText: '取消',
  confirmButtonColor: '#00C8BE',
  cancelButtonColor: '#999999'
}

function showFrontDialog(options: DialogOptions) {
  console.log({ ...options, ...defaultValue })
  return new Promise((resolve, reject) => {
    showDialog({ ...options, ...defaultValue })
      .then(() => {
        resolve('confirm')
      })
      .catch(() => reject('cancel'))
  })
}

function showLoading() {
  showLoadingToast({
    duration: 0,
    forbidClick: true,
    message: '加载中'
  })
}

function closeLoading() {
  closeToast()
}

export {
  showDialog,
  showFrontDialog,
  showToast,
  showSuccessToast,
  showFailToast,
  showLoading,
  closeLoading
}
