import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLink,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";

const icons = {
  Github: <FaGithub />,
  LinkedIn: <FaLinkedin />,
  Youtube: <FaYoutube />,
  Facebook: <FaFacebook />,
};

const LinkCard = ({ index, field, handelRemove, handelInputChange }) => {
  return (
    <div className="p-4 bg-slate-100 rounded-xl my-5 relative group">
      <div className="flex justify-between items-center">
        <p className="text-lg font-bold text-secondary">= Link # {index + 1}</p>
        <button
          onClick={() => handelRemove({ index: index, _id: field?._id })}
          className="mb-4 text-lg font-semibold text-secondary hover:text-primary"
        >
          Remove
        </button>
      </div>
      <label>Platform</label>
      <div className="relative my-2">
        <select
          name="option"
          value={field.option}
          onChange={(event) => handelInputChange(index, event)}
          className="w-full rounded-md border-0 p-2 pl-10 text-primary shadow-sm ring-1 ring-inset ring-secondary placeholder:text-secondary focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
        >
          <option hidden>Select Platform</option>
          <option value="Github">Github</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Youtube">Youtube</option>
          <option value="Facebook">Facebook</option>
        </select>
        <div className="absolute top-1/2 -translate-y-1/2 left-3 text-secondary">
          {icons[field.option]}
        </div>
      </div>
      <label className="block text-sm font-medium leading-6 text-primary">
        Link
      </label>
      <div className="mt-2 relative">
        <input
          type="text"
          name="url"
          value={field.url}
          onChange={(event) => handelInputChange(index, event)}
          placeholder={`URL ${index + 1}`}
          className="block w-full rounded-md border-0 p-1.5 pl-10 text-primary shadow-sm ring-1 ring-inset ring-secondary placeholder:text-secondary focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
        />
        <FaLink className="absolute top-1/2 -translate-y-1/2 left-3" />
      </div>
      <div className="hidden absolute top-0 right-full h-full w-5 bg-secondary text-white group-hover:flex items-center justify-start rounded-l-xl transition-all">
        <span> =</span>
      </div>
    </div>
  );
};

export default LinkCard;
