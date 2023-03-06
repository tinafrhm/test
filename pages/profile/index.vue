<template>
  <div class="d-flex flex-column">
    <h1 class="mt-14 d-flex justify-center mb-10">Profile</h1>
    <Inforamtion />
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'

@Component({
  name: 'profile',
  components: {},
})
export default class profile extends Vue {
}
</script>
