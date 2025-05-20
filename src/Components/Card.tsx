import { Link } from "react-router-dom";
type Props = {
  title: string;
  description: string;
  image: string;
  stack: string[];
  link: string;
};

const Card = ({ title, description, image, stack, link }: Props) => {
  return (
    <div className="bg-[#222220] rounded-lg border border-[#525252] flex-1 px-6 py-6">
      <div>
        <Link to={link} onClick={(e) => e.preventDefault()}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
        <div className="flex gap-2 mt-4">
          {stack.map((item, index) => (
            <span
              className="bg-[#525252] px-3 py-1 para-font text-[#f4f4f4f5] text-[12px] rounded-3xl"
              key={index}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="">
          <img
            src={image}
            alt={title}
            className="w-full h-full bg-white rounded mt-4"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
