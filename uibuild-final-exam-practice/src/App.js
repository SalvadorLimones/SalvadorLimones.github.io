import "./App.css";
import BeerCard from "./BeerCard";
import Header from "./Header";

const beers = [
  {
    title: "Mango Bay",
    sub: "Mad Scientist Beer",
    text: "Pale Ale - American",
  },
  {
    title: "Távoli Galaxis",
    sub: "Rothbeer Brewery",
    text: "IPA - American",
  },
  {
    title: "Flying Rabbit AIPA",
    sub: "MONYO Brewing co.",
    text: "IPA - American",
  },
  {
    title: "Liquid Cocaine",
    sub: "Mad Scientist Beer",
    text: "IPA - Imperial",
  },
  {
    title: "Organic Chocolate Stout",
    sub: "Samuel Smith Old Brewery",
    text: "Stouth - English",
  },
];

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Header />
        <div className="card-container">
          {beers.map((beer, i) => (
            <BeerCard key={i} beer={beer} index={i + 1} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
