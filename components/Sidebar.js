import Image from 'next/image';
import { ImUsers } from "react-icons/im";
import { MdGroups,
  MdOutlineOndemandVideo,
  MdExpandMore } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { useSession } from "next-auth/react";

import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const { data: session } = useSession();
  return (
      <div className="hidden lg:inline-flex flex-col max-w-lg py-2 pl-2 lf:max-w-[300px]">
        <div className="flex items-center hover:bg-gray-200 space-x-2 py-3 pr-3 pl-4 rounded-l-xl cursor-pointer">
          <Image
              src={session?.user.image}
              height={40}
              width={40}
              className="rounded-full cursor-pointer"
          />
          <p className="hidden sm:inline-flex font-medium">
            {session?.user.name}
          </p>
        </div>
        <SidebarItem Icon={ImUsers} value={"Friends"}/>
        <SidebarItem Icon={MdGroups} value={"Groups"}/>
        <SidebarItem Icon={AiOutlineShop} value={"Market place"}/>
        <SidebarItem Icon={MdOutlineOndemandVideo} value={"Watch "}/>
        <SidebarItem Icon={BsStopwatch} value={"Memories"}/>
        <SidebarItem Icon={MdExpandMore} value={"See more"}/>
      </div>
  );
};

export default Sidebar;
