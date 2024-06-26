import { useDispatch } from "react-redux";
import "../assets/css/Splash.css";
import { setPage } from "../features/global/globalSlice";

export default function Splash() {
  const dispatch = useDispatch();

  return (
    <div id="main-wrapper">
      <section id="image-container" className="horizontal-padding">
        <img
          src="/AutoPrincipale.png"
          width="640"
          height="290"
          alt="Immagine Auto Principale"
        />
      </section>
      <section>
        <div id="splash-text" className="horizontal-padding">
          <h1>Find Ideal Car for Your Next Trip</h1>
          <p>
            The point of using. Lorem ipsum isthat Readable content of a page
          </p>
        </div>
        <div id="splash-button" className="horizontal-padding">
          <button
            className="button-primary"
            onClick={() => dispatch(setPage("booking"))}
          >
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
