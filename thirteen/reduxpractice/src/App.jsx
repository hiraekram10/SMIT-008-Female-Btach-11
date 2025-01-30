import Home from "./Pages/Home"
import AppRouter from "./router"
import store from "./store"
import { Provider } from "react-redux"



function App() {


  return (
    <>
    <Provider store={store}>
    <AppRouter/>
    </Provider>
    </>
  )
}

export default App
