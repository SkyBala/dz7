import { Route , Routes } from "react-router-dom";
import "./App.css";
import Main from "./component/mainComponent";
import AboutChar from "./pages/aboutPages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
         <Route path={"/char/:id"} element={<AboutChar/>}></Route>
      </Routes>
    </>
  );
}
export default App;
