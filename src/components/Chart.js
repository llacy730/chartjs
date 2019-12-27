import React, {Component} from 'react';
import {Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component{
    constructor(props){
super(props);
        this.state={
        chartData:{
        labels:['Houston', 'Dallas', 'Henderson'],
            datasets:[
                {
                 label: 'Population',
                data:[
                    3353, 3354, 3356,
                    ],
                    backgroundColor:
                    ['rgba(255, 0, 127, 0.9)',
                    'rgba(255, 4, 102, 0.9)',
                    'rgba(153, 102, 64, 0.9)']
                }
            
            ]
        
        }
        }
    }
 render(){
 return (
     <div className="chart">
     <Pie
  data={this.state.chartData}
  width={900}
  height={600}
  options={{
     title:{
     display:true,
     text:'Largest City',
     fontSize:25
     },
     legend:{
     display:true,
     position: 'right'
     }
     }}
/>
     </div>
     
     )
 
 }
    
    
}
export default Chart;