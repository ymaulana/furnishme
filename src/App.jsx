import { Header, Hero, Features } from "./components";
import { NewItems } from "./components/NewItems";

function App() {
  return (
    <div className="mx-auto w-full max-w-[1440px] bg-white">
      <Header />
      <Hero />
      <Features />
      <NewItems />
    </div>
  );
}

export default App;
