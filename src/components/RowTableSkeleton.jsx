const RowTableSkeleton = () => {
  return (
    <tr className="">
      <td className="whitespace-nowrap px-4 py-2 font-medium ">
        <span className="w-16 aspect-video block bg-eskeleton animate-pulse rounded-lg"></span>
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium ">
        <span className="w-28 h-4 block bg-eskeleton animate-pulse rounded-lg"></span>
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium ">
        <span className="w-28 h-4 block bg-eskeleton animate-pulse rounded-lg"></span>
      </td>
      <td className="whitespace-nowrap px-4 py-2 font-medium ">
        <span className="w-28 h-4 block bg-eskeleton animate-pulse rounded-lg"></span>
      </td>

      <td className="whitespace-nowrap px-4 py-2 font-medium ">
        <span className="w-28 h-4 block bg-eskeleton animate-pulse rounded-lg"></span>
      </td>
    </tr>
  );
};
export default RowTableSkeleton;
