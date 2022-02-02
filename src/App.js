// import styles from "./App.module.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          basename={process.env.PUBLIC_URL}
          path={`/movie/:id`}
          element={<Detail />}
        />
        <Route
          basename={process.env.PUBLIC_URL}
          path={`/`}
          element={<Home />}
        />
      </Routes>
    </Router>
  );
}

export default App;
