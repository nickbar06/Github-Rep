<template>
  <div>
    <div :key="r.id" v-for="r in repos" class="col col-lg-12">
      <Repo :repo="r" @check-repo="onDelete(r.id)" />
    </div>
  </div>
</template>

<script>
import Repo from "../components/Repo.vue";

export default {
  name: "Repos",
  components: {
    Repo,
  },
  props: {
    repos: Array,
  },
  methods: {
    onDelete(id) {
      this.$emit("check-repo", id);
    },
  },
  data() {},
};
</script>

<style scoped>
h3 {
  color: black;
}

.col {
  padding-left: 20px;
}
</style>