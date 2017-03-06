import test from 'ava'
import * as getters from '../src/getters.js'

test.beforeEach(t => {
  t.context.state = {
    contacts: ['Alice', 'John', 'Bob']
  }
})

test('return the whole list of contacts', t => {
  t.deepEqual(getters.FILTERED_CONTACTS(t.context.state), t.context.state.contacts)
})

test('returns a filtered list of contacts', t => {
  t.context.state.searchQuery = 'o'
  t.deepEqual(getters.FILTERED_CONTACTS(t.context.state), ['John', 'Bob'])
})
