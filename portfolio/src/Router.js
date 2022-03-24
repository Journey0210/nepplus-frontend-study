import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import TodoList from "./components/pages/TodoList";
import Youtube from "./components/pages/Youtube";
import YoutubeWatch from "./components/pages/YoutubeWathch";
import InstaLogin from "./components/pages/insta/Login";
import InstaSignup from "./components/pages/insta/Signup";
import InstaMain from "./components/pages/insta/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/youtube/:videoId" element={<YoutubeWatch />} />
        <Route path="/insta/login" element={<InstaLogin />} />
        <Route path="/insta/signup" element={<InstaSignup />} />
        <Route path="/insta/main" element={<InstaMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
