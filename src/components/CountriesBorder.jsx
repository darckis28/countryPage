import { useBorders } from "../hooks/useBorders";
import { Link } from "react-router-dom";

const CountriesBorder = ({ borders }) => {
  const { response } = useBorders({ data: borders });
  return (
    <div>
      <ul className="flex px-3 flex-wrap gap-3 my-5">
        {response.map((res) => (
          <Link
            key={res.name}
            to={`/${res.name}`}
          >
            <img
              src={res.img}
              alt={res.alt}
              className="w-20 rounded-lg aspect-video object-cover mx-auto"
            />
            <h3 className="text-center">{res.name}</h3>
          </Link>
        ))}
      </ul>
    </div>
  );
};
export default CountriesBorder;
