const app = new Vue({
  el: "#app",
  data: {
    // name: "Chris",
    // age: 28
    chris: {
      first: "Chris",
      last: "Thomas",
      age: 28
    },
    shawn: {
      first: "Shawn",
      last: "Abraham",
      age: 29
    }
  },
  computed: {
    // chrisFullName() {
    //   return `${this.chris.first} ${this.chris.last}`
    // },
    // shawnFullName() {
    //   return `${this.shawn.first} ${this.shawn.last}`
    // },
    chrisAgeInOneYear() {
      return this.chris.age + 1;
    }
  },
  filters: {
    ageInOneYear(age) {
      return age + 1;
    },
    fullName(value) {
      return `${value.first} ${value.last}`;
    }
  },
  template: `
    <div>
      <h2>Name: {{chris | fullName}}</h2>
      <h2>Age: {{chris.age | ageInOneYear}}</h2>
      <h2>Name: {{shawn | fullName}}</h2>
      <h2>Age: {{shawn.age | ageInOneYear}}</h2>
    </div>
  `
})