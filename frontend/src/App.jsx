import { CommandBar } from "./components/CommandBar/CommandBar";
import { ThemeToggle } from "./components/ThemeToggle/ThemeToggle";

function App() {
  return (
    <>
      <div>
        <ThemeToggle />
      </div>

      <CommandBar />
    </>
  );
}

export default App;
