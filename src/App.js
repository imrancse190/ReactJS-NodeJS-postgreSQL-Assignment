import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ApartmentRulesSafetyPolicyContainer } from "./component/ApartmentRulesSafetyPolicyContainer";
import { ExploreOtherOptionsContainer } from "./component/ExploreOtherOptionsContainer";
import NavbarDesktop from "./component/NavbarDesktop";
import { HomePage } from "./pages/HomePage";
import { HotelDetailsPage } from "./pages/HotelDetailsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navbar */}
        <NavbarDesktop />
        {/* Body */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<HotelDetailsPage />} />
        </Routes>
        {/* Footer */}
        <ApartmentRulesSafetyPolicyContainer />
        <ExploreOtherOptionsContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
