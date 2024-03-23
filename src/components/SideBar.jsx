import { useContext } from "react";
import { categories } from "../constant";
import { VideoContext } from "../context/videoContext";

const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(VideoContext);

  return (
    <div className="flex flex-col p-1 md:p-4">
      {categories.map((item) => (
        <div key={item.name} onClick={() => setSelectedCategory(item)}>
          <div
            className={`${
              selectedCategory.name === item.name && "bg-[#2b2a2a]"
            } flex items-center gap-2 py-4 px-2 md:px-3 text-base md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d]`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="hidden md:block">{item.name}</span>
          </div>
          {/* diver true ise çizgi bas */}
          {item.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
