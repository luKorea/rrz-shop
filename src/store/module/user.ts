import { defineStore } from 'pinia'
import { ref } from 'vue'
const userStore = defineStore('user', () => {
  const initState = ref({
    token: null,
    userInfo: {
      avatar: require('@/assets/image/common/avatar.png'),
      username: '租币当钱花',
      purse: null,
      isSign: false
    }
  })

  function initLocalStorage() {
    console.log(initState.value)
  }

  return {
    initState,
    initLocalStorage
  }
})

export default userStore
