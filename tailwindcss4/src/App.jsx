import { BrowserRouter } from "react-router-dom";
import CalculatorApp from "./apps/EightHundredCalculator/App";

export default function App() {
  return (
    <BrowserRouter>
      <CalculatorApp />
    </BrowserRouter>
  );
}