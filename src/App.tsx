import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Rent from "./pages/rent/Rent";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Rent/>} />
      </Routes>
    </div>
  );
}

export default App;
