<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <nuxt/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  name: 'Default',
  components: { }
})

export default class Default extends Vue {

  mounted () {
  }
}
</script>
<style scoped>
</style>
