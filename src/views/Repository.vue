<template >
  <div>
    <p class="title">Add new repository</p>
    <Repositories @add-proj="addRepo" />
    <br />
    <p class="title">Repositories</p>
    <Repos :repos="repos" @check-repo="checkRepo" />
  </div>
</template>

<script>
import Repos from "../components/Repos.vue";
import Repositories from "../components/Repositories.vue";

export default {
  name: "Overview",
  components: {
    Repos,
    Repositories,
  },
  data() {
    return {
      repos: [],
    };
  },
  methods: {
    async checkRepo(id) {
      if (confirm("Are you sure you wanna delete?")) {
        const res = await fetch(`api/repos/${id}`, {
          method: "DELETE",
        });
        res.status === 200
          ? (this.repos = this.repos.filter((repo) => repo.id !== id))
          : alert("Error deleting repo");
      }
    },

    async addRepo(newRepo) {
      const res = await fetch("api/repos", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newRepo),
      });

      const data = await res.json();

      this.repos = [...this.repos, data];
    },
    async fetchRepos() {
      const res = await fetch("api/repos");
      const data = await res.json();

      return data;
    },
    async fetchRepo(id) {
      const res = await fetch(`api/repos/${id}`);
      const data = await res.json();

      return data;
    },
  },
  async created() {
    this.repos = await this.fetchRepos();
    console.log(this.repos);
  },
};
</script>
<style lang="">
</style>