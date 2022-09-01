import Form from "./Form";
import datajson from "./datajson.json";
function App() {
  return (
    <>
      <Form datajson={datajson} />
    </>
  );
}

export default App;
