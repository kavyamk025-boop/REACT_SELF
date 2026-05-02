function Greeting(props) {
  return (
    <div
      style={{
        border: "3px solid red",
        padding: "20px",
        margin: "20px",
        backgroundColor: "yellow"
      }}
    >
      <h1>{props.id}</h1>
      <h1>{props.name}</h1>
    </div>
  );
}

export default Greeting;