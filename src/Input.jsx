/* eslint-disable react/prop-types */
function Input({
  type,
  name,
  index,
  handleValue,
  gettingValue,
  placeholder,
  label,
}) {
  let value = gettingValue(index, name);
  return (
    <div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={(e) => {
          handleValue(name, e, index);
        }}
        value={value}
      ></input>
      <label>{label}</label>
    </div>
  );
}

export default Input;
