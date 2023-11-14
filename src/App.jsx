import { BrowserRouter } from "react-router-dom";
import AuthContextComponent from "./context/AuthContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <BrowserRouter>
          <AuthContextComponent>          
              <AppRouter />
          </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
