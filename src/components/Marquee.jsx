import { Icon } from "@iconify/react/dist/iconify.js";

const Marquee = ({
  items,
  className = "text-white bg-black",
  icon = "mdi:star-four-points",
  iconClassName = "",
  reverse = false,
}) => {
  return (
    <div
      className={`overflow-hidden w-full h-20 md:h-[100px] flex items-center marquee-text-responsive font-light uppercase ${className}`}
    >
      <div
        className={`flex items-center gap-16 whitespace-nowrap ${
          reverse ? "animate-scroll-reverse" : "animate-scroll"
        }`}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items, ...items].map((text, index) => (
          <div
            key={index}
            className="flex items-center gap-8 px-8 flex-shrink-0"
          >
            <span>{text}</span>
            <Icon icon={icon} className={iconClassName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
