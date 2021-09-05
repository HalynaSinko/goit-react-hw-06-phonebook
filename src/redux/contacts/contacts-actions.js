import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction(
  "contacts/add",
  ({ id, name, number }) => ({
    payload: {
      id,
      name,
      number,
    },
  })
);
export const removeContact = createAction("contacts/remove");
export const changeFilter = createAction("contacts/changeFilter");

// export const addContact = ({ id, name, number }) => ({
//   type: actionsTypes.ADD,
//   payload: { id, name, number },
// });

// export const removeContact = (contactId) => ({
//   type: actionsTypes.REMOVE,
//   payload: contactId,
// });

// export const changeFilter = (value) => ({
//   type: actionsTypes.CHANGE_FILTER,
//   payload: value,
// });
