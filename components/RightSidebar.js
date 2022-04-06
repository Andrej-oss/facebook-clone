import { CgMoreAlt } from "react-icons/cg";
import { BiSearchAlt } from "react-icons/bi";
import { RiVideoAddFill } from "react-icons/ri";
import { Contacts } from "./index";
import { useSession } from "next-auth/react";

const RightSidebar = () => {
  const session = useSession();
  return (
      <div className="hidden md:inline-flex flex-col p-4 md:min-w-[200px] lg:min-w-[250px]">
        <div className="flex items-center text-gray-500">
          <p className="flex font-semibold text-lg flex-grow">
            Contacts
          </p>
          <div className="flex space-x-1 px-2">
            <div className="rounded-full hover:bg-gray-200 p-2 cursor-pointer">
              <RiVideoAddFill/>
            </div>
            <div className="rounded-full hover:bg-gray-200 p-2 cursor-pointer">
              <BiSearchAlt/>
            </div>
            <div className="rounded-full hover:bg-gray-200 p-2 cursor-pointer">
              <CgMoreAlt/>
            </div>
          </div>
        </div>
        <Contacts
            name="Gogol Bordello"
            image="https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            online={true}
        />
        <Contacts
            name="Karol Blog"
            image="https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            online={true}
        />
        <Contacts
            name="Dew Tompson"
            image="https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            online={false}
        />
      </div>
  );
};

export default RightSidebar;
