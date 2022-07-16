import React, { useState } from "react";
import Header from "../Header/Header";
import ResultContainer from "../ResultContainer/ResultContainer";
import SearchBox from "../SearchBox/SearchBox";
import './App.css'


// importing that statup name generator library
const name = require("@rstacruz/startup-name-generator")
// name() -> function in this library generates random name by accepting a parameter
// ex : name("car") - > this will generate random startup name related to this keyword

// implementing same project in Functional Componenet using React 'Hooks'

const App =()=>{

    // implementing 'states' using 'Hooks'
    const [headerText]=useState('Name It!')
    const [headerExpanded,setHeaderExpanded]=useState(true)
    const [suggestedNames,setSuggestedNames]=useState([])

    const handleInputChange= (inputtedText)=>{
           
            setHeaderExpanded(!inputtedText)
            setSuggestedNames(inputtedText ?  name(inputtedText) : [])

    }


    return(
        <div>
                <Header headerExpanded={headerExpanded} headText={headerText} />
                <SearchBox onInputChange={handleInputChange} />
                <ResultContainer suggestedNames = {suggestedNames}/>
                
            </div>
    )
}

// creating class based component
// class App extends React.Component{
//    state={
//     headerText: "Name It!",
//     headerExpanded : true,
//     suggestedNames : []

//    }
//    handleInputChange= (inputtedText)=>{
//     this.setState({
//         headerExpanded : !inputtedText,
//         // this will give noting if there is noting in the search box
//         suggestedNames :  inputtedText ?  name(inputtedText) : [],
//     })
//     // if inputtedtext is an empty string then it headerExanded will be true, if inputted text is empty then -> headerExpanded : true
//    }
//     render(){
//         // console.log(name("car"));
//         return(
//             <div>
//                 <Header headerExpanded={this.state.headerExpanded} headText={this.state.headerText} />
//                 <SearchBox onInputChange={this.handleInputChange} />
//                 <ResultContainer suggestedNames = {this.state.suggestedNames}/>
                
//             </div>
//         )
//     }
// }
// exporting that component
export default App;