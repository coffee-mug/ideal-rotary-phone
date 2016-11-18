'use strict';

import test from 'tape';
import Day from '../src/components/Day.vue';
import Vue from 'vue';


test('Number of hours slots', assert => {
  const vm = new Vue(Day).$mount();

  var defaultData = Day.data(),
      dayHourStart = defaultData.dayHourStart,
      dayHourEnd = defaultData.dayHourEnd,
      appointmentDuration = defaultData.appointmentDuration;

  const actual = vm.slots.length;
  const expected = (dayHourEnd - dayHourStart) * 60 / appointmentDuration;

  assert.equal(actual, expected, 'The number of hours slots should be equal to the difference of the "closing" hour and "starting hour" for appointments multiplied by 60, divided by the appointment duration set');

  assert.end()
});

test('Displayed slots number', assert => {
  const vm = new Vue(Day).$mount();

  const actual = vm.$el.querySelectorAll('div.day-container > div').length;
  const expected = vm.slots.length;

  assert.equal(actual, expected, 'The number of divs displayed should be equal to the length of slots Array');

  assert.end();

});

test('Slot state change on click', assert => {
  const vm = new Vue(Day).$mount();

  var slot = vm.slots[0],
      slotState = slot.isFree,
      divSlot = vm.$el.querySelectorAll('div.day-container > div')[0];

  // Toggle on click
  divSlot.click();

  const changedInHTML = !divSlot.querySelector('h3').innerText.trim() === !slotState;
  const hasBeenChangedInHTML = true;

  const changedInSlotState = vm.slots[0].isFree;
  const slotStateHasChanged = !slotState;

  assert.equal(changedInHTML, hasBeenChangedInHTML, 'Slot value in HTML must correspond to slot value in slots Array');

  assert.equal(changedInSlotState, slotStateHasChanged, 'The slot state should be inverted on click');

  assert.end();
});

test('Busy slot state class toggle', assert => {
  const vm = new Vue(Day).$mount();

  var divSlot = vm.$el.querySelectorAll('div.day-container > div')[0],
      isFree = vm.slots[0].isFree;

  if (isFree) divSlot.click(); // Turn slot busy
  
  // Try to see if asynchronous make it pass (it works on client)
  Vue.nextTick( () => {
    const actual = vm.$el.querySelectorAll('div.day-container > div')[0].classList.contains('busy');
    const expected = true;

    assert.equal(actual,expected,'Busy slot should contain the busy class');
  });

  assert.end();
});


