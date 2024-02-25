import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Homepage, Signup, Signin } from "../pages/index";

const AnimatedRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
