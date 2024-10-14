import "../css/table.css";
function Table(props) {
  return (
    <>
      <tr>
        <td>{props.name}</td>
        <td>{props.score}</td>
      </tr>
    </>
  );
}

export default Table;
