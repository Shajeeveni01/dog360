import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from "./pages/upload";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
