<template>
  <v-dialog
    v-model="showDialog"
  >
    <span>are you agree</span>
    <v-text-field
      type="text"
      v-model="code"
      :error-messages="error"
    />
    <v-btn @click="submitCode">submit</v-btn>
  </v-dialog>
</template>
<script lang="ts">
import {Component, Prop, Vue,} from 'nuxt-property-decorator'

@Component({
  name: 'validationEmail',
})
export default class validationEmail extends Vue {
  @Prop() showDialog ?: boolean = false
  private code: string = ''
  private error: string = ''
  submitCode(){
    if(this.code === '1234'){
      this.$emit('close')
    }else {
      this.error = 'wrong!!!'
    }
  }
}
</script>

<style lang="scss">

.v-dialog__content{
  & .v-dialog{
    max-width: 428px;
    padding: 20px;
    border-radius: 16px;
    background: #ffffff;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.08);
  }
}

</style>
