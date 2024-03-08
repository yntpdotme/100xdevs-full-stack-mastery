import './CheckBox.css';

const Checkbox = ({id, checked, onChange}) => {
  return (
    <div className="round">
      <input
        type="checkbox"
        aria-checked={checked}
        checked={checked}
        id={id}
        onChange={onChange}
      />
      <label htmlFor={id}></label>
    </div>
  );
};

export default Checkbox;
