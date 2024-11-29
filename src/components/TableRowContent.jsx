const TableRowContent = ({ name, img, km, population, region }) => {
  return (
    <tr className="">
      <td className="whitespace-nowrap px-4 py-2 font-medium ">
        <img
          src={img}
          alt={`flag of ${name}`}
          className="w-16 aspect-video rounded-md object-cover"
        />
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium max-w-24 text-ellipsis overflow-hidden ">
        {name}
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium ">{population}</td>
      <td className="whitespace-nowrap px-4 py-2 font-medium ">{km}</td>
      <td className="whitespace-nowrap px-4 py-2 font-medium ">{region}</td>
    </tr>
  );
};
export default TableRowContent;
