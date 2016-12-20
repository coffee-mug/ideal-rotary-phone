<template>
<div>
  <form @submit.prevent="childSubmit()">
    <template v-for="f in fields">
      <div class="form-group" >
        <label :id="f.id" for="f.id">{{ f.id }}</label>
        <input class="form-control" id="f.id" name="f.name" v-model="f.value" />
      </div>
    </template>
    <input type="submit" class="btn btn-default" value="Send" />
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['fields'],
  methods: {
    childSubmit() {
      // Thinking of passing the route as a parameter of the same method. 
      var fieldsToUpdate = this.fields.map( (e) => { return e.value });
      this.$emit('submit', fieldsToUpdate);
    }
  }
}
</script>
