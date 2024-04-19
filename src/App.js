import LandingPage from "./pages/landing";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" children={<LandingPage />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
