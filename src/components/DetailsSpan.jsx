const DetailsSpan = ({ title, count }) => {
  return (
    <div className="bg-gray-design inline-block py-4 px-10 rounded-lg">
      <span className="border-r border-gray-design-two py-3 inlineblock pr-2">
        {title}
      </span>
      <span className="py-3 inlineblock pl-2">{count}</span>
    </div>
  );
};
export default DetailsSpan;
