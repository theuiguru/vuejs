<template>
  <div>
    <h1>My Friends</h1>
    <li v-for="friend in FriendStore.friends" :key="friend">{{friend}}</li>
    <input v-model="newFriend" v-on:keyup.13="addFriend(newFriend)">
  </div>
</template>

<script>
import FriendStore from '../stores/FriendStore';
import TweetStore from '../stores/TweetStore';

export default {
  data() {
    return {
      newFriend: null,
      FriendStore: FriendStore.data,
      TweetStore
    };
  },
  methods: {
    addFriend(name) {
      FriendStore.methods.addFriend(name);
      this.newFriend = null;
    }
  }
};
</script>