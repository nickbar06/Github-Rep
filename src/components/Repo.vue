<template >
  <div class="card">
    <div class="card-body" @click="onDelete(repo.id)">
      <h4 class="title">{{ repo.text }}</h4>
      <p class="desc">{{ repo.description }}</p>
      <i class="fas fa-circle"></i>
      <p class="language">{{ repo.language }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Repo",
  props: {
    repo: Object,
  },
  methods: {
    onDelete(id) {
      this.$emit("check-repo", id);
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 10px;
  max-height: 110px;
}

.card-body {
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.fa-circle {
  color: cadetblue;
  display: inline-block;
}

.language {
  display: inline-block;
  padding-left: 10px;
  font-size: 14px;
}

.desc {
  color: #586069;
  font-size: 12px !important;
}

.title {
  color: #0366d6;
  font-size: 14px;
}
</style>