import React, { useState } from "react";
import MobilePreview from "../components/MobilePreview";
import InputPofileImg from "../components/util/InputPofileImg";
import InputBox from "../components/util/InputBox";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loggedUser } from "../reduce/userSlice";
import { toast, ToastContainer } from "react-toastify";
const ProfileDetails = () => {
  const userData = useSelector((state) => state.isLoggedUser.user);
  const [firstName, setFirstName] = useState(userData?.fullName.split(" ")[0]);
  const [lastName, setLastName] = useState(userData?.fullName.split(" ")[1]);
  const [profile, setProfile] = useState();
  const [loadingBtn, setLoadingBtn] = useState(false);
  const dispatch = useDispatch();

  const handelSave = () => {
    if (!profile) {
      toast.error("Please add profile image", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        theme: "light",
      });
      return;
    }
    setLoadingBtn(true);
    const reader = new FileReader();
    reader.readAsDataURL(profile); // profile is the file object
    reader.onloadend = async () => {
      const base64Image = reader.result.split(",")[1];
      axios
        .post(
          `${import.meta.env.VITE_API_LINK}auth/update/${userData?._id}`,
          {
            firstName,
            lastName,
            image: base64Image, // Send the image as base64
            mimetype: profile.type,
          },
          {
            headers: {
              Authorization: `${
                document.cookie.match(/sec_token=([^;]+)/)?.[1]
              }`,
            },
            "Content-Type": "multipart/form-data",
          }
        )
        .then((res) => {
          dispatch(loggedUser(res.data.userData[0]));
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
          setLoadingBtn(false);
        })
        .catch((err) => {
          toast.error(err.response?.data.error, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
          setLoadingBtn(false);
        });
    };
  };

  return (
    <>
      <section className="flex gap-6 mt-6 relative">
        <ToastContainer />
        <MobilePreview />
        <div className="w-full md:w-1/2 bg-white rounded-xl py-10 px-8 flex flex-col">
          <h1 className="text-3xl font-bold text-primary font-sans">
            Profile Details
          </h1>
          <p className="mt-4 text-sm text-secondary">
            Add your details to create a personal touch to your profile.
          </p>
          <div className="p-4 bg-slate-100 rounded-xl my-5 flex items-center gap-4">
            <p className="text-lg text-nowrap text-secondary">
              Profile Picture
            </p>
            <InputPofileImg
              handelChange={setProfile}
              stateUrl={userData.avatar}
            />
            <p className="text-sm text-secondary w-1/4">
              Image must be below 1024x1024px Use PNG JPG or BMP format
            </p>
          </div>
          <div className="p-4 bg-slate-100 rounded-xl my-5">
            <InputBox
              label="First Name"
              name="firstName"
              handelChange={setFirstName}
              value={firstName}
            />
            <InputBox
              label="Last Name"
              name="lastName"
              handelChange={setLastName}
              value={lastName}
            />
            <label className="block text-sm font-medium leading-6 text-primary mb-2">
              Email
            </label>
            <input
              type="text"
              value={userData?.email}
              readOnly
              className="block w-full rounded-md border-0 p-1.5 text-primary shadow-sm ring-1 ring-inset ring-secondary"
            />
          </div>
          <div className="flex justify-end border-t mt-6">
            <button
              onClick={handelSave}
              disabled={loadingBtn}
              className="mt-5 rounded-md bg-brand px-6 py-4 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loadingBtn ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white rounded-full animate-spin"></div>
                </div>
              ) : (
                "Save"
              )}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileDetails;
