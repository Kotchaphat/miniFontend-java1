<template>
  <v-container>
    <div style="padding: 100px"></div>
    <v-card
      :loading="loading"
      max-width="80%"
      max-height="550px"
      style="
        background-color: rgb(255, 255, 255);
        padding: 30px;
        margin-left: 11%;
      "
    >
      <v-row>
        <v-col cols="12" md="6">
          <v-img
            class="mx-auto"
            width="100%"
            height="84%"
            src="../../public/img/posanime/login-bg.png"
            style="object-fit: cover; object-position: center center"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-card-text class="form">
            <p class="title">Register</p>
            <p class="message">Sign up now and get full access to our app.</p>
            <form @submit.prevent="registerUser">
              <div class="flex">
                <label>
                  <input
                    v-model="user.firstname"
                    class="input"
                    type="text"
                    placeholder="First Name"
                    required
                  />
                </label>
                <label>
                  <input
                    v-model="user.lastname"
                    class="input"
                    type="text"
                    placeholder="Last Name"
                    required
                  />
                </label>
              </div>
              <label style="top: 20px">
                <input
                  v-model="user.userName"
                  class="input"
                  placeholder="userName"
                  required
                />
              </label>
              <label style="top: 30px">
                <input
                  v-model="user.password"
                  class="input"
                  type="password"
                  placeholder="Password"
                  required
                />
              </label>
              <label style="top: 40px">
                <input
                  v-model="user.confirmPassword"
                  class="input"
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </label>
              
              <button class="submit" type="submit" style="margin-top: 50px;margin-left: 95px;width: 200px;">Register</button>
            </form>
            <p class="signin">Already have an account? <a href="http://localhost:8080/login">Login</a></p>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <div class="footer-dark">
      <footer>
        <div class="container">
          <div class="row"></div>
          <p class="copyright">GoJo Anime</p>
        </div>
      </footer>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
      user: {
        firstname: "",
        lastname: "",
        userName: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    async registerUser() {
      // Perform client-side validation if needed
      if (this.user.password !== this.user.confirmPassword) {
        // Handle password mismatch error
        alert("Password and Confirm Password do not match");
        return;
      }

      try {
        // Prepare the user registration data to send to the server
        const userData = {
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          password: this.user.password,
          userName: this.user.userName,
          // Add other fields as needed
        };

        // Make a POST request to your backend
        // You'll need to replace 'your-api-endpoint' with the actual API endpoint
        axios.post("http://localhost:9000/user", userData).then((response) => {
          // Handle success response
          console.log("User registered successfully:", response.data);
          // Redirect the user or show a success message
        });

        this.formData = {
          firstname: "",
          lastname: "",
          password: "",
          userName: "",
        };

        window.alert("Registration successful!");
        this.$router.push("/");
      } catch (error) {
        console.error("Error:", error);
        window.alert("Registration not successful!");
      }
    },
  },
};
</script>

  <style>
.footer-dark {
  padding: 90px 0;
  color: #f0f9ff;
  background-color: #201d1e;
}

.footer-dark h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 16px;
}

.footer-dark ul {
  padding: 0;
  list-style: none;
  line-height: 1.6;
  font-size: 14px;
  margin-bottom: 0;
}

.footer-dark ul a {
  color: inherit;
  text-decoration: none;
  opacity: 0.6;
}

.footer-dark ul a:hover {
  opacity: 0.8;
}

@media (max-width: 767px) {
  .footer-dark .item:not(.social) {
    text-align: center;
    padding-bottom: 20px;
  }
}

.footer-dark .item.text {
  margin-bottom: 36px;
}

@media (max-width: 767px) {
  .footer-dark .item.text {
    margin-bottom: 0;
  }
}

.footer-dark .item.text p {
  opacity: 0.6;
  margin-bottom: 0;
}

.footer-dark .item.social {
  text-align: center;
}

@media (max-width: 991px) {
  .footer-dark .item.social {
    text-align: center;
    margin-top: 20px;
  }
}

.footer-dark .item.social > a {
  font-size: 20px;
  width: 36px;
  height: 36px;
  line-height: 36px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
  margin: 0 8px;
  color: #fff;
  opacity: 0.75;
}

.footer-dark .item.social > a:hover {
  opacity: 0.9;
}

.footer-dark .copyright {
  text-align: center;
  padding-top: 24px;
  opacity: 0.3;
  font-size: 13px;
  margin-bottom: 0;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100%;
  padding: 20px;
  border-radius: 50px;
  position: relative;
  background-color: #ffffff;
  color: #fff;
  border: 0px solid #333;
}

.title {
  font-size: 80px;
  font-weight: 600px;
  font-weight: bold;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  color: #ff0000;
}

.title::before {
  width: 18px;
  height: 18px;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.title::before,
.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: #ff0000;
}

.message,
.signin {
  font-size: 14.5px;
  color: rgb(255, 0, 0);
}

.signin {
  text-align: center;
}

.signin a:hover {
  text-decoration: underline rgb(255, 0, 0);
}

.signin a {
  color: #ff0000;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  background-color: #b3b3b3;
  color: #990909;
  width: 100%;
  padding: 20px 05px 05px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input + span {
  color: rgb(255, 0, 0);
  position: absolute;
  left: 10px;
  top: 0px;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 12.5px;
  font-size: 0.9em;
}

.form label .input:focus + span,
.form label .input:valid + span {
  color: #ff0000;
  top: 0px;
  font-size: 0.7em;
  font-weight: 600;
}

.input {
  font-size: medium;
  padding: auto;
}

.submit {
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 50px;

  margin: 5%;
  color: #fff;
  font-size: 16px;
  transform: 0.3s ease;
  background-color: #ff0000;
}

.submit:hover {
  background-color: #911919;
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>
