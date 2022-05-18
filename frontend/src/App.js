import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./components/notFound/NotFound";
import Document from "./components/document/Document";
import AboutProject from "./components/page/AboutProject";
import CategoryMain from "./components/categoryMain/CategoryMain";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category/:idx" element={<CategoryMain />} />
        <Route path="/document/:idx" element={<Document />} />
        <Route path="/about-project" element={<AboutProject />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
