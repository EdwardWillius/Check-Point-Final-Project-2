import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import DetailProductPage from "./pages/DetailProductPage";
import AuthPage from "./pages/AuthPage";
import ProfilPage from "./pages/ProfilPage";
import FilePage from "./pages/FilePage";
import SportCategoryPage from "./pages/SportCategoryPage";
import LocationPage from "./pages/LocationPage";
import SportActivityPage from "./pages/SportActivityPage";
import PaymentMethodPage from "./pages/PaymentMethodPage";
import TransactionPage from "./pages/TransactionPage";
import ProtectedRoute from "./component/ProtectedRoute"; 

const App = () => {
  return (
    <BrowserRouter>
      <Routes><Route path="/"element={<ProtectedRoute><HomePage /></ProtectedRoute> } />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/detail/: "element={<ProtectedRoute><DetailProductPage /></ProtectedRoute>}/>
        <Route path="/Auth" element={<AuthPage />} />    
        <Route path="/profil" element={<ProfilPage />} />
        <Route path="/file" element={<FilePage />} />
        <Route path="/sportcategory" element={<SportCategoryPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/sportactivity" element={<SportActivityPage />} />
        <Route path="/paymentmethod" element={<PaymentMethodPage />} />
        <Route path="/transaction" element={<TransactionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;