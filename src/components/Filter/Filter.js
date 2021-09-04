import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from "../../redux/contacts/contacts-actions";

import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        className={s.input}
      />
    </label>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.contacts.filter,
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    onChange: (event) => dispatch(actions.changeFilter(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispathToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
