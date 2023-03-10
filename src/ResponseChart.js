import "./cssFiles/responseChart.css"

const ResponseChart = (props) => {

    let firstMultiple = props.firstMultiple;
    let firstReplacer = props.firstReplacer;
    let secondMultiple = props.secondMultiple;
    let secondReplacer = props.secondReplacer;
    let bothReplacer  = props.bothReplacer;

    const numberArray = []

    for (let i = 1; i <= 100; i++) {
        if ( i % firstMultiple === 0 && i % secondMultiple === 0) {
            numberArray.push(bothReplacer)
        } else if ( i % firstMultiple === 0 ) {
            numberArray.push(firstReplacer)
        } else if ( i % secondMultiple === 0) {
            numberArray.push(secondReplacer)
        } else {
            numberArray.push( i )
        }
    }

    return (
        <div className="changedValuesGrid">
            {
                numberArray.map((e) => {
                    return (
                        <p className="gridItem">
                            {e}
                        </p>
                    )
                })
            }
        </div>
    )
}
 
export default ResponseChart;