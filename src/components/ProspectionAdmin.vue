<template>
<div class="container">
  <div class="row">
    <div class="col-md-12 col-xs-12">
      <h1> Prospects gagnés : {{ prospects.length }} </h1> 
    
      <table class="table table-hover">
        <th> Salon </th>
        <th> Contact </th>
        <th> Date de création </th>
        <th> Dernière mise à jour </th>
        <template>
          <tr v-for="p in prospects">
            <td><router-link :to="{ name: 'prospects', params: { id: p.id }}">  {{ p.store_name }} </router-link></td>
            <td> {{ p.contact_name }} </td>
            <td> {{ p.created_at }} </td>
            <td> {{ p.updated_at }} </td>
          </tr>
        </template>
      </table>
    </div>
  </div>
</div>
</template>

<script>
import moment from "moment";

moment.locale('fr');

export default {
  data() {
    return {
      prospects: []
    }
  },
  created() {
    var formattedDate;

    this.$http.get('/prospection/admin')
      .then( (res) => {
        console.log(res.body);

        moment.locale('fr');

        res.body.users.forEach( (e) => { 
          formattedDate = e;
          if (e.created_at) {
            formattedDate['created_at'] = moment(e['created_at']).format('LLL'); 
          }

          if (e.updated_at) {
            formattedDate['updated_at'] = moment(e['updated_at']).format('LLL'); 
          }
          this.prospects.push(formattedDate);
        }); 
        console.log(this.prospects);
      });
  },
}

</script>

<style>
#app > div {
  color: #333;
}

h1 {
  margin-bottom: 18px;
}

</style>
