import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CalculatorApp from "./apps/EightHundredCalculator/App";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:lang/800m-calculator/*" element={<CalculatorApp />} />
        {/* Optionally, redirect / to English calculator */}
        <Route path="*" element={<Navigate to="/en/800m-calculator" replace />} />
      </Routes>
    </BrowserRouter>
  );
}