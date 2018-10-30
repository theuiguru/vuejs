const app = new Vue({
  el: "#app",
  data: {
    // name: "Chris",
    // age: 28
    chris: {
      name: "Chris Thomas",
      age: 28
    },
    shawn: {
      name: "Shawn Abraham",
      age: 29
    }
  },
  template: `
    <div>
      <h2>Name: {{chris.name}}</h2>
      <h2>Age: {{chris.age}}</h2>
      <h2>Name: {{shawn.name}}</h2>
      <h2>Age: {{shawn.age}}</h2>
    </div>
  `
})