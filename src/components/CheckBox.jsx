const CheckBox = ({ id, label, value, onChange }) => {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="flex cursor-pointer items-start gap-4"
      >
        <div className="flex items-center">
          &#8203;
          <input
            onChange={onChange}
            checked={value}
            type="checkbox"
            className="size-4 rounded border-gray-300"
            id={id}
          />
        </div>

        <div>
          <strong className="font-bold text-sm "> {label}</strong>
        </div>
      </label>
    </div>
  );
};
export default CheckBox;
