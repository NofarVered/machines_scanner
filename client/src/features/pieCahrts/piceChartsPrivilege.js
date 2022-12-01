import React from 'react';
import ReactApexChart from "react-apexcharts";
import { getPrivilegStatictis } from "./ApiClientPieChart";
export class ApexChartPrivilege extends React.Component {
       
    componentDidMount() {
        getPrivilegStatictis().then((theStatic)=>{      
            const privileged =theStatic["privileged"]   
            const nonprivileged =theStatic["nonpriviliged"]
            const all_users = privileged+nonprivileged   
            const privilegAndNon = [(privileged/all_users)*100,(nonprivileged/all_users)*100]
            this.setState({
                series:privilegAndNon
            })
         }            
        ).catch(()=>
         {
            this.setState({
                error:true
            })
         }  
        )
    }
    

    constructor(props) {
      super(props);
      this.state = {      
        series: [44, 55],
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['priviliged', 'nonpriviliged'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
        error:false
      
      
      };
    }

  

    render() {
    return (        

  <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="pie" width={380} />
  </div>

      )
    }
}