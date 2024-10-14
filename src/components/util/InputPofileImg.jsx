import React, { useRef, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { toast } from "react-toastify";

const InputPofileImg = ({ handelChange, stateUrl }) => {
  const [data, setData] = useState();
  const inputRef = useRef(null);
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    const image = new Image();
    image.onload = function () {
      if (image.width > 1024 || image.height > 1024) {
        toast.error(
          "Image must be below 1024x1024px. Use PNG, JPG or BMP format.",
          {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          }
        );
        return;
      }
      handelChange(file);
      setData(file);
    };
    image.src = URL.createObjectURL(file);
  };

  const handelProfileChange = (e) => {
    const file = e.target.files[0];
    const image = new Image();
    image.onload = function () {
      if (image.width > 1024 || image.height > 1024) {
        toast.error(
          "Image must be below 1024x1024px. Use PNG, JPG or BMP format.",
          {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          }
        );
        return;
      }
      handelChange(file);
      setData(file);
    };
    image.src = URL.createObjectURL(file);
  };
  return (
    <div
      className="w-[200px] ml-auto border-2 group relative mb-5 rounded-xl overflow-hidden"
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="invisible group-hover:visible absolute text-2xl top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] text-white">
        <label
          htmlFor="file"
          className="w-full h-full flex flex-col justify-center items-center cursor-pointer"
        >
          <CiImageOn className="text-4xl" />
          <p className="text-center text-xs">Change Image</p>
          <input
            ref={inputRef}
            accept="image/png,image/jpeg,image/bmp"
            name="profile"
            id="file"
            type="file"
            className="hidden"
            onChange={handelProfileChange}
          />
        </label>
      </div>
      <img
        src={
          data ? URL.createObjectURL(data) : stateUrl ? stateUrl : "/user.jpg"
        }
        className="w-full"
        alt="profile"
      />
    </div>
  );
};

export default InputPofileImg;
