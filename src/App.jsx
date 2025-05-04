import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import DetailProductPage from "./pages/DetailProductPage";
import LoginPage from "./pages/LoginPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutUsPage />} />
        <Route path='/detail/:id' element={<DetailProductPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;