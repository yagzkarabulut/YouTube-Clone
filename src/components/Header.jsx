import { Link, useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoVideocam } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  // form göndeirilince tetiklenr
  const handleSubmit = (e) => {
    e.preventDefault();
    // inputa girilen veri
    const text = e.target[0].value;
    // kullanucuyu sonuçlar sayfasına yönlendir
    // parametre olarak aratılam terimi ekle
    navigate(`/results?search_query=${text}`);
  };
  return (
    <div className="flex justify-between items-center p-4">
      <Link className="flex items-center  gap-[10px]" to={"/"}>
        <img className="w-[50px]" src="/Youtube_logo.png" alt="youtube logo" />
        <h1 className="hidden md:block text-2xl">Youtube</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border border-gray-400 rounded-[20px] overflow-hidden"
        action=""
      >
        <input
          className="bg-black text-white px-3 py-1 outline-none"
          type="search"
        />
        <button className="border-l px-2 text-xl ">
          <IoIosSearch />
        </button>
      </form>

      <div className="flex gap-3 text-cl cursor-pointer">
        <FaBell className="hover:text-gray-400 text-xl transition duration-[400]" />

        <IoVideocam className="hover:text-gray-400 text-xl transition duration-[400] " />
      </div>
    </div>
  );
};

export default Header;
