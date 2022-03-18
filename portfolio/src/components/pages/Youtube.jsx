import Header from "../organisms/youtube/Header";
import SideBar from "../organisms/youtube/SideBar";
import MiniSideBar from "../organisms/youtube/MiniSideBar";
import { useState } from "react";

const Youtube = () => {
  const [showMini, setShowMini] = useState(false);
  return (
    <>
      <Header toggleSidebar={() => setShowMini((prev) => !prev)} />
      {showMini ? <MiniSideBar /> : <SideBar />}
    </>
  );
};
export default Youtube;
