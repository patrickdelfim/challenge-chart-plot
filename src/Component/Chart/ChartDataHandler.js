function dataHandler(props){


    /* Data must be sorted because what defines its order is the timestamp and not the order that he is received by client*/
    
    const data = props.sort((element1,element2)=> element1.timestamp - element2.timestamp)
    

    const lastIndexOfTypeStart = data.map(e => e.type).lastIndexOf("start")
    const start = data[lastIndexOfTypeStart]
    
    const lastIndexOfTypeStopAfterStart = data.map(e => e.type).indexOf("stop",lastIndexOfTypeStart)   

    const lastIndexOfTypeSpan = data.map(e => e.type).lastIndexOf("span")
    const Span = data[lastIndexOfTypeSpan]

    // get valid dataset between lastIndexOfTypeStart and last inputed stop.
    const validDataSet = data.slice(lastIndexOfTypeStart, !(lastIndexOfTypeStopAfterStart+1) ?  data.length : lastIndexOfTypeStopAfterStart+1)

    /* Get all labels removing duplicated one */

    let label = [];
    label.push(Span.begin)
    for(let i=0;i<validDataSet.length;i++){
        if(validDataSet[i].type === "data"  && validDataSet[i].timestamp < Span.end){
            label.push(validDataSet[i].timestamp)
        }
    }
   label.push(Span.end)

 
    let labelwithoutDuplication = label.filter((c, index) => {
        return label.indexOf(c) === index;
    });
  

    let chartDataSet = []

    let filteredDataLabel = validDataSet.filter((element)=> element.type === 'data')

    
    /* create master title for the dataset concatenating groups and select fields, after that algorithm collects values to populate the chart*/
    for(let i=0; i<filteredDataLabel.length;i++){
      
      let concatLabel = ""
      for(let j=0; j< start.group.length;j++){
        let grouplbl = filteredDataLabel[i][start.group[j]] || ""
        concatLabel += grouplbl? grouplbl + " " : ""
      }
      
      for(let j=0; j < start.select.length;j++){
        let itemTitle = concatLabel + start.select[j]

        let indexOfData = chartDataSet.map(e => e.label).indexOf(itemTitle)

        if(indexOfData === -1){
                let color = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`
                
                chartDataSet.push( {
                  label: itemTitle,
                  data: [ filteredDataLabel[i][start.select[j]]],
                  fill: false,
                  backgroundColor: color,
                  borderColor: color,
                })
              }else{
               
                chartDataSet[indexOfData].data.push([filteredDataLabel[i][start.select[j]]])
                }


              }
      
            }

    return {
        labels: labelwithoutDuplication,
        datasets: chartDataSet,
      };
}

export default dataHandler