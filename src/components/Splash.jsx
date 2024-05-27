import "../assets/css/Splash.css";

export default function Splash() {
  return (
    <div id="main-wrapper">
      <section id="image-container">
        <img
          class="horizontal-padding"
          src="/AutoPrincipale.png"
          width="640"
          height="290"
          alt="Immagine Auto Principale"
        />
      </section>
      <section id="text-plus-button">
        <div class="horizontal-padding">
          <h1>Find Ideal Car for Your Next Trip</h1>
          <p>
            The point of using. Lorem ipsum isthat Readable content of a page
          </p>
        </div>
        <button class="horizontal-padding button-primary">Get Started</button>
      </section>
    </div>
  );
}
