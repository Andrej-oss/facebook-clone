import axios from "axios";
import { useSession } from "next-auth/react";
import { error } from "next/dist/build/output/log";
import Image from "next/image";
import { useRef, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { IoMdPhotos } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addPosts } from "../src/features/postsSlice";

const CreatePost = () => {
  const FACEBOOK_URL = "";
  const { data: session } = useSession();
  const postRef = useRef('');
  const filePostRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const dispatcher = useDispatch();
  const handleUploadFile = () => {
    filePostRef.current.click();
  }
  const addImageToPost = (e) => {
    let fileReader = new FileReader();
    if (e.target.files[0]) {
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = (e) => {
        setImageToPost(e.target.result);
      }
    }
  }
  const deleteImage = () => {
    setImageToPost(null);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postRef.current.value) return;
    const formData = new FormData();
    formData.append("file", imageToPost);
    formData.append("post", postRef.current.value);
    formData.append("name", session?.user.name);
    formData.append("email", session?.user.email);
    formData.append("image", session?.user.image);

    axios.post(FACEBOOK_URL, formData, {
      headers: {Accept: "application/json"}
    })
        .then((response) => {
          postRef.current.value = "";
          dispatcher(addPosts(response.data));
          deleteImage();
        })
        .catch((error) => {
          console.log(error);
        })
  }

  return (
      <div className="bg-white rounded-md p-2 text-gray-500 shadow-md">
        <div className="flex p-4 space-x-2 items-center">
          <Image
              src={session?.user.image}
              height={40}
              width={40}
              className="rounded-full cursor-pointer"
          />
          <form className="flex flex-1">
            <input
                ref={postRef}
                className="rounded-full flex-grow h-12 focus:outline-none font-medium bg-gray-100"
                type="text"
                placeholder={`What's on your mind ${session?.user.name}`}/>
            <button onClick={handleSubmit} hidden></button>
          </form>
        </div>
        { imageToPost && (
            <div className="flex items-center px-4 py-2 space-x-4 filter
             hover:brightness-110 transition duration-150 cursor-pointer">
              <img src={imageToPost} className="h-10 object-contain"/>
              <RiDeleteBin6Line onClick={deleteImage} size={20} className="hover:text-gray-400 cursor-pointer"/>
            </div>
        )}
        <div className="flex justify-evenly py-2">
          <div className="flex items-center p-1 space-x-1 hover:bg-gray-100 rounded-md cursor-pointer">
            <HiOutlineVideoCamera className="text-red-500"/>
            <p className="font-semibold text-gray-400">Live Video</p>
          </div>
          <div 
              onClick={handleUploadFile}
              className="flex items-center p-1 space-x-1 hover:bg-gray-100 rounded-md cursor-pointer">
            <IoMdPhotos className="text-green-500"/>
            <p className="font-semibold text-gray-400">Photo/Video</p>
            <input type="file" onChange={addImageToPost} ref={filePostRef} accept="image/*" hidden/>
          </div>
          <div className="flex items-center p-1 space-x-1 hover:bg-gray-100 rounded-md cursor-pointer">
            <BsEmojiSmile className="text-yellow-500"/>
            <p className="font-semibold text-gray-400">Feeling/Activity</p>
          </div>
        </div>
      </div>
  );
};

export default CreatePost;
