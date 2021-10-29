<template>
  <PageLayout withNavbar>
    <h1>Our services</h1>

    <Accordion id="live" title="Live" class="accordion">
      <p>
        We are blessed to have been a part of many keystone events in some of
        the largest arenas in Singapore. We believe that attention to detail and
        proper speaker design are what allows us to consistently achieve our
        highest ideals of pursuing presence. Together with our AV rental
        partners, we are able to offer our clients some of the best speaker
        systems from renowned manufacturers such as L’Acoustics and d&b
        Audiotechnik.
      </p>
      <p>
        We have a team of highly experienced audio engineers and consultants who
        are able to meet live audio production needs at any scale. Some of our
        Key clients include:
      </p>
      <ul>
        <li v-for="(client, index) in liveKeyClients" :key="index">
          {{ client }}
        </li>
      </ul>
      <p>Some of our recent Live work include:</p>
      <ul>
        <li v-for="(work, index) in liveKeyWork" :key="index">
          {{ work }}
        </li>
      </ul>
      <p>
        A full list of clients we have worked with can be found
        <router-link
          title="Link to Porfolio page"
          to="/portfolio"
          class="lambda-link"
        >
          here</router-link
        >.
      </p>
    </Accordion>

    <Accordion
      id="fixed-install"
      title="Fixed installation + Consultation"
      class="accordion"
    >
      <p>
        Over the years, our niche lies in audio design and consultation for
        local venues, espcially for Houses of Worship. We strongly believe in
        faithful stewardship of funds and believe our advantage lies in being
        able to advise the best systems that both meet the budget as well as the
        client's needs.
      </p>
      <p>
        Be they full turn-key solutions or consultation for speaker systems, we
        are able to support our client and deliver solutions that far exceed
        expectations.
      </p>
      <p>Our notable clients include:</p>
      <ul>
        <li v-for="(client, index) in consultKeyClients" :key="index">
          {{ client }}
        </li>
      </ul>

      <p>Our partners:</p>
      <div class="carousel-container">
        <LinkCard
          v-for="(partner, index) in consultPartners"
          :key="index"
          :url="partner.href"
        >
          <img :src="partner.imgSrc" :alt="partner.imgAlt" />
        </LinkCard>
      </div>
    </Accordion>

    <Accordion id="broadcast" title="Broadcast + Studio" class="accordion">
      <p>
        The landscape for audio production has changed dramatically in this new
        decade, where live streaming and audio broadcast has become a necessity
        for clients. Our team has successfully helped our clients implement
        broadcast services for traditional mediums like TV as well as modern
        platforms such as YouTube and Facebook Live.
      </p>

      <p>
        For capturing live events, we have a suite of high quality equipment
        that allows for multitrack recording and post production. Our engineers
        are highly experienced and have been able to capture the essence and
        <i>presence</i> of the actual event being documented for the audience.
      </p>
    </Accordion>

    <Accordion
      id="acoustic_design"
      title="Acoustic Design + Treatment"
      class="accordion"
    >
      <p>
        Even the best sound systems can be marred by poor acoustics. Be it a new
        or existing space, we dedicate our time and energy to design solutions
        that allow for optimal acoustic coverage in our client's spaces.
      </p>
    </Accordion>
  </PageLayout>
</template>

<script>
import PageLayout from '../components/PageLayout.vue';
import Accordion from '../components/Accordion.vue';
import LinkCard from '../components/LinkCard.vue';
import imgdb from '../assets/db_logo.svg';
import imglacoustics from '../assets/lacoustics_logo.svg';

export default {
  name: 'ViewServices',
  components: {
    PageLayout,
    Accordion,
    LinkCard,
  },
  data() {
    return {
      liveKeyClients: [
        'Cornerstone Community Church',
        'Lighthouse Evangelism',
        "St. Andrew's Cathedral",
        'Grace Assembly of God',
        'Full Gospel Church (JB)',
        'Facebook Singapore',
      ],
      liveKeyWork: [
        'The Tsoh Show Christmas Production 2019 – Cornerstone Community Church, Singapore',
        'Experiencing God The Musical 2019 – St. Andrew’s Cathedral, Singapore',
        'LifeFest 2019 - St. Andrew’s Cathedral, Singapore',
        'SingLang 2019 – National Stadium, Singapore Sports Hub',
        'Asia’s Got Talent Season 3 Grand Finals – Marina Bay Sands Theatre, Singapore',
        'Asia’s Got Talent Season 3 Judges Auditions & Semifinals – Pinewood Studios, Malaysia',
      ],
      consultKeyClients: [
        "St. Andrew's Cathedral Singapore (Cathedral New Sanctuary)",
        'Harborlight Church Singapore',
        'Burning Hearts @ 66 Kampung Bugis',
        'Petra Church Singapore',
        'Impact Life Church Singapore @ Toh Guan',
      ],
      consultPartners: [
        {
          href: 'https://www.dbaudio.com/global/en/',
          imgAlt: 'd&b Audiotechnik logo',
          imgSrc: imgdb,
        },
        {
          href: 'https://www.l-acoustics.com/en/',
          imgAlt: 'L-Acoustics logo',
          imgSrc: imglacoustics,
        },
      ],
    };
  },
};
</script>

<style scoped>
.accordion {
  margin: var(--sp-24) 0;
}
</style>
