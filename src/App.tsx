import "./App.css";
import SearchInput from "./components/input";

function App() {
  return (
    <main className="container flex justify-center items-center w-screen h-screen bg-secondary">
      <div className="bg-white shadow-md w-80 min-h-96 max-h-screen mx-auto p-4">
        <SearchInput />
      </div>
    </main>
  );
}

export default App;
