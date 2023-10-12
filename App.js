import { Provider } from "react-redux";
import MainNavigator from "./src/navigation/MainNavigator";
import { ToastContainer, toast } from "react-toastify";
import { store } from "./src/app/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </>
  );
}
