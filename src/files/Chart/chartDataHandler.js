function dataHandler(props){

  // Refatorar este codigo
  // EdgeCases a analisar:
  //  1- Parar de analisar dados depois do stop
  //  2- E se existir um start depois do stop?  como reiniciar o processamento a partir do segundo start?
  //  
    

  
    const data = props 


    const start = data.find(element => element.type === "start")
    const stop = data.find(element => element.type === "stop")
    const Span = data.find(element => element.type=== "span")
    let label = [];

    label.push(Span.begin)
    for(let i=0;i<data.length;i++){
        if(data[i].type === "data"  && data[i].timestamp < Span.end){
            label.push(data[i].timestamp)
        }
    }
   label.push(Span.end)

    let labelwithoutDuplication = label.filter((c, index) => {
        return label.indexOf(c) === index;
    });

  

    let charDataSet = []

    let filteredDataLabel = data.filter((element)=> element.type === 'data')
   
    //get all possible labels

    for(let i=0; i<filteredDataLabel.length;i++){
      
      let concatLabel = ""
      for(let j=0; j< start.group.length;j++){
        
        concatLabel += filteredDataLabel[i][start.group[j]] + " "
        
      }
      
      for(let j=0; j < start.select.length;j++){
        let itemTitle = concatLabel + start.select[j]

        let indexOfData = charDataSet.map(e => e.label).indexOf(itemTitle)

        if(indexOfData === -1){
          let color = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},1)`
          charDataSet.push( {
            label: itemTitle,
            data: [filteredDataLabel[i][start.select[j]]],
            fill: false,
            backgroundColor: color,
            borderColor: color,
          })
        }else{
          charDataSet[indexOfData].data.push(filteredDataLabel[i][start.select[j]])
          }
        }

      }

    

   
    


    return {
        labels: labelwithoutDuplication,
        datasets: charDataSet,
      };
}

export default dataHandler