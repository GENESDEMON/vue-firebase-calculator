<template>
  <div class="hello">
 <button v-if="!authenticated" @click="login">Login</button>
<div v-if="authenticated">
<button @click="logout">Logout</button>
<h1>Hi {{ firstName }}!</h1>
<h1>{{ msg }}</h1>
<router-link to='/calculator'>Go to your Calculator</router-link>
  </div>
  </div>
</template>

<script>
import Firebase from '../firebase.js';
export default {
    name: 'HelloWorld',
    props: {
    msg: String
    },
    data () {
      return {
        user: {
          loggedIn: false,
          data: {}
        }
      }  
    },
     computed: {
        authenticated(){
          return this.user.loggedIn
        },
        firstName(){
          if (this.user.data.displayName) {
            return this.user.data.displayName.split(' ')[0]
          }
          return null
        }
    },
     methods: {
      login() {
        Firebase.login();
      },
      logout() {
        Firebase.logout()
      }
    },
    mounted: function() {
      Firebase.auth.onAuthStateChanged( user => {
        if (user) {
          this.user.loggedIn = true;
          this.user.data = user;
        }
        else {
          this.user.loggedIn = false;
          this.user.data = {};
        }
      })
    }
}
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
</style>
