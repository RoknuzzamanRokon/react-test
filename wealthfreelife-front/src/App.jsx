import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Services from "./components/Services";
import Transactions from "./components/Transactions";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      {/* <Services /> */}
      {/* <Transactions /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default App;
