import React from "react";
import Seo from "../components/Seo";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="suchar" style={{ padding: 30 }}>
      <Seo title="Pomoc" />
      <h1>Punkty</h1>
      <p>
        <strong>Punkty zdobywa się przez aktywność na portalu.</strong>
      </p>
      <ol>
        <li>
          Twoje pierwsze punkty zdobywasz już przy rejestracji konta, po
          rejestracji otrzymujesz 100 punktów.
        </li>
        <li>
          Za każdy dodany nowy suchar otrzymujesz +5 punktów, gdy usuniesz swój
          suchar tracisz -5 punktów, ale jeżeli twój suchar okaże się spamem,
          zostanie on przeniesiony do śmietnika, co sprawi, że z twojego konta
          znikną -10 punktów...
        </li>
        <li>
          Osoby którzy mają wysoką ilość punktów są w gronie "
          <Link style={{ color: "#eee" }} to="/top15">
            Top 15
          </Link>
          " najlepszych pisarzy sucharów!
        </li>
      </ol>

      <h1 style={{ marginTop: 30 }}>Suchary</h1>
      <p>
        Wszelkie treści generowane są przez Użytkowników, Administracja nie
        bierze za nie odpowiedzialności. Jeśli jakiś Suchar narusza Twoje prawa
        (w tym autorskie i osobiste) skontaktuj się z nami.
      </p>
    </div>
  );
};

export default Help;
