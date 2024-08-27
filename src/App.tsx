import { useState } from "react";
import "./App.css";
import SearchInput from "./components/input";

function App() {
  const [search, setSearch] = useState("");
  return (
    <main className="container flex justify-center items-center w-screen h-screen bg-secondary">
      <div className="bg-white shadow-md w-80 min-h-96 max-h-screen mx-auto p-4">
        <SearchInput
          defaultValue={search}
          onChange={(value) => setSearch(value)}
        />
      </div>
    </main>
  );
}

export default App;
