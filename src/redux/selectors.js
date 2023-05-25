// export const selectContactsValue = (state) => state.contacts.value;

export const selectFilteredContacts = (state) => {
    const filterValue = state.contacts.filter;
    const contacts = state.contacts.entities;

    return contacts.filter((contact) => contact.name.includes(filterValue));
}

// export const getContacts = state => state.contacts;

// export const getFilter = state => state.filter;