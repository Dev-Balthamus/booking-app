import "../assets/css/Splash.css";

export default function Splash() {
  return (
    <div id="main-wrapper">
      <section id="image-container">
        <img
          class="horizontal-padding"
          src="https://immagini.alvolante.it/sites/default/files/styles/anteprima_lunghezza_640/public/serie_auto_galleria/2018/04/lamborghini_urus_ant_0.png"
          width="640"
          height="290"
          alt="immagine-auto-principale"
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
