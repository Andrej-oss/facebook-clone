import Image from "next/image"
import { AiFillBell, AiFillMessage, AiOutlineShop } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdOutlineExpandMore, MdOutlineOndemandVideo } from "react-icons/md";
import { RiFlag2Line } from "react-icons/ri";
import { HiOutlineHome, HiOutlineSearch } from "react-icons/hi";
import { useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
      <div className="bg-white flex-grow-0 item-center p-2 shadow-md top-2 space-x-1 sticky z-999 h-16">
        <div className="flex min-w-fit">
          <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
              height={40}
              width={40}
          />
          <div className="flex items-center bg-gray-100 rounded-full ml-2 p-2">
            <HiOutlineSearch size={20}/>
            <input className="hidden lg:inline-flex bg-transparent focus:outline-none"
                   type="text"
                   placeholder="Search..."/>
          </div>
          <div className="flex flex-grow justify-center mx-2">
            <div className="flex items-center">
              <div  className="flex items-center h-10 px-4 md:px-10 cursor-pointer rounded-md md:hover:bg-gray-100">
                <HiOutlineHome size={25}/>
              </div>
            </div>
            <div className="flex items-center">
              <div  className="flex items-center h-10 px-4 md:px-10 cursor-pointer rounded-md md:hover:bg-gray-100">
                <RiFlag2Line size={25}/>
              </div>
            </div>
            <div className="flex items-center">
              <div  className="flex items-center h-10 px-4 md:px-10 cursor-pointer rounded-md md:hover:bg-gray-100">
                <MdOutlineOndemandVideo size={25}/>
              </div>
            </div>
            <div className="flex items-center">
              <div  className="flex items-center h-10 px-4 md:px-10 cursor-pointer rounded-md md:hover:bg-gray-100">
                <AiOutlineShop size={25}/>
              </div>
            </div>
            <div className="flex items-center">
              <div  className="flex items-center h-10 px-4 md:px-10 cursor-pointer rounded-md md:hover:bg-gray-100">
                <IoGameControllerOutline size={25}/>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 justify-end min-w-fit">
            <Image
                src={session?.user.image}
                height={40}
                width={40}
                className="rounded-full cursor-pointer"
            />
            <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-2 max-w-xs">
              {session?.user.name.split(' ')[0]}
            </p>
            <CgMenuGridO
                size={20}
                className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
            />
            <AiFillMessage
                size={20}
                className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
            />
            <AiFillBell
                size={20}
                className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
            />
            <MdOutlineExpandMore
                size={20}
                className=" hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300"
            />
          </div>
        </div>
      </div>
  )
}

export default Header;