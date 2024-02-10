const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="w-full rounded-md px-3 py-1 outline-none border"
  />
);

export default Input;
