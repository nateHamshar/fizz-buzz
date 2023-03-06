import ParamsForm from "./ParamsForm";
import "./cssFiles/app.css"
function App() {
  return (
    <div className="App">
      <section className="titleSection">
        <h2 className="titleHeader">Epic Fizz Buzz</h2>
      </section>
      <section className="formSection">
        <ParamsForm />
      </section>
    </div>
  );
}

export default App;
