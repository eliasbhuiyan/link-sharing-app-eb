import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";

const options = [
  {
    label: <FaGithub />,
    value: "Github",
  },
  {
    label: <FaLinkedin />,
    value: "LinkedIn",
  },
  {
    label: <FaYoutube />,
    value: "Youtube",
  },
  {
    label: <FaFacebook />,
    value: "Facebook",
  },
];

const SelectBox = () => {
  return <div>SelectBox</div>;
};

export default SelectBox;
