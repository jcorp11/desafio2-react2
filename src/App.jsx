import Navbar from "./components/Navbar";
import Router from "./router/Router";
import PhotoProvider from "./context/PhotoContext";

const App = () => {
  return (
    <div>
      <Navbar />
      <PhotoProvider>
        <Router />
      </PhotoProvider>
    </div>
  );
};
export default App;
