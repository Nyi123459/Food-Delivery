import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import store from "./utils/store";
import App from "./App";
import "./index.css";
import { UserProvider } from "./context/userContext";
import { SocketProvider } from "./context/socketContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UserProvider>
    <SocketProvider>
      <App />
    </SocketProvider>
  </UserProvider>
);
