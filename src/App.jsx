import Navbar from "./components/Navbar";
import Router from "./router/Router";
import PhotoProvider from "./context/PhotoContext";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <PhotoProvider>
        <Router />
      </PhotoProvider>
      <Footer />
    </div>
  );
};
export default App;
