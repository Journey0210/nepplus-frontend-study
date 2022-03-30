import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Portfolio1 from "./components/molcules/main/Portfolio1";
import Portfolio2 from "./components/molcules/main/Portfolio2";
import Portfolio3 from "./components/molcules/main/Portfolio3";
import TodoList from "./components/pages/TodoList";
import Youtube from "./components/pages/Youtube";
import YoutubeWatch from "./components/pages/YoutubeWathch";
import InstaLogin from "./components/pages/insta/Login";
import InstaSignup from "./components/pages/insta/Signup";
import TopNav from "./components/organisms/insta/TopNav";
import InstaMain from "./components/pages/insta/Main";
import InstaDirect from "./components/pages/insta/Direct";
import InstaProfile from "./components/pages/insta/Profile";
import Posted from "./components/organisms/insta/profile/Posted";
import Saved from "./components/organisms/insta/profile/Saved";
import Tagged from "./components/organisms/insta/profile/Tagged";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Portfolio1 />} />
          <Route path="/portfolio2" element={<Portfolio2 />} />
          <Route path="/portfolio3" element={<Portfolio3 />} />
        </Route>
        <Route path="/todo" element={<TodoList />} />
        <Route path="/youtube" element={<Youtube />} />
        <Route path="/youtube/:videoId" element={<YoutubeWatch />} />
        <Route path="/insta/login" element={<InstaLogin />} />
        <Route path="/insta/signup" element={<InstaSignup />} />

        <Route path="/insta" element={<TopNav />}>
          <Route path="/insta/main" element={<InstaMain />} />
          <Route path="/insta/direct" element={<InstaDirect />} />
          <Route path="/insta/profile" element={<InstaProfile />}>
            <Route path="/insta/profile/posts" element={<Posted />} />
            <Route path="/insta/profile/saved" element={<Saved />} />
            <Route path="/insta/profile/tagged" element={<Tagged />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
