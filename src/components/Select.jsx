const Select = ({ name, children }) => {
  return (
    <select
      name={name}
      className="mt-1.5 w-full font-bold rounded-xl
        bg-black-design
        border border-gray-design p-3  sm:text-sm outline-none focus:outline-blue-disign"
    >
      {children}
    </select>
  );
};
export default Select;