'use strict';

import test from 'tape';
import Coordinates from '../src/components/coiffeur_profile/Coordinates.vue';
import Vue from 'vue';

/***
 *
 * Need to refactor tests and the component to make it reusable !
 * Handle events in parent ;)
***/

test('Form is present', assert => {
  const vm = new Vue(Coordinates).$mount()

  const form = vm.$el.querySelectorAll('form');

  const actual = form.length; 

  const expected = 1;

  assert.equal(actual, expected, 'The form is absent');

  assert.end();

});

test('Inputs length equals fields props array', assert => {
  const propsData = { fields: ['lol', 'test', 'koazar'] }; // A lizard merged with a koala

  const Ctor = Vue.extend(Coordinates);

  const vm = new Ctor({ propsData }).$mount();

  // Asynchronous DOM update du to v-for, need to perform in Vue.nextTick callback
  // https://vuejs.org/v2/guide/unit-testing.html#Asserting-Asynchronous-Updates

  Vue.nextTick( () => {

    const inputs = vm.$el.querySelectorAll('input');
    const actual = inputs.length;
    const expected = vm.fields.length;

    assert.equal(actual, expected, 'The number of inputs should match the length of the fields array received on component creation');
  });

  assert.end();
});
