import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const OtpPage = () => {
  let navigate = useNavigate();
  const { userId } = useParams();
  const [inputs, setInputs] = useState(["", "", "", ""]);
  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    if (value && index < inputs.length - 1) {
      document.getElementById(`input-${index + 1}`).focus();
    }
  };
  const handelSubmit = () => {
    axios
      .post(`${import.meta.env.VITE_API_LINK}auth/otpmatch`, {
        otp: inputs.join(""),
        userId: userId,
      })
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
        setTimeout(() => {
          navigate("/signin");
          window.location.reload();
        }, 1500);
      })
      .catch((err) => {
        toast.error(err.response.data.error, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          theme: "light",
        });
      });
  };
  return (
    <section className="h-screen w-full flex justify-center items-center">
      <ToastContainer />
      <div className="otpform flex flex-col items-center py-6">
        <h2 className="font-bold lg:text-2xl text-primary font-sans text-center capitalize">
          <span className="block">OTP</span> Verification Code
        </h2>
        <p>We have sent a verification code to your email</p>
        <div className="flex">
          {inputs.map((inputValue, index) => (
            <input
              key={index}
              id={`input-${index}`}
              type="text"
              maxLength="1"
              value={inputValue}
              onChange={(e) => handleChange(index, e.target.value)}
              className="otp_input"
            />
          ))}
        </div>

        {/* <div className="mt-auto w-full flex flex-col justify-center"> */}
        <button
          onClick={handelSubmit}
          className="mt-auto shadow-[1px_1px_3px_#b5b5b5,-1px_-1px_3px_#ffffff] w-5/6 py-3 rounded-xl basic mb-5"
        >
          Submit
        </button>
        <Link
          to="/signup"
          className="shadow-[1px_1px_3px_#b5b5b5,-1px_-1px_3px_#ffffff] w-5/6 py-3 rounded-xl basic text-center"
        >
          Back
        </Link>
        {/* </div> */}
      </div>
    </section>
  );
};

export default OtpPage;
