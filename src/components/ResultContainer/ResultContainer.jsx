import React from "react";
import NameCard from "../NameCard/NameCard";
import "./ResultContainer.css"

const ResultContainer =({suggestedNames})=> {

    const suggestedNamesJSX = suggestedNames.map(singleSuggestedName => {
        return <NameCard suggestedName={singleSuggestedName}/>
    })

    return (
        
            <div className="result-container">
                    {suggestedNamesJSX}
            </div>

    )

}
    
export default ResultContainer
