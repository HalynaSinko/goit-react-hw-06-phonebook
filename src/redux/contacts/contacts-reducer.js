import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, removeContact, changeFilter } from "./contacts-actions";

// const initialState = {
//   contacts: {
//     items: [],
//     filter: "",
//   },
// };
const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const itemsReducer = createReducer(initialContacts, {
  [addContact]: (state, { payload }) => {
    return [payload, ...state];
  },
  [removeContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
