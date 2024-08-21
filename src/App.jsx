import Addtodo from "./components/Addtodo.jsx";
import Footer from "./components/Footer.jsx";
import Gettodos from "./components/Gettodos.jsx";
import Header from "./components/Header.jsx";
import ContextProvider from "./store/store.jsx";

export default function App() {
  return (<>
    <ContextProvider>
    <Header/>
    <Addtodo/>
    <Gettodos/>
    <Footer/>
    </ContextProvider>
    </>
  );
}
