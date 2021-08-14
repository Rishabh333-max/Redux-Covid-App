import "./App.css";
import Header from "./shared/header";
import Forms from "./components/forms";
import Result from "./components/result";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Forms />
      <Result />
    </div>
  );
}
