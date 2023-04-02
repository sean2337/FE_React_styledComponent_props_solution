import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../main";

const Router = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );

  export default Router;