import { useRoutes } from "react-router-dom";
import routes from "src/routes";

const App = () => {
  const routing = useRoutes(routes());

  return <> {routing}</>;
};

export default App;
