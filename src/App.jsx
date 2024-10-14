import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import "./app.css";
function App() {
  return (
    <>
      <Navbar />
      <Navbar />
      <Card
        image="https://static.wikia.nocookie.net/disney/images/3/31/Profile_-_Baloo.jpeg"
        name="Baloo"
      />
      <div id="img1">
        <Card
          id="red"
          image="https://static.wikia.nocookie.net/disney/images/3/31/Profile_-_Baloo.jpeg"
          name="Baloo"
        />
      </div>
      <div id="img2">
        <Card
          id="blue"
          image="https://static.wikia.nocookie.net/disney/images/3/31/Profile_-_Baloo.jpeg"
          name="Superman"
        />
      </div>
    </>
  );
}

export default App;
