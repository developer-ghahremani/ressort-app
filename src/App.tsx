import { BrowserRouter, Route, Routes } from "react-router-dom";

import routes from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route {...route} key={route.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
