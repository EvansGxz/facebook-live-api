import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  return (
    <>
        <Routes>
          <>
            <Route index element={<Navigate to="home" />} />
            <Route path="/" element={<HomePage/>} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/*" element={<HomePage/>} />
          </>
        </Routes>
    </>
  );
}

export default App;
