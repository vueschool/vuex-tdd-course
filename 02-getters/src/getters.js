export function FILTERED_CONTACTS ({ contacts, searchQuery }) {
  return searchQuery
    ? contacts.filter(contact => contact.includes(searchQuery))
    : contacts
}
