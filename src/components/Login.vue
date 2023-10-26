<template>
<<<<<<< HEAD
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
            <p class="title">Login</p>
            <p class="message">Login now and get full access to our app.</p>

            <form @submit.prevent="login">
              <label style="top: 20px">
                <input style="top: 200px;"
                  v-model="userName"
                  class="input"
                  type="text"
                  placeholder=""
                  required
                />
                <span>userName</span>
              </label>
              <label style="top: 50px">
                <input
                  v-model="password"
                  class="input"
                  type="password"
                  placeholder=""
                  required
                />
                <span>Password</span>
              </label>
              <p style="top: 100px"></p>
              <button
                class="submit"
                style="margin-top: 50px; width: 200px; margin-left: 90px"
                type="submit"
              >
                Login
              </button>
            </form>

            <p class="signin">Don't have an account? <a href="http://localhost:8080/Register">Signup</a></p>
=======
  <v-container  >
    <div style="padding: 100px;"></div>
    <v-card
      :loading="loading"
     
      max-width="80%"
      max-height="550px"
      style="background-color: rgb(255, 255, 255); padding: 30px;margin-left: 11%;"
      
>

      <v-row>
        <v-col cols="12" md="6">
          <v-img
          
            class="mx-auto"
            width="100%"
            height="84%"
            
            src="../../public/img/posanime/login-bg.png" style="object-fit:
            cover; object-position: center center; "
            
            ></v-img
          >
        </v-col>
        <v-col cols="12" md="6">
          <v-card-text class="form">
           
            <p class="title" >Login</p>
           
            <p class="message">Login now and get full access to our app.</p>
          
            <label style="top: 20px;">
              <input class="input" type="password" placeholder="" required="" />
              <span>Username</span>
            </label>
            <label style="top: 50px;">
              <input class="input" type="password" placeholder="" required="" />
              <span>password</span>
            </label>
            <p  style="top: 100px;"></p>
            <button class="submit" style="margin-top: 50px; width: 200px; margin-left: 90px;" >Login</button>
            <p class="signin">
              Already have an acount ? <a href="#">Signin</a>
            </p>
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
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
</template >
  
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
<<<<<<< HEAD
  background-color: #ff00002a;
=======
  background-color: #ff0000;
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
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
<<<<<<< HEAD

=======
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input + span {
  color: rgb(255, 0, 0);
  position: absolute;
  left: 10px;
<<<<<<< HEAD
  margin-top: -35px;
  
=======
  top: 0px;
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
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
<<<<<<< HEAD

=======
  
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
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
  
<<<<<<< HEAD
<script>
import axios from "axios"; // Import Axios for making HTTP requests

export default {
  data() {
    return {
      userName: "",
      password: "",
      loading: false, // You can use this to show a loading indicator during login
    };
  },
  methods: {
    login() {
      // Set loading to true to show a loading indicator
      this.loading = true;

      // Replace with your backend API endpoint for user authentication
      const loginEndpoint = "http://localhost:9000/login"; // Update with your actual endpoint

      // Prepare the login data to send to the server
      const loginData = {
        userName: this.userName,
        password: this.password,
      };

      // Make an HTTP POST request to the login endpoint
      axios
        .post(loginEndpoint, loginData)
        .then((response) => {
          // Handle a successful login response
          this.loading = false; // Hide the loading indicator

          // Redirect to a new page or perform some action upon successful login
          console.log("Login successful", response.data);

          localStorage.setItem("auth", JSON.stringify(response.data));
          const auth = JSON.parse(localStorage.getItem("auth"));
          console.log(auth);

          window.alert("Login successful!");
          this.$router.push("/");
        })
        .catch((error) => {
          // Handle login error
          this.loading = false; // Hide the loading indicator

          // Display an error message or handle the error as needed
          console.error("Login failed", error);
        });
    },
  },
};
</script>

=======
  <script>


</script>
  
>>>>>>> 4a25b1aae0c1fdd1388140efd685cdeae818ca75
  
  