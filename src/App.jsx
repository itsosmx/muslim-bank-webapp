import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Privacy } from "./routes";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/"></Route>
          <Route element={<Privacy />} path="privacy"></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
