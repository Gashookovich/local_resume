<template>
    <div class="footer">
      <h4>{{ $t('contacts.value') }}:</h4>
      <div class="footer__info">
        <div><strong>{{ $t('telephone.value') }}:</strong>+381629328297</div>
        <div>
          <strong>GitHub:</strong>
          <a
            href="https://github.com/Gashookovich"
            style="color: #FFE4B5; text-decoration: none;"
            target="_blank"
          >
            https://github.com/Gashookovich
          </a>
        </div>
        <div>
          <strong>LinkedIn:</strong>
          <a
              href="https://www.linkedin.com/in/vadim-arzhanov-94703925a"
              style="color: #FFE4B5; text-decoration: none;"
              target="_blank"
          >
            Vadim Arzhanov
          </a>
        </div>
        <div>
          <strong>Telegram:</strong>
          <a
              href="https://t.me/Gashookovich_yo"
              style="color: #FFE4B5; text-decoration: none;"
              target="_blank"
          >
            @Vadim_Arzhanov
          </a>
        </div>
        <div><strong>Email:</strong> vgashookovich@gmail.com</div>
      </div>
    </div>
</template>
  
<script>

  export default {
    name: 'footer-component',
  
  }
</script>
  
<style scoped>
@media screen and (max-width: 1920px) and (min-width: 1600px) {
  .footer {
    height: 300px;
    font-size: 25px;
    background-color: black;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    padding: 0 15px;
    font-family: Georgia, serif;
    color: #FFE4B5;
  }
  .footer__info {
      font-size: 23px;
      padding: 10px 5px;
  }
  .footer__link:hover {
    color: #4B0082;
  }
} 
@media screen and (max-width: 1600px) and (min-width: 1440px) {
  .footer {
    height: 290px;
    font-size: 25px;
    background-color: black;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    padding: 0 15px;
    font-family: Georgia, serif;
    color: #FFE4B5;
  }
  .footer__info {
      font-size: 22px;
      padding: 0px 5px;
  }
  .footer__link:hover {
    color: #4B0082;
  }
} 
@media screen and (max-width: 1440px) and (min-width: 320px) {
  .footer {
    height: 190px;
    background-color: black;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    padding: 0 15px;
    font-family: Georgia, serif;
    color: #FFE4B5;
  }
  .footer_info {
    padding: 10px 50px;
  }
  .footer__link:hover {
    color: #4B0082;
  }
} 
</style>