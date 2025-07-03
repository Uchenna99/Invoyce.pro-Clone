import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";



const HomePageLayout = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col items-center bg-white">

        <Navbar/>

        <Outlet/>

      </div>
    </>
  )
}

export default HomePageLayout;