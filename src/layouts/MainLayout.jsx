import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-7xl p-4 lg:p-0 lg:mt-10 h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
