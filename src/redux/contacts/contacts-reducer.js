import { combineReducers } from "redux";
import actionsTypes from "./contacts-types";

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

const itemsReducer = (state = initialContacts, { type, payload }) => {
  switch (type) {
    case actionsTypes.ADD:
      return [payload, ...state];

    case actionsTypes.REMOVE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = "", { type, payload }) => {
  switch (type) {
    case actionsTypes.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
