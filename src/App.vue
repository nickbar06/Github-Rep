<template>
  <div>
    <Header />

    <div class="container">
      <div class="row">
        <div class="col col-lg-3 col-md- 12 col-sm-12">
          <ProfileCard />
        </div>
        <div class="col col-lg-9 col-sm-12 h-100">
          <br />
          <TabButtons />
          <router-view></router-view>
        </div>
      </div>
    </div>

    <Footer />
  </div>
  <!-- <div class="container"></div> -->
</template>

<script>
import ProfileCard from "./components/ProfileCard.vue";
import Header from "./components/Header.vue";
import TabButtons from "./components/TabButtons.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    ProfileCard,
    Header,
    TabButtons,
    Footer,
  },
  data() {
    return {
      currentView: 0,
    };
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

p.title {
  /* float: left;  */
  text-align: left;
  padding-top: 30px;
  padding-left: 20px;
  font-weight: 500;
  display: block;
}
</style>
