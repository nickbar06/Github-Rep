<template>
  <div class="card" style="width: 100%">
    <img :src="picture" class="avatar" />
    <div class="card-body">
      <h5>{{ firstName }} {{ lastName }}</h5>
      <p>@{{ username }}</p>
      <p class="card-text">Full stack developer from Miami.</p>
      <button @click="getUser()" class="btn btn-primary">Edit Profile</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",

  data() {
    return {
      firstName: "Nick",
      lastName: "Barrionuevo",
      username: "nickbar06",
      email: "nbarr026@fiu.edu",
      gender: "male",
      picture: "https://avatars.githubusercontent.com/u/6477588?v=4",
    };
  },

  props: {
    msg: String,
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();

      var nickname =
        results[0].name.first.substring(0, 4) +
        results[0].name.last.substring(0, 3) +
        Math.floor(Math.random() * 99).toString();

      (this.firstName = results[0].name.first),
        (this.lastName = results[0].name.last),
        (this.username = nickname),
        (this.project = "Apple Interview"),
        (this.email = results[0].email),
        (this.gender = results[0].gender),
        (this.picture = results[0].picture.large),
        console.log(this.firstName);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.avatar {
  border-radius: 50%;
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
}

.card {
  float: left;
}
</style>
