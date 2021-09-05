import { useState } from "react";
// import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addContact } from "../../redux/contacts/contacts-actions";
import s from "./ContactForm.module.css";
import { getContacts } from "../../redux/contacts/contacts-selectors";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(getContacts);

  const handleChangeForm = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const dispatch = useDispatch();
  const onSubmit = ({ id, name, number }) =>
    dispatch(addContact({ id, name, number }));

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const uniqueContact = handleUniqueContact(contacts, name);
    if (!uniqueContact) {
      alert(`${name} is already in contacts. Enter another name.`);
      return;
    }

    onSubmit({ id: uuidv4(), name, number });

    reset();
  };

  const handleUniqueContact = (allContasts, newName) => {
    const isExistContact = !!allContasts.find(
      (contact) => contact.name === newName
    );
    return !isExistContact;
  };

  return (
    <form onSubmit={handleSubmitForm} className={s.form}>
      <label className={s.label}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChangeForm}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          className={s.input}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeForm}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр, может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          className={s.input}
        />
      </label>
      <button className={s.btn}>Add contact</button>
    </form>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     contacts: state.contacts.items,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSubmit: ({ id, name, number }) =>
//       dispatch(addContact({ id, name, number })),
//   };
// };

//  connect(mapStateToProps, mapDispatchToProps)(ContactForm);

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
