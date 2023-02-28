<template>
    <div class="navbar">
      <div>{{ $t('name.value') }}</div>
      <div class="navbar__btns">
        <div>
          <router-link to="/">
            <my-button style="margin-right: 15px;">
              {{ $t('home.value') }}
            </my-button>
          </router-link>
        </div>
        <div>
            <SwitchLanguage />
        </div>
      </div>
    </div>
</template>
  
<script>
import SwitchLanguage from './SwitchLanguage.vue';
import MyButton from './UI/MyButton.vue';

export default {
    name: 'navbar-component',
    components: {
        SwitchLanguage,
        MyButton
    }
}
</script>
  
<style scoped>
@media screen and (max-width: 1920px) and (min-width: 1600px) {
    .navbar {
      position: fixed;
      top: 0;
      width: 97.5%;
      height: 70px;
      background-color: #FFFFE0;
      display: flex;
      align-items: center;
      padding: 0 15px;
      font-family: Georgia, serif;
      font-size: 32px;
      color: #000000;
    }
    .navbar__btns {
        display: flex;
        justify-content: right;
        margin-left: auto;
        align-items: center;
    }
  }
@media screen and (max-width: 1600px) and (min-width: 1440px) {
    .navbar {
      position: fixed;
      top: 0;
      width: 97.5%;
      height: 60px;
      background-color: #FFFFE0;
      display: flex;
      align-items: center;
      padding: 0 15px;
      font-family: Georgia, serif;
      font-size: 30px;
      color: #000000;
    }
    .navbar__btns {
        display: flex;
        justify-content: right;
        margin-left: auto;
        align-items: center;
    }
  }
@media screen and (max-width: 1440px) and (min-width: 960px) {
    .navbar {
      position: fixed;
      top: 0;
      width: 96.5%;
      height: 50px;
      background-color: #FFFFE0;
      display: flex;
      align-items: center;
      padding: 0 15px;
      font-family: Georgia, serif;
      font-size: 20px;
      color: #000000;
    }
    .navbar__btns {
        display: flex;
        justify-content: right;
        margin-left: auto;
        align-items: center;
    }
  }
@media screen and (max-width: 960px) and (min-width: 640px) {
    .navbar {
      position: fixed;
      top: 0;
      width: 95%;
      height: 50px;
      background-color: #FFFFE0;
      display: flex;
      align-items: center;
      padding: 0 15px;
      font-family: Georgia, serif;
      font-size: 20px;
      color: #000000;
    }
    .navbar__btns {
        display: flex;
        justify-content: right;
        margin-left: auto;
        align-items: center;
    }
  }
@media screen and (max-width: 640px) and (min-width: 480px) {
    .navbar {
      position: fixed;
      top: 0;
      width: 93%;
      height: 50px;
      background-color: #FFFFE0;
      display: flex;
      align-items: center;
      padding: 0 15px;
      font-family: Georgia, serif;
      font-size: 17px;
      color: #000000;
    }
    .navbar__btns {
        display: flex;
        justify-content: right;
        margin-left: auto;
        align-items: center;
    }
  }
@media screen and (max-width: 480px) and (min-width: 320px) {
    .navbar {
      position: fixed;
      top: 0;
      width: 89%;
      height: 50px;
      background-color: #FFFFE0;
      display: flex;
      align-items: center;
      padding: 0 15px;
      font-family: Georgia, serif;
      font-size: 17px;
      color: #000000;
    }
    .navbar__btns {
        display: flex;
        justify-content: right;
        margin-left: auto;
        align-items: center;
    }
  }
</style>