<template>
  <v-layout row wrap>
    <v-flex lg6 md6 sm6 xl6 xs12>
      <div class="d-flex mb-4">
        <img width="45" height="45" :src="userAvatar || '/images/ProfileAvatar.svg' " :alt="name">
        <div class="d-flex align-center" v-if="isEdit">
          <input
            id="UploadProfile"
            type="file"
            name="file"
            accept="image/png, image/jpeg"
            @change="uploadImage">
          <label for="UploadProfile">
            آپلود عکس
          </label>
        </div>
      </div>
    </v-flex>
    <v-flex class="d-flex " lg6 md6 sm6 xl6 xs12>
      <div class="d-flex align-center mb-4">
      <span class="grayLight-13-n ml-4">
         نام و نام‌خانوادگی
      </span>
        <v-text-field
          :disabled="!isEdit"
          type="text"
          v-model="userData.name"
        />
      </div>
    </v-flex>
    <v-flex lg6 md6 sm6 xl6 xs12>
      <div class="d-flex mb-4">
        <span class="grayLight-13-n">
          نام کاربری
        </span>
        <v-text-field
          :disabled="!isEdit"
          type="text"
          v-model="userData.id"
        />
      </div>
    </v-flex>
    <v-flex lg6 md6 sm6 xl6 xs12>
      <div class="d-flex mb-4">
        <span class="grayLight-13-n ml-4">
          ایمیل
        </span>
        <v-text-field
          :disabled="!isEdit"
          type="text"
          v-model="userData.email"
        />
      </div>
    </v-flex>
    <v-flex lg6 md6 sm6 xl6 xs12>
      <div class="d-flex mb-4">
        <span class="grayLight-13-n ml-4">
          تاریخ عضویت
        </span>
        <p class="dark-14-m">
          {{date}}
        </p>
      </div>
    </v-flex>
    <v-btn
      @click="$router.push('/profile/edit')"
      v-if="!$route.fullPath.includes('edit')"
    >
      Edit
    </v-btn>
    <v-btn
      @click="handleEdit"
      v-else
    >
      submit
    </v-btn>
    <validation-email
      :show-dialog="editEmail"
      @close="handleEmailChange"
    />
  </v-layout>
</template>
<script lang="ts">
import {Component, Model, Prop, Vue, Watch} from 'nuxt-property-decorator'
@Component({
  name: 'Information',
  components: {}
})
export default class Information extends Vue {
  @Prop({default: false}) isEdit?: string
  private editEmail: boolean = false
  private userData: {
    name: string,
    id: string,
    email: string,
    avatar: string
  } = {
    name: '',
    id: '',
    email: '',
    avatar: ''
  }

  private userAvatar?: string = ''
  private date?: string = '1401/12/15'

  @Watch('avatar')
  checkAvatar(){
    this.userAvatar = this.userData.avatar
  }

  mounted(){
    const userData = this.$store.getters['user/getUserData']
    this.userData.name = userData.name
    this.userData.id = userData.id
    this.userData.email = userData.email
    this.userData.avatar = userData.avatar
  }

  public handleEmailChange(){
    this.editEmail = false
    let userData = {...this.$store.getters['user/getUserData']}
    userData.email = this.userData.email
    this.$store.commit(`user/saveUserInfo`, userData)
    this.$router.push('/profile')
  }

  public async uploadImage($event: { target: { files: any[], value: string } }	) {
    if ($event.target.files[0]){
      const uploadFile = $event.target.files[0]
      this.userAvatar = URL.createObjectURL(uploadFile)
      $event.target.value = ''
    }
  }

  public handleEdit(){
    let userData = { ...this.$store.getters['user/getUserData'] }
    Object.keys(userData).forEach(key => {
      // @ts-ignore
      if (userData[key] !== this.userData[key] && key !== 'email') {
        // @ts-ignore
        userData[key] = this.userData[key]
        this.$store.commit('user/saveUserInfo', userData)
        this.$router.push('/profile')
      }
    })
    if(userData.email !== this.userData.email){
      this.editEmail = true
    }
  }
}
</script>
<style scoped lang="scss">
input[type="file"] {
  display: none;
}
label {
  display: flex;
  cursor: pointer;
  margin-right: 8px;
  border-radius: inherit;
  width: 100%;
  height: inherit;
  object-fit: cover;
}
.grayLight-13-n{
  display: flex;
  color: black;
  font-size: 13px;
}
.dark-14-m{
  display: flex;
  color: black;
  font-size: 14px;
}
</style>
