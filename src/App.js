import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Component } from "react";
import Navbar from "./components/Navbar"
import Header from './components/Header'
import Particles from "react-particles-js"


class App extends Component {
    render() {
        return (
            <div>
                <Particles 
                    params={{
                        particles: {
                            number: {
                                value: 40,
                                density: {
                                    enable: true,
                                    value_area: 900
                                },
                                
                            },
                            // shape: {
                            //   type: 'circle',
                            //   stroke:{
                            //       width: 5,
                            //       color: "whitesmoke"
                            //   }  
                            // }
                        }
                    }}
                />
                <Navbar />    
                <Header />
                <div><p>test</p></div>
            </div>
        )            
    }
}

export default App