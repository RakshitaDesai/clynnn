import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { HomePage } from "./screens/HomePage";
import { AboutUs } from "./screens/AboutUs";
import { JoinUs } from "./screens/JoinUs";
import { ContactUs } from "./screens/ContactUs";
import { Journal, JournalSlug } from "./screens/Journal";

export const App = (): JSX.Element => {
  return (
    <Router>
      <div className="bg-bg min-h-screen flex flex-col font-sans">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/journal/:slug" element={<JournalSlug />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};