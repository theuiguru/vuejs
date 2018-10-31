const FriendStore = {
  data: {
    friends: ["Alex", "Dennis"]
  },
  methods: {
    addFriend(name) {
      FriendStore.data.friends.push(name);
    }
  }
};

export default FriendStore;