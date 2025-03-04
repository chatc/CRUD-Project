<template>
  <div class="container mt-3">
    <h2>CRUD PROJECT</h2>
    <div class="d-flex flex-row mb-1">
      <button class="btn btn-primary" @click="goToCreate">Add</button>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Username</th>
          <th>Avatar</th>
          <th>ID</th>
        </tr>
      </thead>

      <tbody>
        <!-- ใช้ v-for เพื่อแสดงข้อมูลที่ได้จาก API -->
        <tr v-for="(person, index) in people" :key="person.id">
          <td>{{ index + 1 }}</td>
          <td>{{ person.fname }}</td>
          <td>{{ person.lname }}</td>
          <td>{{ person.username }}</td>
          <img :src="person.avatar" style="width: 50px" alt="Avatar" />

          <td>
            <!-- เพิ่มปุ่ม Edit และ Delete -->
            <button class="btn btn-warning me-1" @click="onUpdate(person.id)">
              Edit
            </button>
            <button class="btn btn-danger" @click="onDelete(person.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableComp",
  data() {
    return {
      people: [], // เก็บข้อมูลที่ได้จาก API
      loading: true, // ใช้เพื่อแสดงข้อความกำลังโหลด
    };
  },

  mounted() {
    // ดึงข้อมูลจาก API หลังจากที่คอมโพเนนต์ถูกโหลดแล้ว
    this.fetchData();
  },

  methods: {
    // ฟังก์ชันดึงข้อมูลจาก API
    fetchData() {
      fetch("https://www.melivecode.com/api/users")
        .then((response) => response.json())
        .then((data) => {
          this.people = data; // เก็บข้อมูลที่ดึงมาใน people
          this.loading = false; // เปลี่ยนสถานะการโหลดเป็น false
        })
        .catch((error) => {
          console.error("Error fetching data:", error); // แสดงข้อผิดพลาด
        });
    },

    goToCreate() {
      // ใช้ this.$router.push() เพื่อไปยังเส้นทาง /create
      this.$router.push("/create");
    },

    // ฟังก์ชัน onDelete เมื่อกด submit
    onDelete(id) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        id: id,
      });

      const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("https://www.melivecode.com/api/users/delete", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          alert(result.message); // แสดงข้อความผลลัพธ์หลังลบ
          this.fetchData(); // เรียกดึงข้อมูลใหม่หลังจากลบ
        })
        .catch((error) => console.error(error));
    },

    // ฟังก์ชันwไปที่หน้าอัปเดตข้อมูล
    onUpdate(id) {
      this.$router.push("/update/" + id); // นำทางไปยัง /update/{id}
    },
  },
};
</script>

<style></style>
