<template>
<div>
  <form>
    <template v-for="field in fields" :field="field">
      <div class="form-group">
        <input class="form-control" />
      </div>
    </template>
    <button class="btn btn-primary">Mettre à jour</button>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      page: 'Coordinates',
      fields: []
    }
  },
  created() {
    var modelFields = [
      'first_name',
      'name',
      'mail',
      'password',
      'phone_number'
    ];
        
    this.fields.concat(this.fields, modelFields);
  }
}
</script>
