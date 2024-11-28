const Table = ({ children, titles }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2  text-sm">
        <thead className="text-left  text-xs text-gray-design-two border-b-2 border-b-gray-design">
          <tr>
            {titles?.map((title, idx) => (
              <th
                key={idx}
                className="whitespace-nowrap px-4 py-2 font-medium"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
export default Table;
