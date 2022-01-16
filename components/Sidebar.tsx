import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src="/images/profile.jpg"
        alt="avatar"
        className="mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-2xl font-medium font-Fahkwang">
        <span className="text-blue-300 ">Pichanok Kongsompree</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-100 rounded-full dark:bg-gray-700 dark:bg-black-500">
        พิชญ์ชนก คงสมปรีดิ์
      </p>

      {/* Resume */}
      <a
        href="https:"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-100 rounded-full cursor-pointer dark:bg-gray-700 dark:bg-black-500"
      >
        <span>My Portfolio</span>
      </a>

      {/* Github */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-purple-300 md:w-full ">
        <a href="https://github.com/Pichanokk">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Email */}
      <div
        className="py-4 my-5 bg-gray-100 dark:bg-gray-700 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
        </div>
        <p className="my-2 "> pichanokk.247@gmail.com </p>
      </div>

      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 mt-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-purple-300 to-blue-300 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:pichanokk.247@gmail.com")}
      >
        Contact me !
      </button>

    </>
  );
};
export default Sidebar;