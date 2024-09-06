<template>
  <view class="index">
    <Counter />
  </view>
</template>

<script>
import './index.scss'
import Counter from '../../components/CounterAp.vue'

export default {
  name: 'IndexPage',
  components: {
    Counter
  }
}
</script>
