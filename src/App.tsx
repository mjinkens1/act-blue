import skaBand from "./band-json/ska-band.json";
import kpopBand from "./band-json/kpop-band.json";
import punkBand from "./band-json/punk-band.json";

import BandForm from "./app/BandForm";

function App() {
  const bands = [skaBand, kpopBand, punkBand];

  return (
    <main className="app">
      <BandForm band={bands[0]} />
    </main>
  );
}

export default App;
