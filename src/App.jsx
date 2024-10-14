import Card from "./Card";
import "./app.css";
function App() {
  return (
    <>
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
