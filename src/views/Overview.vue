<template >
  <div>
    <p class="title">Popular Repositories</p>
    <Repos :repos="repos" @check-repo="deleteRepo" />
  </div>
</template>

<script>
import Repos from "../components/Repos.vue";

export default {
  name: "Overview",
  components: {
    Repos,
  },
  data() {
    return {
      repos: [],
    };
  },
  methods: {
    async deleteRepo(id) {
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