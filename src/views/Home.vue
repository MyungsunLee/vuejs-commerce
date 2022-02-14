<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <CommonGreeting msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

import CommonGreeting from '@/components/CommonGreeting.vue';

@Options({
  components: {
    CommonGreeting,
  },
})
export default class Home extends Vue {}
</script>
