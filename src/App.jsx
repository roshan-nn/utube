import {Provider} from "react-redux";
import logo from './logo.svg';

import './App.css';
import Head from './Components/Head';

import Body from './Components/Body';
import store from "./Components/Utils/Store";


function App() {
  return (
    <Provider store={store}>
    <div >
     <Head />
     <Body />
     
    </div>
    </Provider>
  );
}

export default App;
