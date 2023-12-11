import "./css-reset.css";
import "./globals.css";
import './animate.css'
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation.js";
import VerifyAgeModal from "./components/VerifyAge/VerifyAgeModal";
VerifyAgeModal

export const metadata = {
  title: "Full Circle Brewing",
  description: "Spreading good vibes and good beer in the heart of Fresno's Brewing District and nationwide.",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body>
        <VerifyAgeModal/>
        <Navigation/>
        {children}

        <Footer />
      </body>
    </html>
  );
}
