<template>
  <h2 class="mt-3 /mb-5">Update</h2>
  <div class="container-sm py-10">
    <form action="" class="w-50 mx-auto" @submit.prevent="onUpdate">
      <div class="mb-3">
        <label for="id" class="form-label we">ID</label>
        <input
          type="id"
          class="form-control"
          id="id"
          placeholder="ID"
          v-model="id"
          :readonly="isReadOnly"
        />
      </div>

      <div class="mb-3">
        <label for="firtname" class="form-label we">Firtname</label>
        <input
          type="text"
          class="form-control"
          id="firtname"
          placeholder="Firtname"
          v-model="fname"
        />
      </div>

      <div class="mb-3">
        <label for="lastname" class="form-label we">Lastname</label>
        <input
          type="text"
          class="form-control"
          id="lastname"
          placeholder="Lastname"
          v-model="lname"
        />
      </div>

      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          placeholder="Username"
          v-model="username"
        />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="password"
        />
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
          v-model="email"
        />
      </div>

      <div class="mb-3">
        <label for="avatar" class="form-label">Avatar</label>
        <input
          type="url"
          class="form-control"
          id="avatar"
          placeholder="Avatar"
          v-model="avatar"
        />
      </div>
      <div>
        <button lable="Update" type="submit" class="btn btn-primary">
          Update
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute } from "vue-router"; // นำเข้า useRouter

export default {
  name: "UpdateViews",

  setup() {
    const route = useRoute(); // ใช้ useRoute() เพื่อดึงพารามิเตอร์จากเส้นทาง
    const id = ref(route.params.id);
    const fname = ref("");
    const lname = ref("");
    const username = ref("");
    const password = ref("");
    const email = ref("");
    const avatar = ref("");
    const isReadOnly = ref(true); // กำหนดให้ฟิลด์ทั้งหมดเป็น read-only

    const fetchData = () => {
      fetch("https://www.melivecode.com/api/users/" + id.value)
        .then((response) => response.json())
        .then((result) => {
          fname.value = result.user.fname;
          lname.value = result.user.lname;
          username.value = result.user.username;
          password.value = result.user.password;
          email.value = result.user.email;
          avatar.value = result.user.avatar;
        })
        .catch((error) => {
          console.error("Error fetching data:", error); // แสดงข้อผิดพลาด
        });
    };

    fetchData();

    const onUpdate = () => {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        id: id.value,
        fname: fname.value,
        lname: lname.value,
        username: username.value,
        password: password.value,
        email: email.value,
        avatar: avatar.value,
      });

      const requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://www.melivecode.com/api/users/update", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          alert(result.message); // แสดงข้อความผลลัพธ์หลังลบ
          route.push("/"); //กลับไปหน้าหลัก home
        })
        .catch((error) => console.error(error));
    };

    onUpdate();

    return {
      id,
      fname,
      lname,
      username,
      password,
      email,
      avatar,
      onUpdate,
      isReadOnly, // ส่งค่าตัวแปร isReadOnly ไปใน template
    };
  },
};
</script>

<style></style>
