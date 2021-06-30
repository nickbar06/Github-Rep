<template>
  <div class="tabbuttons">
    <router-link class="link" to="/" @click="loadComponent(0)">
      <div class="ghButton" :class="{ active: currentIndex == 0 }">
        <i class="fas fa-book-open"></i>
        Overview
      </div>
    </router-link>
    <router-link class="link" to="/repositories" @click="loadComponent(1)">
      <div class="ghButton" :class="{ active: currentIndex == 1 }">
        <i class="fas fa-bookmark"></i>
        Repositories
        <span class="badge badge-pill badge-light">7</span>
      </div>
    </router-link>
    <div
      class="ghButton"
      :class="{ active: currentIndex == 2 }"
      @click="loadComponent(2)"
    >
      <i class="fas fa-book-tasks"></i>
      <span>Projects</span>
    </div>
    <div
      class="ghButton"
      :class="{ active: currentIndex == 3 }"
      @click="loadComponent(3)"
    >
      <i class="fas fa-box"></i>
      <span>Packages</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "TabButtons",
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    loadComponent(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.ghButton {
  margin-right: 20px;
  display: inline-block;
}

.fas {
  padding-right: 10px;
}

.badge-light {
  color: black;
  background-color: #f8f9fa;
}

.tabbuttons {
  vertical-align: top;
}

.active {
  border-bottom: 2px solid orange;
  cursor: pointer;
}

.ghButton:hover {
  border-bottom: 2px solid grey;
  cursor: pointer;
}

.link {
  text-decoration: none;
  color: black;
  padding-right: 5px;
}
</style>