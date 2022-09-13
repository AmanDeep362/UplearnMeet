import MyClass from "./MyClass";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Link } from "@material-ui/core";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/my-class" element={<MyClass />} />
      </Routes>
    </>
  );
};
export default App;
