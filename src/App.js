import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  Dashboard,
  ProductDetails
} from "./components";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dashboard} exact />{" "}
        <Route path="/shop/:id" component={ProductDetails} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
