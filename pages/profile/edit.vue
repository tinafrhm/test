<template>
  <div class="d-flex flex-column">
    <h1 class="mt-14 d-flex justify-center mb-10">Edit Profile</h1>
    <Inforamtion
      :isEdit="true"
    />
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'nuxt-property-decorator'

@Component({
  name: 'edit',
  components: {},
})
export default class edit extends Vue {
}
</script>
