function InputForm({
  label,
  placeholder,
  value,
  id,
  name,
  onChange,
  type,
}) {
  return (
    <div className="w-full flex flex-col justify-center items-center text-xs">
      <label
        className="w-full text-start font-bold mb-1 text-blue-600 text-sm md:text-base md:mb-2"
        htmlFor={id}>
        {label}
      </label>
      <input
        onChange={onChange}
        autoComplete="off"
        name={name}
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        className="font-bold md:text-base text-blue-800 w-full rounded-lg py-1 md:py-2 md:px-3 px-2 border-0 outline-0 shadow shadow-blue-500 placeholder:text-blue-300"
      />
    </div>
  );
}

export default InputForm;
