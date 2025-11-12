<script>
export default {
  name: "Navbar",
};
</script>

<template>
<<<<<<< HEAD
  <nav id="navbar">
    <RouterLink to="/">Go to home</RouterLink>
    <RouterLink to="/about">Go to about</RouterLink>
  </nav>
=======
    <nav id="navbar">
        <RouterLink to="/">Go to home</RouterLink>
        <RouterLink to="/about">Go to about</RouterLink>
        <RouterLink to="/products">Go to products</RouterLink>
    </nav> 
>>>>>>> ce05092fa0da03b22c5caf9f30281c1ae0368e11
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
