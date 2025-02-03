import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />

      <section className="min-h-screen z-0 bg-blue-500" />
    </main>
  );
};

export default App;
