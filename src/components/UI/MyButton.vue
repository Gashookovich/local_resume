<template>
    <button class="btn">
      <slot></slot>
    </button>
</template>
  
<script>

  export default {
    name: 'my-button',
  }
</script>
  
<style scoped>
@media screen and (max-width: 1920px) and (min-width: 1600px) {
  .btn {
    padding: 10px 15px;
    background: none;
    color: #2E8B57;
    border: 2px solid #2E8B57;
    cursor: pointer;
    border-radius: 15px;
    box-shadow: 2px 2px 4px gray;
    font-family: Georgia, serif;
    font-size: 25px;
  }
  .btn:hover {
    color: #000000;
    border: 2px solid #000000;
  }
}
@media screen and (max-width: 1600px) and (min-width: 1440px) {
  .btn {
    padding: 8px 15px;
    background: none;
    color: #2E8B57;
    border: 2px solid #2E8B57;
    cursor: pointer;
    border-radius: 15px;
    box-shadow: 2px 2px 4px gray;
    font-family: Georgia, serif;
    font-size: 22px;
  }
  .btn:hover {
    color: #000000;
    border: 2px solid #000000;
  }
}
@media screen and (max-width: 1440px) and (min-width: 960px) {
  .btn {
    padding: 10px 15px;
    background: none;
    color: #2E8B57;
    border: 2px solid #2E8B57;
    cursor: pointer;
    border-radius: 15px;
    box-shadow: 2px 2px 4px gray;
    font-family: Georgia, serif;
  }
  .btn:hover {
    color: #000000;
    border: 2px solid #000000;
  }
}
@media screen and (max-width: 960px) and (min-width: 640px) {
.btn {
    padding: 10px 15px;
    background: none;
    color: #2E8B57;
    border: 2px solid #2E8B57;
    cursor: pointer;
    border-radius: 15px;
    box-shadow: 2px 2px 4px gray;
    font-family: Georgia, serif;
  }
  .btn:hover {
    color: #000000;
    border: 2px solid #000000;
  }
  }
  @media screen and (max-width: 640px) and (min-width: 480px) {
    .btn {
    padding: 10px 15px;
    background: none;
    color: #2E8B57;
    border: 2px solid #2E8B57;
    cursor: pointer;
    border-radius: 15px;
    box-shadow: 2px 2px 4px gray;
    font-family: Georgia, serif;
  }
  .btn:hover {
    color: #000000;
    border: 2px solid #000000;
  }
}
@media screen and (max-width: 480px) and (min-width: 320px) {
    .btn {
    padding: 10px 15px;
    background: none;
    color: #2E8B57;
    border: 2px solid #2E8B57;
    cursor: pointer;
    border-radius: 15px;
    box-shadow: 2px 2px 4px gray;
    font-family: Georgia, serif;
  }
  .btn:hover {
    color: #000000;
    border: 2px solid #000000;
  }
  }
</style>