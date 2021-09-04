import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";

import s from "./ContactList.module.css";

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={s.listItem}>
      <span className={s.name}>{name}: </span>
      <span className={s.number}>{number}</span>
      <button onClick={() => onRemove(id)} className={s.btn}>
        Deleted
      </button>
    </li>
  );
};

const ContactList = ({ contacts, onRemove }) => {
  if (contacts.length === 0) return null;
  return (
    <ul className={s.list}>
      {contacts.map((contact) => (
        <ContactListItem key={contact.id} {...contact} onRemove={onRemove} />
      ))}
    </ul>
  );
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = (state) => {
  const { items, filter } = state.contacts;
  const visibleContacts = getVisibleContacts(items, filter);
  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemove: (id) => dispatch(actions.removeContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemove: PropTypes.func.isRequired,
};
