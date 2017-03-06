import test from 'ava'
import * as mutations from '../src/mutations.js'

test('set contacts list', t => {
  const state = {
    contacts: []
  }
  const contacts = ['Alice', 'John', 'Bob']
  mutations.SET_CONTACTS(state, { contacts })
  t.deepEqual(state.contacts, contacts)
})
