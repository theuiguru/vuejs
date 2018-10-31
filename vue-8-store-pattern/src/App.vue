<template>
  <div id="app">
    <Navigation/>
    <Friends/>
    <FooterComponent/>
  </div>
</template>

<script>
import Navigation from './components/Navigation';
import Friends from './components/Friends';
import FooterComponent from './components/Footer';

export default {
  name: 'app',
  components: {
    Navigation,
    Friends,
    FooterComponent
  },
  data() {
    return {
      newFriend: null,
      friends: ['Chris', 'Shawn']
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
}
</style>
