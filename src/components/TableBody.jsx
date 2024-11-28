const TableBody = () => {
  return (
    <tbody className="divide-y ">
      <tr className="odd:bg-gray-50">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Jane Doe
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          04/11/1980
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          Web Designer
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
      </tr>

      <tr className="odd:bg-gray-50">
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          Gary Barlow
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          24/05/1995
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
      </tr>
    </tbody>
  );
};
export default TableBody;
