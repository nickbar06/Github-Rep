<template>
  <div class="tabbuttons">
    <div class="ghButton active" v-on:click="loadComponent(0)">
      <i class="fas fa-book-open"></i><span>Overview</span>
    </div>
    <div class="ghButton" v-on:click="loadComponent(1)">
      <i class="fas fa-bookmark"></i><span>Repositories</span
      ><span class="badge badge-pill badge-light">7</span>
    </div>
    <div class="ghButton" v-on:click="loadComponent(2)">
      <i class="fas fa-book-tasks"></i> <span>Projects</span>
    </div>
    <div class="ghButton" v-on:click="loadComponent(3)">
      <i class="fas fa-box"></i><span>Packages</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "TabButtons",

  methods: {},
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
</style>