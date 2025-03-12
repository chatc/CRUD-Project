<template>
  <h2 class="mt-3 /mb-5">Create</h2>
  <div class="container-sm py-10">
    <form action="" class="w-50 mx-auto" @submit.prevent="onSubmit">
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
        <button lable="submit" type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router"; // นำเข้า useRouter

export default {
  name: "CreateViews",

  setup() {
    // ใช้ ref เพื่อเก็บค่า
    const fname = ref("");
    const lname = ref("");
    const username = ref("");
    const password = ref("");
    const email = ref("");
    const avatar = ref("");

    // ฟังก์ชันสำหรับสร้างผู้ใช้ใหม่
    const createUser = async () => {
      try {
        const response = await fetch(
          " https://www.melivecode.com/api/users/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              fname: fname.value,
              lname: lname.value,
              username: username.value,
              password: password.value,
              email: email.value,
              avatar: avatar.value,
            }),
          }
        );
        if (response.ok) {
          const data = await response.json();
          console.log("User created successfully:", data);
          resetForm(); // รีเซ็ตฟอร์มหลังจากสร้างผู้ใช้สำเร็จ
          router.push("/"); //กลับไปหน้าหลัก home
        } else {
          throw new Error("Error creating user");
        }
      } catch (error) {
        console.error("Error creating user:", error);
      }
    };

    // ฟังก์ชันสำหรับตั้งค่าฟอร์มให้เป็นค่าว่าง
    const resetForm = () => {
      fname.value = "";
      lname.value = "";
      username.value = "";
      password.value = "";
      email.value = "";
      avatar.value = "";
    };

    const router = useRouter(); // ใช้ useRouter เพื่อเข้าถึง router

    // ฟังก์ชัน onSubmit เมื่อกด submit
    const onSubmit = () => {
      createUser(); // เรียกฟังก์ชัน createUser เมื่อกด submit
    };

    // คืนค่าเพื่อให้สามารถใช้งานใน template ได้
    return {
      fname,
      lname,
      username,
      password,
      email,
      avatar,
      onSubmit,
    };
  },
};
</script>
<style></style>
