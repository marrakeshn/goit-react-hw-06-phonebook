import { createSlice } from '@reduxjs/toolkit'

export const CONTACTS = 'contacts'

const initialState = {
  contacts: JSON.parse(localStorage.getItem(CONTACTS)) ?? [],
}

export const contactsSlice = createSlice({
  name: CONTACTS,
  initialState,
  reducers: {
    increment: (state) => {
      state.contacts = [1]
    },
    decrement: (state) => {
      state.contacts = [0]
    },
    incrementByAmount: (state, action) => {
      state.contacts = action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = contactsSlice.actions

export default contactsSlice.reducer