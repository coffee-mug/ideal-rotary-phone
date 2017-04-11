<template>
<div class="funnel-prestation">
  <Header></Header>

  <div class="container-fluid content">
    <div class="row">
      <h3>Quelques infos... et on ne vous embete plus !</h3>
    </div>
    <div class="row">
        <form>

          <div class="form-group col-xs-12">
            <div class="col-sm-6">
              <input v-model="salon" placeholder="Nom du salon" class="form-control" />
            </div>
            <div class="col-sm-6">
              <input v-model="city" placeholder="Où ça ?" class="form-control"/>
            </div>
          </div>

          <!-- To do: Pour l'instant les coupes en durs. A modifier avec un appel a la base de données. !-->
          <div class="form-group col-xs-12">
            <label for="inputHairLength" class="control-label col-xs-2">Vous desirez :</label>
            <div class="col-xs-10">
              <select v-model="hairLength" class="form-control">
                <option>Coupe court</option>
                <option>Coupe long</option>
                <option>Coiffage</option>
                <option>Lissage brésilien</option>
                <option>Défrisage</option>
                <option>Extensions de cheveux</option>
                <option>Lissage japonais</option>
              </select>
            </div>
          </div>

          <!-- To do: Ajouter les images des longueurs de cheveux et le javascript qui suis après !-->
          <div class="form-group col-xs-12">
            <label for="hairlength" class="control-label col-xs-2">Longueur de vos cheveux: </label>
            <div class="col-xs-10">
              <select v-model="hairLength" class="form-control">
                <option>Court</option>
                <option>Mi-long</option>
                <option>Long</option>
              </select>
            </div>
          </div>

         <!-- <div class="form-group col-xs-12">
            <label class="col-xs-2">Avec ceci ? :</label>
            <div class="col-xs-10">
              <select v-model="extra1" class="form-control">
                <option>Coupe court</option>
                <option>Coupe long</option>
                <option>Coiffage</option>
                <option>Lissage brésilien</option>
                <option>Défrisage</option>
                <option>Extensions de cheveux</option>
                <option>Lissage japonais</option>
              </select>
            </div>
          </div>
          <div class="form-group col-xs-12">
            <label class="col-xs-2"> </label>
            <div class="col-xs-10">
              <select v-model="extra1" class="form-control">
                <option>Coupe court</option>
                <option>Coupe long</option>
                <option>Coiffage</option>
                <option>Lissage brésilien</option>
                <option>Défrisage</option>
                <option>Extensions de cheveux</option>
                <option>Lissage japonais</option>
              </select>
            </div>
          </div> !-->
          <div class="col-xs-12">
          <div class="form-group col-xs-6">
            <label for="hours" class="col-sm-2" style="text-align: left;">Horaire</label>
            <div class="input-group clockpicker col-sm-10">
              <input type="text" class="form-control" value="09:30">
              <span class="input-group-addon">
                <span class="glyphicon glyphicon-time" v-model="appointmentTime" type="time"></span>
              </span>
            </div>
          </div>
            <div class="form-group col-xs-6">
              <label for="hours" class="col-sm-2">Date</label>
              <div class="col-sm-10">
                <calendar :date.sync="dateString" format="YYYY/MM/DD"></calendar>
                <input v-model="appointmentDate" type="date" :minDate="minDate" min="minDate"/>
              </div>
            </div>
            <!-- <div class="col-sm-6">
              <input v-model="appointmentTime" type="time" />
            </div> !-->
          </div>

          <div class="form-group col-xs-12">
            <label for="waitings" class="col-sm-2">En plus: </label>
            <div class="col-sm-10">
              <select v-model="benefits" placeholder="En attendant">
                <option value="coffee">Cafe</option>
                <option value="juice">Jus de fruit</option>
              </select>
            </div>
          </div>

          <div class="form-group col-xs-12">
            <label for="waitings" class="col-sm-2">Commentaires: </label>
            <div class="col-sm-10">
              <textarea v-model="comments" placeholder="Commentaires" style="width: 100%" />
            </div>
          </div>

          <div class="form-group">
            <div class="col-xs-offset-2 col-xs-10">
              <!-- <button @click="search" type="submit" class="btn btn-primary">Valider</button> !-->
              <router-link :to="{ name: 'coiffeur'}" tag="button" class="btn btn-primary validation">Valider</router-link>
            </div>
          </div>
        </form>
      </div>

    </div>
    <!-- <gmap-map :center="{lat: 48.862840, lng: 2.333474}" :zoom="12" class="funnel-prestationMap">
      <gmap-marker
        v-for="m in markers"
        :position="m.position"
      ></gmap-marker>
    </gmap-map> !-->
  </div>
</template>

<script>
import moment from 'moment';
import Header from '../funnel/Header.vue'

moment.locale('fr');
export default {
  data() {
    return {
      city: window.localStorage.getItem('city'),
      haircut: window.localStorage.getItem('haircut'),
      salon: '',
      hairLength: '',
      extra1: '',
      extra2: '',
      minDate: moment().format('DD/MM/YYYY'),
      appointmentDate: '',
      appointmentTime: moment().add(1, 'hour').format('hh:mm:ss'),
      benefits: '',
      comments: '',
      markers: [
        { 
          position: { lat: 48.862095, lng: 2.367220 }
        },
        {
          position: { lat: 48.849043, lng: 2.337246 }
        },
        {
          position: { lat: 48.868566, lng: 2.305299 }
        },
      ]
    }
  },
  methods: {
    search() {
      ['city', 'haircut'].forEach( (e) => {
        console.log(this.$data[e], window.localStorage.getItem(e) );
        if (window.localStorage.getItem(e) !== this.$data[e]) {
          window.localStorage.setItem(e, this.$data[e]);
        }
      });
      this.$router.push({ name: "results" }); 
    },
  },
  components: {
    'Header': Header,
  },
}

</script>

<style>
  .content{
    width: 70%;
    margin: 15px auto 0;
    border-radius: 8px;
  }

  .content .row h3 {
  text-align: center;
  color: #fff;
}

  label{
    color: white;
  }
  .btn.btn-primary.validation{
    background-color: #add7d6;
    border-color: #add7d6;
    width: 35%;
    color:black;
  }
</style>
