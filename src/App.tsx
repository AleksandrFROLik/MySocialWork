import React from 'react';
import './App.css';
import {Header} from "./components/Header/Haeder";
import {NavBar} from "./components/NavBar/NavBar";
import {Messages} from "./components/NavBar/componentsNavBar/messages/Messages";
import {Applications} from "./components/NavBar/componentsNavBar/Applications/Applications";
import {Friends} from "./components/NavBar/componentsNavBar/Friends/Friends";
import {Music} from "./components/NavBar/componentsNavBar/Music/Music";
import {News} from "./components/NavBar/componentsNavBar/News/News";
import {BrowserRouter, Route} from "react-router-dom";
import {Videos} from "./components/NavBar/componentsNavBar/Videos/Videos";
import {MyProFile} from "./components/NavBar/componentsNavBar/MyProFile/MyProFile";
import {stateType} from "./components/Redux/Redax";

type AppType = {
    state: stateType
}


function App({state}: AppType) {


    return (
        <BrowserRouter>
            <div className="App">
                <div className="app-wrapper">
                    <Header/>
                    <NavBar/>
                    <div className="app-wrapper-content">
                        <Route  path='/myProFile' component={MyProFile}/>
                        <Route  path='/news' component={News}/>
                        <Route  path='/messages' render={()=><Messages messagePage={state.messagePage}/> }/>
                        <Route  path='/friends' component={Friends}/>
                        <Route  path='/music' component={Music}/>
                        <Route  path='/videos' component={Videos}/>
                        <Route  path='/applications' component={Applications}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
