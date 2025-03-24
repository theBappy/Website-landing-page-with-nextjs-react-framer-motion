import logoImage from "@/assets/images/logosaas.png";
import MenuIcon from "@/assets/icons/menu.svg";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#f87bff,#fb92cf,#ffdd96,#c2f0b1,#2fdbfe)] blur-md"></div>
            <Image src={logoImage} alt="logo" className="h-12 w-12 relative" />
          </div>
          <div className="border border-white/30 h-10 w-10 inline-flex justify-center place-items-center rounded-lg sm:hidden">
            <MenuIcon className="text-white" />
          </div>
          <nav className="gap-6 items-center hidden sm:flex">
            <a
              href="#"
              className="text-white/60 hover:text-white transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition duration-300"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition duration-300"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition duration-300"
            >
              Help
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white transition duration-300"
            >
              Customers
            </a>
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
