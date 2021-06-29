<template>
  <div>
    <Header></Header>

    <div class="container">
      <div class="row">
        <div class="col col-lg-3">
          <ProfileCard />
        </div>
        <div class="col col-lg-9 h-100">
          <TabButtons @switch-view="switchView" />
          <div v-if="currentView == 0">
            <p class="title">Popular Repositories</p>
            <Repos :repos="repos" @check-repo="checkRepo" />
          </div>
          <div v-if="currentView == 1">
            <p class="title">Add new repository</p>
            <Repositories @add-proj="addRepo"/>
            <br>
            <p class="title">Repositories</p>
            <Repos :repos="repos" @check-repo="checkRepo" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="container"></div> -->
</template>

<script>
import ProfileCard from "./components/ProfileCard.vue";
import Header from "./components/Header.vue";
import TabButtons from "./components/TabButtons.vue";
import Repos from "./components/Repos.vue";
import Repositories from "./components/Repositories.vue";

export default {
  name: "App",
  components: {
    ProfileCard,
    Header,
    TabButtons,
    Repos,
    Repositories
  },
  data() {
    return {
      repos: [],
      currentView: 0
    };
  },
  methods: {
    checkRepo(id) {
      if (confirm("Are you sure you wanna delete?"))
        this.repos = this.repos.filter(repo => repo.id !== id);
    },
    switchView(index) {
      this.currentView = index;
      return this.currentView;
    },
    addRepo(newRepo) {
      this.repos = [...this.repos, newRepo]
    }
  },
  created() {
    this.repos = [
      {
        id: 1,
        text: "Dining-Room",
        description: "Dining Room Application",
        language: "Dart"
      },
      {
        id: 2,
        text: "Resident-Profile",
        description: "Profile Application",
        language: "Dart"
      },
      {
        id: 3,
        text: "Portfolio",
        description: "Portfolio app developed in Flutter Web",
        language: "Dart"
      },
      {
        id: 4,
        text: "SignalR",
        description:
          "An edit of the pub-dev package signalr-flutter-0.1.0 in order to accept extra arguments + a new function to check the status of the hub",
        language: "Swift"
      },
      {
        id: 5,
        text: "Slidable-List-View",
        description:
          "Added capability to show or not show the slidable actions and the amount of actions displayed due to a limitation where every list view item required the same number of actions on all rows.",
        language: "Dart"
      },
      {
        id: 6,
        text: "A request tracker application",
        description: "Dining Room Application",
        language: "Dart"
      }
    ];
  }
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
  display:block;
}
</style>
