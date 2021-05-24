import "bootstrap/dist/css/bootstrap.min.css"
import { Component } from "react";
import Navbar from "./components/Navbar"
import "./App.css"

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />    
                <h1>resume</h1>
            </div>
        )            
    }
}

export default App