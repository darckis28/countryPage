const ListDetails = ({ title, details }) => {
  return (
    <li className="border-y border-y-gray-design flex py-4 justify-between px-3 items-center">
      <p className="text-gray-design-two font-bold text-sm">{title}</p>{" "}
      <p className="text-sm">{details}</p>{" "}
    </li>
  );
};
export default ListDetails;
