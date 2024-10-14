import React from "react";

const InputBox = ({ type = "text", label, name, handelChange, value }) => {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-primary">
        {label}
      </label>
      <div className="mt-2">
        <input
          onChange={(e) => handelChange(e.target.value)}
          name={name}
          type={type}
          value={value}
          required
          className="block w-full rounded-md border-0 p-1.5 text-primary shadow-sm ring-1 ring-inset ring-secondary placeholder:text-secondary focus:ring-2 focus:ring-inset focus:ring-brand sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default InputBox;
