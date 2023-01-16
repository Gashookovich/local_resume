<template>
    <div>
      <div class="home-page">
        <img :src="image"/>
        <div class="home-page__content">
          <h1>{{ $t('greetings.value') }}</h1>
          <div class="content">
            {{ $t('history.value') }}
          </div>
        </div>
        <div class="home-page__btns">
          <router-link to="/education"><my-button class="home-page__btns-btn1">{{ $t('education.value') }}</my-button></router-link>
          <router-link to="/work"><my-button class="home-page__btns-btn2">{{ $t('work_experience.value') }}</my-button></router-link>
        <router-link to="/hobbies"><my-button class="home-page__btns-btn3">{{ $t('additional_info.value') }}</my-button></router-link>
        </div>
      </div>
    </div>
</template>
  
<script>
  import image from "@/img/myPhoto3.png";
  import MyButton from "@/components/UI/MyButton";
  
  export default {
    components: {
      MyButton,
    },
    data() {
      return {
        image: image,
      }
    },
  }
  </script>
  
  <style scoped>
  @media screen and (max-width: 1440px) and (min-width: 960px) {
    img {
      height: 100%;
      width: 25%;
      padding-top: 15px;
      border-radius: 120px;
      margin: 10px 5px;
    }
    .home-page {
      display: flex;
      justify-content: space-around;
      color: #4B0082;
    }
    .home-page__content {
      display: flex;
      flex-direction: column;
    }
    h1 {
      margin-top: 30px;
      font-family: Georgia, serif;
    }
    .content {
      line-height: 2;
      margin: 15px 10px;
      padding-top: 5px;
      padding-bottom: 25px;
      font-family: Georgia, serif;
      font-size: 19px;
    }
    .home-page__btns {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-basis: 120px;
      
    }
    .home-page__btns-btn2, .home-page__btns-btn3 {
      margin-top: 80px;
    }
  }
@media screen and (max-width: 960px) and (min-width: 640px) {
    img {
      width: 60%;
      border-radius: 120px;
      margin: 10px 5px;
    }
    .home-page {
      display: flex;
      flex-direction: column;
      justify-content: end;
      color: #4B0082;
      align-items: center;
    }
    .home-page__content {
      display: flex;
      flex-direction: column;
    }
    h1 {
      margin-top: 30px;
      font-family: Georgia, serif;
      font-size: 30px;
    }
    .content {
      line-height: 2;
      margin: 15px 10px;
      padding-top: 5px;
      padding-bottom: 25px;
      font-family: Georgia, serif;
      font-size: 18px;
    }
    .home-page__btns {
      display: flex;
     justify-content: space-around;
      align-items: center;
      margin: 15px 10px;
    }
    .home-page__btns-btn2, .home-page__btns-btn3 {
      margin-left: 100px;
    }
  }
@media screen and (max-width: 640px) and (min-width: 480px) {
    img {
      width: 80%;
      border-radius: 120px;
      margin: 10px 5px;
    }
    .home-page {
      display: flex;
      flex-direction: column;
      justify-content: end;
      color: #4B0082;
      align-items: center;
    }
    .home-page__content {
      display: flex;
      flex-direction: column;
    }
    h1 {
      margin-top: 20px;
      font-family: Georgia, serif;
      font-size: 27px;
    }
    .content {
      line-height: 2;
      margin: 15px 10px;;
      padding-top: 5px;
      padding-bottom: 25px;
      font-family: Georgia, serif;
      font-size: 18px;
    }
    .home-page__btns {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 15px 10px;
    }
    .home-page__btns-btn2, .home-page__btns-btn3 {
      margin-left: 15px;
    }
  }
@media screen and (max-width: 480px) and (min-width: 320px) {
    img {
      width: 90%;
      border-radius: 120px;
      margin: 10px 5px;
    }
    .home-page {
      display: flex;
      flex-direction: column;
      justify-content: end;
      color: #4B0082;
      align-items: center;
    }
    .home-page__content {
      display: flex;
      flex-direction: column;
    }
    h1 {
      margin-top: 30px;
      font-family: Georgia, serif;
      font-size: 25px;
    }
    .content {
      line-height: 2;
      margin: 15px 10px;
      padding-top: 5px;
      padding-bottom: 25px;
      font-family: Georgia, serif;
      font-size: 18px;
    }
    .home-page__btns {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 15px 10px;
    }
    .home-page__btns-btn1 {
      height: 50px;
    }
    .home-page__btns-btn2, .home-page__btns-btn3 {
      margin-left: 15px;
      height: 50px;
    }
  }
</style>