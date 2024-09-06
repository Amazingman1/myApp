<template>
  <view class="index">
    <AtButton openType="share" type='primary'>点击分享</AtButton>
    关于我们
  </view>
</template>
<script lang="ts" setup>
import { useLoad, useUnload, useShareAppMessage } from '@tarojs/taro'
  console.log('aboutUs', process.env.TARO_APP_API)
  useLoad(() => {
    console.log('onLoad')
  })

  useUnload(() => {
    console.log('onUnload')
  })
  useShareAppMessage(res => {
    console.log('share', res)
    return {
      title: '分享标题1'
    }
  })
</script>
