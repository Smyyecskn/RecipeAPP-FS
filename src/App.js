import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div>
      <h1 className="text-center mt-3">
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </h1>
    </div>
  );
}

export default App;
