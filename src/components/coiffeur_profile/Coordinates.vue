<template>
<div>
  <div class="row">
    <div class="col-md-6"> 
      <form> 
        <template v-for="field in fields" :field="field">
          <div class="form-group">
            <input class="form-control" />
          </div>
        </template>
        <button class="btn btn-primary">Mettre à jour</button>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: ['fields']
}
</script>
