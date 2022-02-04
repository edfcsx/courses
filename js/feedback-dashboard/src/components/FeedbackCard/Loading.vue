<template>
  <content-loader
    class="flex flex-col items-center rounded"
    width="100%"
    height="300px"
  >
    <content-loader
      class="mt-3 rounded"
      width="90%"
      height="90px"
      animationDuration="2s"
    />

    <content-loader
      class="mt-3 rounded"
      width="90%"
      height="90px"
      animationDuration="2.3s"
    />

    <content-loader
      class="mt-3 rounded"
      width="90%"
      height="90px"
      animationDuration="2.6s"
    />
  </content-loader>
</template>

<script>
import ContentLoader from '@/components/ContentLoader'

export default {
  components: { ContentLoader }
}
</script>
