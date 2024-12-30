import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-7xl lg:p-4 p-2 lg:mt-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
