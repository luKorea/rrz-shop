<template>
  <template v-if="list.length">
    <template v-for="item of list" :key="item.id">
      <notice-item
        :item-info="item"
        @show-details="showDetails"
        type="order"
      ></notice-item>
    </template>
    <div class="nothing-more">没有更多了</div>
  </template>
  <nothing-page v-else></nothing-page>

  <!-- 查看详情 -->
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import nothingPage from '@/components/nothing-page/index.vue'

import type { IDataListProps } from '../resource/types'

interface IProps {
  list: IDataListProps[]
}

defineProps<IProps>()

function showDetails(item: IDataListProps) {
  console.log(item)
}
</script>
