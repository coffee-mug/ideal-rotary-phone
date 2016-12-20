<template>
<div class="prestation">
  <div class="prestation-header">
    <div class="prestation-title">
      <div class="prestation-title-elem" contenteditable="true" @input="lookupExistingPrestations">{{ offer.title }}</div>
      <div v-if="suggestions.length > 0" class="title-suggestions">
        <ul>
          <li v-for="s in suggestions">{{ s }}</li>
        </ul>
      </div>
    </div>
    <div class="prestation-duration">
      <div> {{ offer.duration }} </div>
    </div>
    <div class="prestation-price">
      <p contenteditable="true"> {{ offer.price }} </p>
    </div>
  </div>
  <div class="prestation-description">
    <p v-model="offer.description" contenteditable="true"> {{ offer.description }} </p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      prestationsTypes: [
        'Couleur',
        'Coupe F',
        'Coupe H',
        'Brushing'
      ],
      suggestions: [],
    }
  },
  props: ['offer'],
  methods: {
    lookupExistingPrestations(e) {
      var res = [],
          re = new RegExp(e.target.innerText, "g");

      this.prestationsTypes.filter( (e) => { if (e.search(re)) { this.suggestions = [e] } });
    }
  }
}

</script>

<style>
.prestation {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ddd;
  border: 1px solid #fff;
}

.prestation-header {
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  border-bottom: 1px solid #eee;
}

.prestation-description {
  height: 50px;
}

.prestation-title-elem {
  position: relative;
}

ul {
  list-style-type: none;
}

.title-suggestions {
  position: absolute;
  bottom: -15%;
  left: 5%;
  background: white;
  padding: 0 0 0 10px;
  text-align: left;
}

</style>
