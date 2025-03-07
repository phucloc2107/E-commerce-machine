import { BrowserRouter, Route, Routes } from "react-router-dom";
import Onboarding from "./components"
import SearchPage from "./pages/SearchPage";
import SearchResult from "./pages/SearchResult";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Onboarding />} /> */}
        <Route path="/" element={<SearchPage />} />
        <Route path="/result" element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
