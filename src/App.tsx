import { BrowserRouter, Route, Routes } from "react-router-dom";
import Onboarding from "./components"
import SearchPage from "./pages/SearchPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Onboarding />} /> */}
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
