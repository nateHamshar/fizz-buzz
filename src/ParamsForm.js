import { useState } from "react"
import "./cssFiles/paramsForm.css"
import ResponseChart from "./ResponseChart";

const ParamsForm = () => {

    const [firstMultiple, setFirstMultiple] = useState();
    const [firstReplacer, setFirstReplacer] = useState();

    const [secondMultiple, setSecondMultiple] = useState();
    const [secondReplacer, setSecondReplacer] = useState();

    const [bothReplacer, setBothReplacer] = useState();

    return (
        <div className="paramsFormDiv">
            <form className="paramsForm">
                <label htmlFor="replaceFirstMultiple" className="replaceFirstMultiple">Replace multiples of
                    <input  type="number"
                            required
                            className="firstMultiple inputField" 
                            id="replaceFirstMultiple"
                            onChange={(e) => setFirstMultiple(e.target.value)} />
                        with 
                    <input  type="text"
                            required 
                            id="replacerOne" 
                            className="firstReplacer inputField"
                            onChange={(e) => setFirstReplacer(e.target.value)}/>
                        .
                </label>

                <label htmlFor="replaceFirstMultiple" className="replaceFirstMultiple">Replace multiples of
                    <input  type="number" 
                            required
                            className="firstMultiple inputField" 
                            id="replaceFirstMultiple" 
                            onChange={(e) => setSecondMultiple(e.target.value)} />
                        with 
                    <input  type="text" 
                            required
                            id="replacerOne" 
                            className="firstReplacer inputField"
                            onChange={(e) => setSecondReplacer(e.target.value)}/>
                        .
                </label>
                
                <label htmlFor="replacerBoth" className="replaceBoth">Replace multiples of both with 
                    <input  type="text" 
                            required
                            id="replacerBoth" 
                            className="both inputField"
                            onChange={(e) => setBothReplacer(e.target.value)}/>
                        .
                </label>
            </form>

        
            <ResponseChart 
                firstMultiple={firstMultiple}
                firstReplacer={firstReplacer}
                secondMultiple={secondMultiple}
                secondReplacer={secondReplacer}
                bothReplacer={bothReplacer}
            /> 
        
        </div>
    )
}
 
export default ParamsForm;