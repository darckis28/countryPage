export const Button = ({ onClick, children, conditional }) => {
  return (
    <button
      className={` ${
        conditional.includes(children)
          ? "bg-gray-design"
          : "bg-transparent line-through"
      } px-3 py-1  rounded-lg`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
