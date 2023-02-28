<template>
  <div class="work">
    <h1>{{ $t('work_experience.value') }}</h1>
    <cards-work-list
        :works="works"
    />
    <div class="work__portfolio">
      <h4>{{ $t('portfolio.value') }}</h4>
      <div>
        <a
          href="https://xbyhex.com  "
          style="color: #2F4F4F; text-decoration: none;"
          target="_blank"
        >
          <div class="work__portfolio-link">xbyhex.com</div>
        </a>
      </div>
      <div>
        <a
          href="https://mentalcarecrew.co"
          style="color: #2F4F4F; text-decoration: none;"
          target="_blank"
        >
          <div class="work__portfolio-link">mentalcarecrew.co</div>
        </a>
      </div>
    </div>
    
  </div>
</template>

<script>
import CardsWorkList from "@/components/CardsWorkList";
export default {
  components: {
    CardsWorkList
  },
  data() {
    return {
      works: [
        {
          id: 1,
          company: 'ICL-KPO VS/ICL-КПО ВС',
          jobTitle: 'Developer Intern/Стажер-разработчик',
          start: 'March 2022/Март 2022',
          end: 'June 2022/Июнь 2022',
          responsibilities: 'Participation in the team development of an application site on the Vue' +
            'framework. My task was to develop a log table component with rendering a certain number of logs,' +
            'filtering the table columns, searching by a column when clicking on any cell./Участие в' +
            'командной разработке сайта-приложения на фреймворке Vue. Моей ' +
            'задачей была разработка компонента таблицы логов с рендерингом определённого количества' +
            'логов, фильтрацией столбцов таблицы, поиском по столбцу при клике на любую ячейку.',
        },
        {
          id: 2,
          company: 'JSC Tatelektromontazh/АО Татэлектромонтаж',
          jobTitle: 'Process Engineer/Инженер-технолог',
          start: 'December 2020/Декабрь 2020',
          end: 'July 2021/Июль 2021',
          responsibilities: 'Working with normative documentation. Compiling ' +
              'technological maps of commissioning works. Monitoring and verification' +
              'new electrical equipment on the market.' +
              '/Работа с нормативной документацией. Составление ' +
              'технологических карт пуско-наладочных работ. Мониторинг и проверка' +
              ' нового электрооборудования на рынке.',
        },
        {
          id: 3,
          company: 'JSC Tatelektromontazh/АО Татэлектромонтаж',
          jobTitle: 'Service engineer/Инженер-наладчик',
          start: 'September 2014/Сентябрь 2014',
          end: 'Desember 2020/Декабрь 2020',
          responsibilities: 'Checking, adjustment and start-up of electrical equipment 0.4-6 kV. ' +
              'Preparation of technical progress reports.' +
              '/Проверка, наладка и пуск электрооборудования 0,4-6кВ. ' +
              'Подготовка технических отчётов о проделанной работе.',
        },


      ]
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 1920px) and (min-width: 1600px) {
.work {
  display: flex;
  flex-direction: column;
  color: #2E8B57;
  font-family: Georgia, serif;
  align-items: center;
}
.work__portfolio {
  width: 60%;
  line-height: 1.5;
  border: 1px solid #2E8B57;
  border-radius: 10px;
  color: #2F4F4F;
  background-color: #FFFFE0;
  font-size: 25px;
  margin: 10px 5px;
}
.work__portfolio-link:hover {
  color: #000000;
}
}
@media screen and (max-width: 1600px) and (min-width: 1440px) {
.work {
  display: flex;
  flex-direction: column;
  color: #2E8B57;
  font-family: Georgia, serif;
  align-items: center;
}
.work__portfolio {
  width: 60%;
  line-height: 1.5;
  border: 1px solid #2E8B57;
  border-radius: 10px;
  color: #2F4F4F;
  background-color: #FFFFE0;
  font-size: 24px;
  margin: 10px 5px;
}
.work__portfolio-link:hover {
  color: #000000;
}
}
@media screen and (max-width: 1440px) and (min-width: 960px) {
.work {
  display: flex;
  flex-direction: column;
  color: #2E8B57;
  font-family: Georgia, serif;
  align-items: center;
}
.work__portfolio {
  width: 40%;
  line-height: 1.5;
  border: 1px solid #2E8B57;
  border-radius: 10px;
  color: #2F4F4F;
  background-color: #FFFFE0;
  font-size: 22px;
  margin: 10px 5px;
}
.work__portfolio-link:hover {
  color: #000000;
}
}
@media screen and (max-width: 960px) and (min-width: 640px) {
.work {
  display: flex;
  flex-direction: column;
  color: #2E8B57;
  font-family: Georgia, serif;
  align-items: center;
}
.work__portfolio {
  width: 60%;
  line-height: 1.5;
  border: 1px solid #2E8B57;
  border-radius: 10px;
  color: #2F4F4F;
  background-color: #FFFFE0;
  font-size: 22px;
  margin: 10px 5px;
}
.work__portfolio-link:hover {
  color: #000000;
}
}
@media screen and (max-width: 640px) and (min-width: 480px) {
  .work {
  display: flex;
  flex-direction: column;
  color: #2E8B57;
  font-family: Georgia, serif;
  align-items: center;
}
.work__portfolio {
  width: 70%;
  line-height: 1.5;
  border: 1px solid #2E8B57;
  border-radius: 10px;
  color: #2F4F4F;
  background-color: #FFFFE0;
  font-size: 22px;
  margin: 10px 5px;
}
.work__portfolio-link:hover {
  color: #000000;
}
    
}
@media screen and (max-width: 480px) and (min-width: 320px) {
  .work {
  display: flex;
  flex-direction: column;
  color: #2E8B57;
  font-family: Georgia, serif;
  align-items: center;
}
.work__portfolio {
  width: 83%;
  line-height: 1.5;
  border: 1px solid #2E8B57;
  border-radius: 10px;
  color: #2F4F4F;
  background-color: #FFFFE0;
  font-size: 22px;
  margin: 10px 5px;
}
.work__portfolio-link:hover {
  color: #000000;
}
  h1 {
    font-size: 30px;
  }
}
</style>