import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SampleComponent } from "./components/deeply/nested/SampleComponent";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <SampleComponent />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://marcopeg.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    marcopeg.com
                </a>
            </header>
        </div>
    );
}

export default App;
