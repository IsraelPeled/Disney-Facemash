import Table from "./Components/table";
import "./css/table.css";
import "./css/app.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
function App() {
  const rows = [];
  for (let i = 0; i < 5; i++) {
    rows.push(<Table key={i} name="Baloo" score={i} />);
  }

  return (
    <>
      <Navbar />
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
      <table>
        <tr>
          <th>Character</th>
          <th>Score</th>
        </tr>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}

export default App;
