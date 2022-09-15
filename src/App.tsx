import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoute from "./routes/AppRoute";
import { AuthenticationContextProvider } from "./contexts/AuthenticationContext";

function App() {
    return (
        <div className="container">
            <AuthenticationContextProvider>
                <AppRoute />
            </AuthenticationContextProvider>
        </div>
    );
}

export default App;
