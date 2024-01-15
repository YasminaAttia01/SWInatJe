import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const montserrat = Montserrat({ subsets: ["latin"] });
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Melkart JE",
  description: "Melkart Junior Entreprise",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${montserrat.className} bg-primary overflow-x-hidden relative z-0  `}
      >
        <Navbar />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
