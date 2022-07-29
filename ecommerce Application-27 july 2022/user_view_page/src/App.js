import "./App.css";
import { Footer } from "./Components/Footer";
import { Headers } from "./Components/Headers";
import { Navbar } from "./Components/Navbar";
import { TopBanner } from "./Components/TopBanner";
import { DataProvider } from "./globalState";
import { RoutePage } from "./RoutePage";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <TopBanner />
        <Headers />
        <Navbar />
        <RoutePage />
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
