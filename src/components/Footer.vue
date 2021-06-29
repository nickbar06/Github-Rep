<template >
  <div>
    <footer>
      <p class="links">Copyright &copy; 2021</p>
      <router-link to="/about">About</router-link>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style >
a {
  color: white;
}

p.links {
  color: white;
  padding-top: 10px;
}

footer {
  margin-top: 30px;
  padding-bottom: 10px;
  text-align: center;
  background-color: black;
}
</style>