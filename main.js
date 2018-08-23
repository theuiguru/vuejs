const app = new Vue({
  data: {
    friends: []
  },
  mounted() {
    fetch('http://rest.learncode.academy/api/vue-/friends')
      .then(response => response.json())
      .then(data => {
        this.friends = data;
      });
  },
  template: `
    <div>
      <li v-for="friend in friends">{{friend.name}}</li>
    </div>
  `
});
