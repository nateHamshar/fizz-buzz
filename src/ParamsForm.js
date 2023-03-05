import { useState } from "react"
import "./cssFiles/paramsForm.css"
import ResponseChart from "./ResponseChart";

const ParamsForm = () => {

    const [firstMultiple, setFirstMultiple] = useState(3);
    const [firstReplacer, setFirstReplacer] = useState("fizz");

    const [secondMultiple, setSecondMultiple] = useState(5);
    const [secondReplacer, setSecondReplacer] = useState("buzz");

    const [bothReplacer, setBothReplacer] = useState("fizz-buzz");

    const handleSubmit = ()  => {
        
    }


    return (
        <div className="paramsFormDiv">
            <form className="paramsForm">
                <label htmlFor="replaceFirstMultiple" className="replaceFirstMultiple">Replace multiples of
                    <input  type="number"
                            required
                            className="firstMultiple" 
                            id="replaceFirstMultiple"
                            onChange={(e) => setFirstMultiple(e.target.value)} />
                        with 
                    <input  type="text"
                            required 
                            id="replacerOne" 
                            className="firstReplacer"
                            onChange={(e) => setFirstReplacer(e.target.value)}/>
                </label>

                <label htmlFor="replaceFirstMultiple" className="replaceFirstMultiple">Replace multiples of
                    <input  type="number" 
                            required
                            className="firstMultiple" 
                            id="replaceFirstMultiple" 
                            onChange={(e) => setSecondMultiple(e.target.value)} />
                    with 
                    <input  type="text" 
                            required
                            id="replacerOne" 
                            className="firstReplacer"
                            onChange={(e) => setSecondReplacer(e.target.value)}/>
                </label>
                
                <label htmlFor="replaceFirstMultiple" className="replaceFirstMultiple">Replace multiples of both with 
                    <input  type="text" 
                            required
                            id="replacerOne" 
                            className="firstReplacer"
                            onChange={(e) => setBothReplacer(e.target.value)}/>
                </label>

                <input  type="button" 
                        required
                        className="submitButton" 
                        value="submit" 
                        onClick={() => {handleSubmit()}} />
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