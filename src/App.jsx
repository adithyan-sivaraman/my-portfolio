import "./App.css";
import HomePage from "./Components/Homepage";
import { ChakraProvider } from "@chakra-ui/react";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
function App() {
  return (
    <ChakraProvider>
      <div className="flex flex-col w-screen">
        <HomePage />
        <Projects />
        <Experience />
      </div>
    </ChakraProvider>
  );
}

export default App;
