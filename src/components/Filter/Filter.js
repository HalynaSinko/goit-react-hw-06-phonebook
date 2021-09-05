import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";

import s from "./Filter.module.css";

export default function Filter() {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();

  const onChange = (event) => dispatch(changeFilter(event.target.value));

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
}
