<template>
  <div class="education">
    <h1>{{ $t('education.value') }}</h1>
    <div class="education__select">
      <!-- <my-select
          v-model="selectedSort"
          :options="sortOptions"
      /> -->
    </div>
    <cards-aducation-list
        :cards="sortedCards"
    />
    <div class="education__image">
      <img class="image" :src="image1"/>
      <img class="image" :src="image2"/>
    </div>
    <div class="education__image">
      <img class="image" :src="image3"/>
      <img class="image" :src="image4"/>
    </div>
  </div>
</template>

<script>
import image1 from "@/img/diplom0.png";
import image2 from "@/img/diplom1.png";
import image3 from "@/img/diplom2.png";
import image4 from "@/img/diplom3.png";
// import MySelect from "@/components/UI/MySelect.vue";
import CardsAducationList from "@/components/CardsAducationList.vue";

export default {
  components: {
    CardsAducationList,
    // MySelect,
  },
  data() {
    return {
      image1: image1,
      image2: image2,
      image3: image3,
      image4: image4,
      cards: [
        {
          id: 1,
          education: 'Higher/Высшее',
          organization: 'Kazan State Energy University/Казанский Государственный Энергетический Университет',
          specialization: 'Power supply of industrial enterprises/Электроснабжение промышленных предприятий',
          year: '2009-2014',
        },
        {
          id: 2,
          education: 'Online retraining course/Онлайн курс переквалификации',
          organization: 'Innopolis University/Университет Иннополис',
          specialization: 'Fundamentals of frontend development/Основы frontend разработки',
          year: '2021-2022',
        },
        {
          id: 3,
          education: 'Offline course/Оффлайн курс',
          organization: 'BE ON MAX',
          specialization: 'Basics of HTML5 and CSS3/Основы HTML5 и CSS3',
          year: '2021',
        },
        {
          id: 4,
          education: 'Offline course/Оффлайн курс',
          organization: 'ITDVN',
          specialization: 'JavaScript starter',
          year: '2021',
        },
        {
          id: 5,
          education: 'Offline course/Оффлайн курс',
          organization: 'Cyber Bionic Systematic',
          specialization: 'JavaScript: Basic Course',
          year: '2021',
        },
        {
          id: 6,
          education: 'Offline course/Оффлайн курс',
          organization: 'Cyber Bionic Systematic',
          specialization: 'JavaScript: Advanced Course',
          year: '2021',
        },
        {
          id: 7,
          education: 'Refresher course/Курс повышения квалификации',
          organization: 'Society of Inventors and Innovators of the Republic of Tatarstan/Общество изобретателей и рационализаторов Республики Татарстан',
          specialization: 'Patenting/Патентоведение/',
          year: '2020',
        },
      ],
      selectedSort: '',
      searchQuery: '',
      sortOptions: [
        {value: 'education', name: 'The level of education/Уровень образования'},
        {value: 'organization', name: 'The name of the institution/Название учебного заведения'},
        {value: 'specialization', name: 'Specialization/Специализация'},
      ]
    }
  },
  computed: {
    sortedCards() {
      return [...this.cards].sort((card1, card2) => card1[this.selectedSort]?.localeCompare(card2[this.selectedSort]))
    },
  }
}
</script>

<style scoped>
@media screen and (max-width: 1440px) and (min-width: 960px) {
  .education {
    color: #4B0082;
    font-family: Georgia, serif;
  }
  .education__select {
    display: flex;
    justify-content: flex-end;
  }
  .education__image {
    display: flex;
    flex-direction: row;
    margin: 5px 5px;
  }
  .image {
    width: 48%;
    margin: 5px 5px;
    border: 2px solid #4B0082;
  }
}
@media screen and (max-width: 960px) and (min-width: 640px) {
  .education {
    color: #4B0082;
    font-family: Georgia, serif;
  }
  .education__select {
    display: flex;
    justify-content: flex-end;
  }
  .education__image {
    display: flex;
    flex-direction: row;
    margin: 5px 5px;
  }
  .image {
    width: 48%;
    margin: 5px 5px;
    border: 2px solid #4B0082;
  }
}
@media screen and (max-width: 640px) and (min-width: 480px) {
  .education {
    color: #4B0082;
    font-family: Georgia, serif;
  }
  .education__select {
    display: flex;
    justify-content: flex-end;
  }
  .education__image {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 5px;
  }
  .image {
    width: 90%;
    margin: 5px 5px;
    border: 2px solid #4B0082;
  }
}
@media screen and (max-width: 480px) and (min-width: 320px) {
  .education {
    color: #4B0082;
    font-family: Georgia, serif;
  }
  .education__select {
    display: flex;
    justify-content: flex-end;
  }
  .education__image {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 5px;
  }
  h1 {
    font-size: 30px;
  }
  .image {
    width: 95%;
    margin: 5px 5px;
    border: 2px solid #4B0082;
  }
}
</style>