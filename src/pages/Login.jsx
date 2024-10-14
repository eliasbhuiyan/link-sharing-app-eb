import { RiLinksFill } from "react-icons/ri";
import InputBox from "../components/util/InputBox";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loggedUser } from "../reduce/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelLogin = () => {
    setLoadingBtn(true);
    axios
      .post(`${import.meta.env.VITE_API_LINK}auth/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.userData[0].emailVerified) {
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            closeOnClick: true,
            theme: "light",
          });
          let currentTime = new Date().getTime();
          let expirationTime = new Date(currentTime + 10 * 24 * 60 * 60 * 1000);
          let expires = expirationTime.toUTCString();
          document.cookie = `sec_token=${res.data.sec_token}; expires=${expires};`;
          dispatch(loggedUser(res.data.userData[0]));
          setLoadingBtn(false);
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
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
            Sign in your account.
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <InputBox label="Email address" handelChange={setEmail} />
            <InputBox
              label="Password"
              type="password"
              handelChange={setPassword}
            />
            <div>
              <button
                disabled={loadingBtn}
                onClick={handelLogin}
                className="flex w-full justify-center rounded-md bg-brand px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loadingBtn ? (
                  <div className="w-5 h-5 border-4 border-white rounded-full animate-spin"></div>
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-secondary">
            Don&apos;t have an account?
            <Link
              to="/signup"
              className="font-semibold leading-6 text-brand pl-1"
            >
              Sign Up
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

export default Login;
