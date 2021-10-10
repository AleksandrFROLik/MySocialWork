import React from 'react';
import './App.css';
import {Header} from "./components/Header/Haeder";
import {NavBar} from "./components/NavBar/NavBar";
import {Messages} from "./components/NavBar/componentsNavBar/messages/Messages";
import {Applications} from "./components/NavBar/componentsNavBar/applications/Applications";
import {Friends} from "./components/NavBar/componentsNavBar/friends/Friends";
import {Music} from "./components/NavBar/componentsNavBar/music/Music";
import {News} from "./components/NavBar/componentsNavBar/news/News";
import {BrowserRouter, Route} from "react-router-dom";
import {Videos} from "./components/NavBar/componentsNavBar/videos/Videos";
import {MyProFile} from "./components/NavBar/componentsNavBar/myProFile/MyProFile";



function App(props: any) {


    return (
        <BrowserRouter>
            <div className="App">
                <div className="app-wrapper">
                    <Header/>
                    <NavBar/>
                    <div className="app-wrapper-content">
                        <Route  path='/myProFile' component={MyProFile}/>
                        <Route  path='/news' component={News}/>
                        <Route  path='/messages' render={()=><Messages dialogData={props.dialogData} messageData={props.messageData}/> }/>
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
