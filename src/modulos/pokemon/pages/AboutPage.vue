<template>
  <h1>About Page</h1>
  <hr>
  <h2>{{ name }}</h2>
  <button @click="ChangeName">Change Name</button>
</template>

<script>

export default {
    data() {
      return {
        name: 'Juan'
      }
    },
    methods: {
      ChangeName: function() {
        this.name = 'Carlos'
      }
    },
    beforeCreate() {
      console.log('beforeCreate')
    },
    created() {
      console.log('created')
    },
    beforeMount() {
      console.log('beforeMount')
    },
    mounted() {
      console.log('mounted')
    },
    beforeUpdate() {
      console.log('beforeUpdate')
    },
    updated() {
      console.log('updated')
    },
}
</script>

<style>

</style>