import { Link, useNavigate } from "react-router-dom";
import InputBox from "../components/util/InputBox";
import { RiLinksFill } from "react-icons/ri";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Registration = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    setLoading(true);
    axios
      .post(`${import.meta.env.VITE_API_LINK}auth/registration`, {
        fullName,
        email,
        password,
      })
      .then((res) => {
        setError("");
        toast.success(res.data.success);
        setLoading(false);
        setTimeout(() => {
          navigate(`/otp/${res.data.userId}`);
        }, 2000);
        // if (res) {
        //   document.cookie = `access_token=${res.data.data.tokens.token};path=/;SameSite=Strict;Secure`;
        //   dispatch(loggedUser(res.data.data.user));
        //   navigate(`/${res.data.data.user.role}`);
        //   setLoading(false);
        // }
      })
      .catch((err) => {
        setError(err.response.data.error);
        setLoading(false);
      });
  };

  return (
    <section className="h-screen flex items-center px-6 gap-6">
      <ToastContainer />
      <div className="w-full md:w-1/2">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex items-center gap-2 justify-center">
            <RiLinksFill className=" bg-brand py-1.5 h-8 w-8 font-extrabold rounded-lg text-white" />
            <span className="text-2xl font-extrabold text-primary">
              devLinks
            </span>
          </div>
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-primary">
            Sign Up for next
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <InputBox label="Full Name" handelChange={setFullName} />
            <InputBox label="Email address" handelChange={setEmail} />
            <InputBox
              label="Password"
              type="password"
              handelChange={setPassword}
            />
            <p className="text-red-600 font-semibold">{error}</p>
            <div>
              <button
                disabled={loading}
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-brand px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loading ? (
                  <div className="w-5 h-5 border-4 border-white rounded-full animate-spin"></div>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-secondary">
            Already have an account?
            <Link
              to="/signin"
              className="font-semibold leading-6 text-brand pl-1"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden md:block w-1/2 h-full">
        <img src="/social.jpg" alt="" className="w-full h-full" />
      </div>
    </section>
  );
};

export default Registration;
