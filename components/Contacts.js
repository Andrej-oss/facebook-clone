import Image from "next/image";

const Contacts = (props) => {
  const { name, image, online } = props;
  return (
      <div className="flex items-center space-x-1 py-1 pl-1 rounded-l-xl hover:bg-gray-200 relative">
        <Image src={image} width="40" height="40" className="cursor-pointer rounded-full"/>
        <p className="hidden md:inline-flex text-md p-2 font-semibold text-gray-400">{ name }</p>
        { !!online
          ? <p className="rounded-full bg-green-700 w-4 h-4 absolute left-6 bottom-1 border-2"></p>
          : <p className="rounded-full bg-red-700 w-4 h-4 absolute  left-6 bottom-1 border-2"></p>
        }
      </div>
  );
};

export default Contacts;
