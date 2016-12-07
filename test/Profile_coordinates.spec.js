'use strict';

import test from 'tape';
import Coordinates from '../src/components/coiffeur_profile/Coordinates.vue';
import Vue from 'vue';

test('Form is present', assert => {
  const vm = new Vue(Coordinates).$mount()

  const form = vm.$el.querySelectorAll('form');

  const actual = form.length; 

  const expected = 1;

  assert.equal(actual, expected, 'The form is absent');

  assert.end();

});

test('Right number of input fields when created', assert => {
  const vm = new Vue(Coordinates).$mount();

  const fields = vm.fields;

  // Asynchronous DOM update du to v-for, need to perform in Vue.nextTick callback
  // https://vuejs.org/v2/guide/unit-testing.html#Asserting-Asynchronous-Updates

  Vue.nextTick( () => {

    const inputs = vm.$el.querySelectorAll('input');
    const actual = inputs.length;
    const expected = fields.length;

    
    assert.equal(actual, expected, 'The number of inputs should match the length of the fields array received on component creation');
  })

  assert.end();
});
