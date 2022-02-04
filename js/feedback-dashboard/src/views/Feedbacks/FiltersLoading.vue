<template>
  <content-loader
    class="flex flex-col items-center rounded"
    width="100%"
    height="200px"
  >
    <content-loader
      class="mt-3 rounded"
      width="90%"
      height="45px"
      animationDuration="2s"
    />

    <content-loader
      class="mt-3 rounded"
      width="90%"
      height="45px"
      animationDuration="2.3s"
    />

    <content-loader
      class="mt-3 rounded"
      width="90%"
      height="45px"
      animationDuration="2.9s"
    />

    <content-loader
      class="mt-3 rounded"
      width="90%"
      height="45px"
      animationDuration="2.5s"
    />
  </content-loader>
</template>

<script>
import ContentLoader from '@/components/ContentLoader'

export default {
  components: { ContentLoader },
  setup () {
    return {}
  }
}
</script>
