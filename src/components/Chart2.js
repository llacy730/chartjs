import React, {Component} from 'react';
import {Bar, Line, Pie } from 'react-chartjs-2';

class Chart2 extends Component{
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
                    ['rgba(75, 119, 190, 1)',
                    'rgba(228, 241, 254, 1)',
                    'rgba(228, 241, 254, 1)',
                    'rgba(228, 241, 254, 1)']
                }
            
            ]
        
        }
        }
    }
 render(){
 return (
     <div className="chart">
     <Line
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
     position: 'left'
     }
     }}
/>
     </div>
     
     )
 
 }
    
    
}
export default Chart2;