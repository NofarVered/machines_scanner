import React from 'react';
import { getStaticsOfSucccesScans,getStaticsOfFailedScans } from "./ApiClientPieChart";
import ReactApexChart from "react-apexcharts";


export class ApexChart extends React.Component {

    componentDidMount() {
        let scansSuccess
        let scansFailed        
        Promise.all([getStaticsOfFailedScans(), getStaticsOfSucccesScans()]).then((values) => {
            scansFailed =values[0][0]["Failed scans"]   
            scansSuccess =values[1][0]["Successful scans"]     
            const successAndNon = [scansSuccess,scansFailed]          
           
                this.setState({
                    series:successAndNon
                })
        });
    }
    constructor(props) {
      super(props);

      this.state = {      
        series: [],
        options: {
          chart: {
            width: 380,
            type: 'donut',
            dropShadow: {
              enabled: true,
              color: '#111',
              top: -1,
              left: 3,
              blur: 3,
              opacity: 0.2
            }
          },
          stroke: {
            width: 0,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  total: {
                    showAlways: true,
                    show: true
                  }
                }
              }
            }
          },
          labels: ["success Scans", "failed Scans"],
          dataLabels: {
            dropShadow: {
              blur: 3,
              opacity: 0.8
            }
          },
          fill: {
          type: 'pattern',
            opacity: 1,
            pattern: {
              enabled: true,
              style: ['squares', 'horizontalLines', 'circles','slantedLines'],
            },
          },
          states: {
            hover: {
              filter: 'none'
            }
          },
          theme: {
            palette: 'palette2'
          },
         
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
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart" style={{marginLeft: 300+'px',marginTop:6}} >
        <ReactApexChart  options={this.state.options} series={this.state.series} type="donut" width={380} />
</div>

      )}
}