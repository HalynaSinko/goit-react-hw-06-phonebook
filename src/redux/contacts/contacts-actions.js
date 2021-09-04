import actionsTypes from "./types";

export const addContact = ({ id, name, number }) => ({
  type: actionsTypes.ADD,
  payload: { id, name, number },
});

export const removeContact = (contactId) => ({
  type: actionsTypes.REMOVE,
  payload: contactId,
});

export const changeFilter = (value) => ({
  type: actionsTypes.CHANGE_FILTER,
  payload: value,
});
