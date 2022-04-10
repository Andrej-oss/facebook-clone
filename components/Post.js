import Image from "next/image"
import { FiThumbsUp } from "react-icons/fi";
import { FaRegCommentAlt } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri"

const Post = ({ post }) => {
  return (
      <div className="flex flex-col" key={post.id}>
        <div className="bg-white rounded-md mt-6 p-4 shadow-md">
          <div className="flex items-center space-x-2">
            <img
                src={post.profilePic}
                className="rounded-full w-10 h-10"/>
            <div>
              <p className="font-medium">{ post.name }</p>
              <p className="text-xs text-gray-400">{ post.timeStamp }</p>
            </div>
          </div>
          <p className="p-4">
            { post.post }
          </p>
        </div>
        { post.image &&
          <div className="bg-white relative h-60 md:h-96">
            <Image
                src={post.image}
                objectFit="cover"
                layout="fill"/>
          </div>
        }
        <div className="flex items-center justify-center bg-white">
          <div className="flex items-center space-x-1 hover:bg-gray-100 p-2 justify-center flex-grow cursor-pointer rounded-l-xl">
            <FiThumbsUp size={20} className="m-2"/>
            <p className="font-gray-400 font-semibold sm:text-xs">Like</p>
          </div>
          <div className="flex items-center space-x-1 hover:bg-gray-100 p-2 justify-center flex-grow cursor-pointer rounded-l-xl">
            <FaRegCommentAlt size={20} className="m-2"/>
            <p className="font-gray-400 font-semibold sm:text-xs">Comment</p>
          </div>
          <div className="flex items-center space-x-1 hover:bg-gray-100 p-2 justify-center flex-grow cursor-pointer rounded-l-xl">
            <RiShareForwardLine size={20} className="m-2"/>
            <p className="font-gray-400 font-semibold sm:text-xs">Share</p>
          </div>
        </div>
      </div>
  );
};

export default Post;
