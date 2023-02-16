import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueI18n from 'vue-i18n';


Vue.use(VueI18n);

const messages = {
  en: {
    message: {
      value: 'This is an example of content translation.'
    },
    info: {
      value: 'Team of psychologists Mental Care Crew.'
    },
    name: {
      value: 'Arzhanov Vadim Aleksandrovich'
    },
    home: {
      value: 'Home'
    },
    greetings: {
      value: 'Welcome to my business card!'
    },
    history: {
      value: 'My name is Vadim Arzhanov, I am 31 years old. I was born in the city of Kazan, Republic of Tatarstan. Now I live in Serbia. Responsible, energetic, purposeful, sociable and just a good person. I am not afraid of work and always glad to learn something new. Here you can find information about me and my work experience. I am currently a frontend developer. I am engaged in the development of websites, landing pages, SPA. Stack: HTML, CSS, JavaScript, React, Redux, Vue, Vuex, Node.js, working with git, understanding OOP principles and BEM methodology.'
    },
    education: {
      value: 'Education'
    },
    work_experience: {
      value: 'Work experience'
    },
    additional_info: {
      value: 'Additional Information'
    },
    contacts: {
      value: 'Contacts'
    },
    telephone: {
      value: 'Telephone'
    },
    level_education: {
      value: 'The level of education'
    },
    name_institution: {
      value: 'The name of the institution'
    },
    specialization: {
      value: 'Specialization'
    },
    years_education: {
      value: 'Years of education'
    },
    higher: {
      value: 'Higher'
    },
    choice: {
      value: 'Choose from the list'
    },
    organization: {
      value: 'Organization'
    },
    position: {
      value: 'Position'
    },
    beginning_work: {
      value: 'Beginning of work'
    },
    ending_work: {
      value: 'Ending'
    },
    responsibilities: {
      value: 'Responsibilities'
    },
    hobbie_head: {
      value: 'Specifically, I became interested in the development of the front in the spring of 2021. I started to study everything myself from scratch with the help of offline courses and various literature. I was very drawn to this business and to this day I try to learn something new and improve my skill. English Pre-Intermediate.'
    },
    hobbie_married: {
      value: 'I am happily married'
    },
    hobbie_dog: {
      value: 'We have a dog named Marvel'
    },
    hobbie_cool: {
      value: 'We love spending time together'
    },
    hobbie_travel: {
      value: 'We love to travel! Many places have been'
    },
    hobbie_footer: {
      value: 'Also one love hip-hop and everything connected with it. I play basketball and volleyball, skateboard and bmx. I love to walk a lot. I have a very positive attitude to field trips with tents. In general, I do not like to sit still. Peace!'
    },
    portfolio: {
      value: 'Portfolio'
    }
  },
  ru: {
    message: {
      value: 'Это пример перевода контента.'
    },
    info: {
      value: 'Команда психологов Mental Care Crew.'
    },
    name: {
      value: 'Аржанов Вадим Александрович'
    },
    home: {
      value: 'Главная'
    },
    greetings: {
      value: 'Приветствую на моей визитке!'
    },
    history: {
      value: 'Меня зовут Аржанов Вадим, мне 31 год. Я родился в городе Казань, Республика Татарстан. Сейчас живу в Сербии. Ответственный, энергичный, целеустремлённый, коммуникабельный и просто хороший человек. Не боюсь работы и всегда рад научиться чему-то новому. Здесь вы можете ознакомиться с информацией обо мне и моём опыте работы. На данный момент являюсь frontend-разработчиком. Занимаюсь разработкой сайтов, лэндингов, SPA. Стэк: HTML, CSS, JavaScript, React, Redux, Vue, Vuex, Node.js, работа с git, понимание принципов ООП и методологии БЭМ.'
    },
    education: {
      value: 'Образование'
    },
    work_experience: {
      value: 'Опыт работы'
    },
    additional_info: {
      value: 'Дополнительная информация'
    },
    contacts: {
      value: 'Контакты'
    },
    telephone: {
      value: 'Телефон'
    },
    level_education: {
      value: 'Уровень образования'
    },
    name_institution: {
      value: 'Название учебного заведения'
    },
    specialization: {
      value: 'Специализация'
    },
    years_education: {
      value: 'Годы обучения'
    },   
    higher: {
      value: 'Высшее'
    },
    choice: {
      value: 'Выберете из списка'
    },
    organization: {
      value: 'Организация'
    },
    position: {
      value: 'Должность'
    },
    beginning_work: {
      value: 'Начало работы'
    },
    ending_work: {
      value: 'Окончание'
    },
    responsibilities: {
      value: 'Обязанности'
    },
    hobbie_head: {
      value: 'Конкретно разработкой фронта я заинтересовался весной 2021 года. Начал изучать всё сам с нуля с помощью оффлайн курсов и различной литературы. Очень затянуло меня это дело и по сей день стараюсь узнавать что-то новое и качать скилл. Английский Pre-Intermediate.'
    },
    hobbie_married: {
      value: 'Я счастливо женат'
    },
    hobbie_dog: {
      value: 'У нас есть пёс по кличке Марвел'
    },
    hobbie_cool: {
      value: 'Любим классно проводить время вместе'
    },
    hobbie_travel: {
      value: 'Очень любим путешествовать! Много где побывали'
    },
    hobbie_footer: {
      value: 'Также one love хип-хоп и всё что с ним связано. Играю в баскетбол и волейбол, катаюсь на скейте и bmx. Люблю много гулять. Очень положительно отношусь к выездам на природу с палатками. В общем и целом не особо люблю сидеть на месте. Мир!'
    },
    portfolio: {
      value: 'Портфолио'
    }
  },
};



const i18n = new VueI18n({
  locale: 'en',
  messages,
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  i18n
}).$mount('#app')
