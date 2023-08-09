import {Route, Routes} from "react-router-dom";
import AlbumListPage from "./domain/album/list";
import LoginPage from "./domain/login";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<AlbumListPage />} />
      <Route path={"/login"} element={<LoginPage />} />
    </Routes>
  )
}

export default App
