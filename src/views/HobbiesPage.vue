<template>
  <div class="hobbies">
    <h1 class="hobbies__head">{{ $t('additional_info.value') }}</h1>
    <div class="hobbies__content">
      <div class="hobbies__content-head">
        {{ $t('hobbie_head.value') }}
        
      </div>
    </div>
    <div class="hobbies__content-body">
      <div class="hobbies__content-body-block">
        <img class="hobbies__content-body-image" :src="image2"/>
        <div class="hobbies__content-body-text">{{ $t('hobbie_married.value') }}</div>
      </div>
      <div class="hobbies__content-body-block">
        <img class="hobbies__content-body-image" :src="image4"/>
        <div class="hobbies__content-body-text">{{ $t('hobbie_dog.value') }}</div>
      </div>

    </div>
    <div class="hobbies__content-body">
      <div class="hobbies__content-body-block">
        <img class="hobbies__content-body-image" :src="image1"/>
        <div class="hobbies__content-body-text">{{ $t('hobbie_cool.value') }}</div>
      </div>
      <div class="hobbies__content-body-block">
        <img class="hobbies__content-body-image" :src="image3"/>
        <div class="hobbies__content-body-text">{{ $t('hobbie_travel.value') }}</div>
      </div>
    </div>
    <div class="hobbies__content">
      <div class="hobbies__content-footer">{{ $t('hobbie_footer.value') }}</div>
    </div>
  </div>
</template>

<script>
import image1 from "@/img/we.png";
import image2 from "@/img/we2.png";
import image3 from "@/img/we3.png";
import image4 from "@/img/marvel.png";


export default {
  data: function () {
    return {
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 1920px) and (min-width: 1600px) {
  .hobbies {
    color: #2E8B57;
    font-family: Georgia, serif;
  }
  .hobbies__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
  }
  .hobbies__content-head {
    width: 60%;
    font-size: 25px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    border: 1px solid #2E8B57;
    border-radius: 10px;
    padding: 5px 5px;
    margin-top: 10px;
    text-align: center;
    color: #2F4F4F;
    background-color: #FFFFE0;
  }
  .hobbies__content-body {
    display: flex;
  }
  .hobbies__content-body-block {
    width: 85%;
    margin: 10px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .hobbies__content-body-image {
    width: 60%;
    margin-left: 5%;
    border: 1px solid #2E8B57;
    border-radius: 10px;
  }
  .hobbies__content-body-text {
    width: 50%;
    font-size: 25px;
    padding: 5px 5px;
    border: 1px solid #2E8B57;
    border-radius: 10px;
    margin-left: 2%;
    color: #2F4F4F;
    background-color: #FFFFE0;
  }
  .hobbies__content-footer {
    width: 60%;
    font-size: 25px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    border: 1px solid #2E8B57;
    border-radius: 10px;
    padding: 5px 5px;
    margin-top: 10px;
    text-align: center;
    color: #2F4F4F;
    background-color: #FFFFE0;
  }
}
@media screen and (max-width: 1600px) and (min-width: 1440px) {
  .hobbies {
    color: #2E8B57;
    font-family: Georgia, serif;
  }
  .hobbies__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
  }
  .hobbies__content-head {
    width: 60%;
    font-size: 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    border: 1px solid #2E8B57;
    border-radius: 10px;
    padding: 5px 5px;
    margin-top: 10px;
    text-align: center;
    color: #2F4F4F;
    background-color: #FFFFE0;
  }
  .hobbies__content-body {
    display: flex;
  }
  .hobbies__content-body-block {
    width: 85%;
    margin: 10px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .hobbies__content-body-image {
    width: 60%;
    margin-left: 5%;
    border: 1px solid #2E8B57;
    border-radius: 10px;
  }
  .hobbies__content-body-text {
    width: 50%;
    padding: 5px 5px;
    font-size: 24px;
    border: 1px solid #2E8B57;
    border-radius: 10px;
    margin-left: 2%;
    color: #2F4F4F;
    background-color: #FFFFE0;
  }
  .hobbies__content-footer {
    width: 60%;
    font-size: 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    border: 1px solid #2E8B57;
    border-radius: 10px;
    padding: 5px 5px;
    margin-top: 10px;
    text-align: center;
    color: #2F4F4F;
    background-color: #FFFFE0;
  }
}
@media screen and (max-width: 1440px) and (min-width: 960px) {
  .hobbies {
    color: #2E8B57;
    font-family: Georgia, serif;
  }
  .hobbies__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
  }
  .hobbies__content-head {
    width: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    border: 1px solid #2E8B57;
    border-radius: 10px;
    padding: 5px 5px;
    margin-top: 10px;
    text-align: center;
    color: #2F4F4F;
    background-color: #FFFFE0;
  }
  .hobbies__content-body {
    display: flex;
  }
  .hobbies__content-body-block {
    width: 85%;
    margin: 10px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .hobbies__content-body-image {
    width: 60%;
    margin-left: 5%;
    border: 1px solid #2E8B57;
    border-radius: 10px;
  }
  .hobbies__content-body-text {
    width: 50%;
    padding: 5px 5px;
    border: 1px solid #2E8B57;
    border-radius: 10px;
    margin-left: 2%;
    color: #2F4F4F;
    background-color: #FFFFE0;
  }
  .hobbies__content-footer {
    width: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    border: 1px solid #2E8B57;
    border-radius: 10px;
    padding: 5px 5px;
    margin-top: 10px;
    text-align: center;
    color: #2F4F4F;
    background-color: #FFFFE0;
  }
}
@media screen and (max-width: 960px) and (min-width: 640px) {
  .hobbies {
    color: #2E8B57;
    font-family: Georgia, serif;
  }
  .hobbies__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
  }
  .hobbies__content-head {
    width: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    border: 1px solid #2E8B57;
    border-radius: 10px;
    padding: 5px 5px;
    margin-top: 10px;
    text-align: center;
    color: #2F4F4F;
    background-color: #FFFFE0;
  }
  .hobbies__content-body {
    display: flex;
    flex-direction: column;
  }
  .hobbies__content-body-block {
    width: 90%;
    margin: 10px 10px;
    display: flex;
    align-items: center;
  }
  .hobbies__content-body-image {
    width: 70%;
    margin-left: 5%;
    border: 1px solid #2E8B57;
    border-radius: 10px;
  }
  .hobbies__content-body-text {
    width: 100%;
    padding: 5px 5px;
    border: 1px solid #2E8B57;
    border-radius: 10px;
    margin-left: 2%;
    color: #2F4F4F;
    background-color: #FFFFE0;
  }
  .hobbies__content-footer {
    width: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    border: 1px solid #2E8B57;
    border-radius: 10px;
    padding: 5px 5px;
    margin-top: 10px;
    text-align: center;
    color: #2F4F4F;
    background-color: #FFFFE0;
  }
}
@media screen and (max-width: 640px) and (min-width: 480px) {
  .hobbies {
    color: #2E8B57;
    font-family: Georgia, serif;
  }
  .hobbies__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 10px;
  }
  .hobbies__content-head {
    width: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    border: 1px solid #2E8B57;
    border-radius: 10px;
    padding: 5px 5px;
    margin-top: 10px;
    text-align: center;
    color: #2F4F4F;
    background-color: #FFFFE0;
  }
  .hobbies__content-body {
    display: flex;
    flex-direction: column;
  }
  .hobbies__content-body-block {
    width: 90%;
    margin: 10px 10px;
    display: flex;
    align-items: center;
  }
  .hobbies__content-body-image {
    width: 70%;
    margin-left: 5%;
    border: 1px solid #2E8B57;
    border-radius: 10px;
  }
  .hobbies__content-body-text {
    width: 100%;
    padding: 5px 5px;
    border: 1px solid #2E8B57;
    border-radius: 10px;
    margin-left: 2%;
    color: #2F4F4F;
    background-color: #FFFFE0;
  }
  .hobbies__content-footer {
    width: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    border: 1px solid #2E8B57;
    border-radius: 10px;
    padding: 5px 5px;
    margin-top: 10px;
    text-align: center;
    color: #2F4F4F;
    background-color: #FFFFE0;
  }
}
@media screen and (max-width: 480px) and (min-width: 320px) {
  .hobbies {
    color: #2E8B57;
    font-family: Georgia, serif;
  }
  .hobbies__head {
    font-size: 25px;
  }
  .hobbies__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 5px;
  }
  .hobbies__content-head {
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    border: 1px solid #2E8B57;
    border-radius: 10px;
    padding: 5px 5px;
    margin-top: 10px;
    text-align: center;
    color: #2F4F4F;
    background-color: #FFFFE0;
  }
  .hobbies__content-body {
    display: flex;
    flex-direction: column;
  }
  .hobbies__content-body-block {
    width: 100%;
    margin: 5px 5px;
    display: flex;
    align-items: center;
  }
  .hobbies__content-body-image {
    width: 65%;
    margin-left: 1%;
    border: 1px solid #2E8B57;
    border-radius: 10px;
  }
  .hobbies__content-body-text {
    width: 33%;
    padding: 1px 1px;
    border: 1px solid #2E8B57;
    border-radius: 10px;
    margin-left: 2%;
    color: #2F4F4F;
    background-color: #FFFFE0;
    font-size: 15px;
  }
  .hobbies__content-footer {
    width: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.5;
    border: 1px solid #2E8B57;
    border-radius: 10px;
    padding: 5px 5px;
    margin-top: 10px;
    text-align: center;
    color: #2F4F4F;
    background-color: #FFFFE0;
  }
}
</style>