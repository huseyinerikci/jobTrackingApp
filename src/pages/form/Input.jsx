const Input = ({
  label,
  name,
  options,
  type = "text",
  handleChange,
  value,
}) => {
  return (
    <div className="field">
      <label>{label}</label>
      {options ? (
        <select name={name} onChange={handleChange}>
          {options.map((option) => (
            <option value={option} selected={option === value} key={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          name={name}
          type={type}
          onChange={handleChange}
          defaultValue={value}
        />
      )}
    </div>
  );
};

export default Input;
