import "./App.css";
import {HashRouter} from "react-router-dom";
import RouterView from "react-router-waiter";
import { routes, beforeRouter } from "./router/index";

function App() {
  return (
    // history路由
    <HashRouter>
      <RouterView routes={routes} onRouteBefore={beforeRouter}></RouterView>
    </HashRouter>
  );
}

export default App;
