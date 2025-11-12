<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <nav id="navbar">
    <RouterLink to="/">Go to home</RouterLink>
    <RouterLink to="/about">Go to about</RouterLink>
    <RouterLink to="/products">Go to products</RouterLink>
  </nav>
</template>

<style scoped>
#navbar {
  position: sticky;
  top: 0;
  overflow: hidden;
  background-color: #333;
}

#navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

.content {
  padding: 16px;
}
</style>
