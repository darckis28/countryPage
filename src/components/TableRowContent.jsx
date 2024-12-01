import { Link } from "react-router-dom";

const TableRowContent = ({ name, img, km, population, region }) => {
  return (
    <tr className="">
      <td className="whitespace-nowrap px-4 py-2 font-medium ">
        <Link to={`/${name}`}>
          <img
            src={img}
            alt={`flag of ${name}`}
            className="w-16 aspect-video rounded-md object-cover"
          />
        </Link>
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium max-w-24 text-ellipsis overflow-hidden ">
        <Link
          to={`/${name}`}
          className="hover:underline"
        >
          {name}
        </Link>
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium ">{population}</td>
      <td className="whitespace-nowrap px-4 py-2 font-medium ">{km}</td>
      <td className="whitespace-nowrap px-4 py-2 font-medium ">{region}</td>
    </tr>
  );
};
export default TableRowContent;
