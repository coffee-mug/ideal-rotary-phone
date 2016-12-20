<template>
<div class="container">
  <div class="row">
    <div class="container">
      <div class="col-md-6">
        <customForm :fields="fields"
                    @submit="update"></customForm>

      </div>
      <div class="col-md-6">
        <customForm :fields="fileFields"
                    @submit="update"></customForm>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import customForm from './Form.vue';
export default {
  data() {
    return {
      fields: [
        {
          id: 'broyeur',
          name: 'broyeur',
          placeholder: 'Broyeur',
          type: 'text',
          value: ''
        },
        {
          id: 'description',
          name: 'description',
          placeholder: 'description',
          type: 'text',
          value: ''
        },
        {
          id: 'duration',
          name: 'duration',
          name: 'duration',
          placeholder: 'duration',
          type: 'text',
          value: ''
        },
        {
          id: 'price',
          name: 'price',
          placeholder: 'Price',
          type: 'text',
          value: ''
        }
      ],
      fileFields: [
        {
          id: 'lol',
          name: 'lol',
          type: 'text',
          value: '',
        },
        {
          id: 'bar',
          name: 'bar',
          type: 'file',
          value: '',
        }
      ]
    }
  },
  components: {
    customForm,
  },
  methods: {
    update(t) {
      // implement put request.
      console.log(t);
    }

  }
}
</script>
