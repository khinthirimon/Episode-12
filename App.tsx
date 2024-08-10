import { Sidebar } from "./components/Sidebar";
import { Topbar } from "./components/Topbar";
import { Content } from "./components/Content";
import "./App.css";

function App() {
  return (
    <div>
      <Topbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
