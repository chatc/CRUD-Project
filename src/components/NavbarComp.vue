<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid d-flex flex-row mb-1">
      <ul class="navbar-nav mx-auto">
        <!-- ใช้ mx-auto เพื่อจัดกลาง -->
        <li class="nav-item ms-3">
          <router-link to="/" class="text-decoration-none text-light"
            >Home</router-link
          >
        </li>

        <li class="nav-item ms-3">
          <router-link to="/create" class="text-decoration-none text-light"
            >Create</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComp",
};
</script>

<style scoped>
.navbar-nav .nav-link {
  color: #ffffff; /* สีขาวในสถานะปกติ */
}

.navbar-nav .nav-link:hover {
  color: #ff6347; /* สี Tomato เมื่อ hover */
}
</style>
