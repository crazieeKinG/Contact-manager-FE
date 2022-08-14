import { RoutesPath } from "./routes/RoutesPath";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./reducers/store";

function App() {
    return (
        <div className="container">
            <Provider store={store}>
                <RoutesPath />
            </Provider>
        </div>
    );
}

export default App;
