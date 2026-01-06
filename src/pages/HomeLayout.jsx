import { Outlet } from "react-router-dom";
import { Footer, Header, Navbar } from "../components";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="align-element">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
