'use strict';

import test from 'tape';
import Calendrier from '../src/components/Calendrier.vue';
import Vue from 'vue';

test('Calendrier h1 message', assert => {
  const vm = new Vue(Calendrier).$mount();

  const actual = vm.message;
  const expected = "SC43";

  assert.equal(actual, expected,
    'Calendrier h1 should be equal to SC43');

  assert.end();
});
