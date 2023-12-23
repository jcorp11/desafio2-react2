import Gallery from "../components/Gallery";

const Favorites = () => {
  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <Gallery isFav={true} />
    </div>
  );
};
export default Favorites;
