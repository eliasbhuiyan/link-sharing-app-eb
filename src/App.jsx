import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import AddLink from "./pages/AddLink";
import ProfileDetails from "./pages/ProfileDetails";
import LiveProfile from "./pages/LiveProfile";
import DashbordLayout from "./components/Layout/DashbordLayout";
import Preview from "./pages/Preview";
import OtpPage from "./pages/OtpPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/signup" element={<Registration />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/otp/:userId" element={<OtpPage />} />
        <Route path="/" element={<DashbordLayout />}>
          <Route index element={<AddLink />} />
          <Route path="/profiledetails" element={<ProfileDetails />} />
        </Route>
        <Route path="/preview" element={<Preview />} />
        <Route path="/profile/:id" element={<LiveProfile />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
