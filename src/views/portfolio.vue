<template>
  <PageLayout withNavbar>
    <h1>Portfolio</h1>
    <p class="subtitle">
      Explore some of the projects that we have completed over the years.
    </p>

    <section>
      <h2>Designs</h2>
      <p>
        We take pride in accurately mapping out our designs in 3D to ensure even
        Sound Pressure Level coverage throughout the listening plane and avoid
        unwanted reflections and visual blockages.
      </p>
      <div class="carousel-container">
        <HoverCard
          v-for="(design, index) in designs"
          :key="index"
          :imgSrc="design.img"
          :imgAlt="design.desc"
          class="hover-card"
        >
          <p class="--heading-h4">{{ design.label }}</p>
          <p class="subtitle">{{ design.desc }}</p>
        </HoverCard>
      </div>
    </section>

    <section>
      <h2>Past projects</h2>
      <p>Some of the clients we have worked with over the years:</p>
      <Tablist
        :labels="pastProjects.map((project) => project.year)"
        v-on:set-tab-index="activeProjectTab = $event"
      >
        <ul>
          <li
            v-for="(project, index) in pastProjects[activeProjectTab][
              'projects'
            ]"
            :key="index"
          >
            {{ project }}
          </li>
        </ul>
      </Tablist>
    </section>

    <section>
      <h2>In the news</h2>
      <LinkCard
        v-for="(news, index) in inTheNews"
        :key="index"
        :url="news.href"
      >
        <img :src="news.imgSrc" :alt="news.imgAlt" />
      </LinkCard>
    </section>
  </PageLayout>
</template>

<script>
import PageLayout from '../components/PageLayout.vue';
import Tablist from '../components/Tablist.vue';
import LinkCard from '../components/LinkCard.vue';
import HoverCard from '../components/HoverCard.vue';
import imgWorshipAvl from '../assets/worship_avl.svg';
import imgSac1 from '../assets/SAC-cns-2019-1.png';
import imgSac2 from '../assets/SAC-cns-2019-2.png';
import imgSingLang1 from '../assets/singlang-2019-1.png';
import imgSingLang2 from '../assets/singlang-2019-2.png';

export default {
  name: 'ViewPortfolio',
  components: {
    PageLayout,
    Tablist,
    HoverCard,
    LinkCard,
  },
  data() {
    return {
      activeProjectTab: 0,
      designs: [
        {
          label: 'St. Andrews Cathedral',
          desc: 'Cathedral New Sanctuary Upgrade – L’Acoustics Wifo System with X12 Downfill and X8 Delay Line',
          img: imgSac1,
        },
        {
          label: 'St.Andrews Cathedral',
          desc: 'Cathedral New Sanctuary Upgrade – L’Acoustics Wifo System with X12 Downfill and X8 Delay Line',
          img: imgSac2,
        },
        {
          label: 'Singlang 2019',
          desc: 'Singapore Sports Hub – L’Acoustics K2 System with K2/Kara Outfills',
          img: imgSingLang1,
        },
        {
          label: 'Singlang 2019',
          desc: 'Singapore Sports Hub – L’Acoustics K2 System with K2/Kara Outfills',
          img: imgSingLang2,
        },
      ],
      pastProjects: [
        {
          year: '2020-2021',
          projects: [
            'Awaken Generation “Glorify” 2021 Live Recording & Broadcast – Gateway Theatre, Singapore',
            'Easter Film 2021 “Perception” - Trinity Christian Centre',
            'Harborlight Church – Roxy Square, Singapore',
            'The Blessing Singapore',
            '50th Anniversary Video “He Reigns” - Trinity Christian Centre',
            'Kingdom Invasion Kids Virtual Conference 2020',
            'Impact Life Church – Toh Guan',
          ],
        },
        {
          year: '2018-2019',
          projects: [
            'The Tsoh Show Christmas Production 2019 – Cornerstone Community Church, Singapore',
            'Burning Hearts - 66 Kampung Bugis',
            'Experiencing God The Musical 2019 – St. Andrew’s Cathedral, Singapore',
            'LifeFest 2019 - St. Andrew’s Cathedral, Singapore',
            'SingLang 2019 – National Stadium, Singapore Sports Hub',
            'Petra Church Singapore - Bible House',
            'Asia’s Got Talent Season 3 Grand Finals – Marina Bay Sands Theatre, Singapore',
            'Asia’s Got Talent Season 3 Judges Auditions & Semifinals – Pinewood Studios, Malaysia',
            'Cathedral New Sanctuary - St. Andrew’s Cathedral, Singapore',
            'Unstoppable Love 2018 – Novena Church',
            'Lighthouse Evangelism 40th Anniversary - Zepp - Bigbox',
            'The Room Easter Production 2018 - Cornerstone Community Church',
            'Kingdom Invasion 2018 - Singapore Expo & Convention Center',
          ],
        },
        {
          year: '2016-2017',
          projects: [
            'Victory Family Centre 40th Anniversary – Singapore Indoor Stadium',
            'Snowglobed 2017 - Cornerstone Community Church',
            'Wan Ren He Yi Song 2017 - Singapore Indoor Stadium',
            'Kingdom Invasion 2017 - Singapore Expo & Convention Center',
            'Who is Jesus Musical - Esplanade Theatres on the Bay',
            'Impact Life Church - Bigbox Singapore',
            'Kingdom Invasion 2016 - Suntec City Convention Center',
          ],
        },
      ],
      inTheNews: [
        {
          href: 'https://www.worshipavl.com/details/63299-feature-renewing-st-andrew-s-new-sanctuary',
          imgAlt: 'Worship AVL logo',
          imgSrc: imgWorshipAvl,
        },
      ],
    };
  },
};
</script>

<style scoped>
section {
  padding-top: var(--sp-24);
}

.hover-card {
  min-width: 720px;
}
</style>
