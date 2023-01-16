<template>
  <div>
    <select v-model="$i18n.locale">
      <option
        v-for="(lang, i) in langs"
        :key="`lang-${i}`"
        :value="lang">
          {{ lang }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SwitchLocale',
  data() {
    return { langs: ['en', 'ru'] }
  }
}
</script>

<style>
@media screen and (max-width: 1440px) and (min-width: 960px) {
select {
    width: 80px;
    height: 38px;
    font-size: 18px;
    outline: 0;
    background-color: #FFE4B5;
    border-radius: 15px;
    border: 2px solid #7B68EE;
    box-shadow: 2px 2px 4px gray;
    cursor: pointer;
    color: #7B68EE;
  }  
select:hover {
    background-color: #FFFF00;
    color: #4B0082;
    border: 2px solid #4B0082;
  }
}
@media screen and (max-width: 960px) and (min-width: 640px) {
select {
    width: 80px;
    height: 38px;
    font-size: 18px;
    outline: 0;
    background-color: #FFE4B5;
    border-radius: 15px;
    border: 2px solid #7B68EE;
    box-shadow: 2px 2px 4px gray;
    cursor: pointer;
    color: #7B68EE;
  }
select:hover {
    background-color: #FFFF00;
    color: #4B0082;
    border: 2px solid #4B0082;
  }
}
@media screen and (max-width: 640px) and (min-width: 480px) {
select {
    width: 80px;
    height: 38px;
    font-size: 18px;
    outline: 0;
    background-color: #FFE4B5;
    border-radius: 15px;
    border: 2px solid #7B68EE;
    box-shadow: 2px 2px 4px gray;
    cursor: pointer;
    color: #7B68EE;
  }
select:hover {
    background-color: #FFFF00;
    color: #4B0082;
    border: 2px solid #4B0082;
  }
}
@media screen and (max-width: 640px) and (min-width: 480px) {
select {
    width: 80px;
    height: 38px;
    font-size: 18px;
    outline: 0;
    background-color: #FFE4B5;
    border-radius: 15px;
    border: 2px solid #7B68EE;
    box-shadow: 2px 2px 4px gray;
    cursor: pointer;
    color: #7B68EE;
  }
select:hover {
    background-color: #FFFF00;
    color: #4B0082;
    border: 2px solid #4B0082;
  }
}
@media screen and (max-width: 480px) and (min-width: 320px) {
select {
    width: 70px;
    height: 38px;
    font-size: 18px;
    outline: 0;
    background-color: #FFE4B5;
    border-radius: 15px;
    border: 2px solid #7B68EE;
    box-shadow: 2px 2px 4px gray;
    cursor: pointer;
    color: #7B68EE;
  }
select:hover {
    background-color: #FFFF00;
    color: #4B0082;
    border: 2px solid #4B0082;
  }
}
</style>