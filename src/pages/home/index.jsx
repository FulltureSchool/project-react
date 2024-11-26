import "./styles.css";
import Client1 from "../../assets/client-audiophile.svg";
import Client2 from "../../assets/client-databiz.svg";
import Client3 from "../../assets/client-maker.svg";
import Client4 from "../../assets/client-meet.svg";

export const Home = () => (
  <main className="container">
    <div className="content">
      <h1>
        Make
        <br /> remote work
      </h1>
      <p>
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>

      <button>Learn More</button>

      <div className="clients">
        <img alt="" src={Client1} />
        <img alt="" src={Client2} />
        <img alt="" src={Client3} />
        <img alt="" src={Client4} />
      </div>
    </div>

    <div className="mainImage" />
  </main>
);
