import { Routes, Route } from "react-router-dom";
import GeneratePlan from "../pages/GeneratePlan";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GeneratePlan />} />

    </Routes>
  );
}
