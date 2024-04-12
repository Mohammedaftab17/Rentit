import React from "react";
import { ToastContainer } from "react-toastify";
import "@/assets/styles/global.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Rentit | Search it ,Find it, Rent it",
  description: "Find Your Budget Friendly Location",
  keywords: "Rent, rental, budget friendly rent places",
};
const layout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default layout;
