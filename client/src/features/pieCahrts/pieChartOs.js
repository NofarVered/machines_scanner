import React from 'react';
import { getPrivilegStatictis } from "./ApiClientPieChart";
import ReactApexChart from "react-apexcharts";


export class ApexChartOsStatistics extends React.Component {
    // componentDidMount() {
    //     getPrivilegStatictis().then((theStatic)=>{      
    //         const mac =theStatic["mac"]   
    //         const linux =theStatic["linux"]
    //         const windows =theStatic["windows"]            
    //         const privilegAndNon = [mac,linux,windows]
    //         const series=
    //         [{"name": 'Inflation',
    //         "data":privilegAndNon}]

    //         this.setState({
    //             series:series
    //         })
    //      }            
    //     ).catch(()=>
    //      {
    //         this.setState({
    //             error:true
    //         })
    //      }  
    //     )
    // }
    
    
    constructor(props) {
      super(props);

      this.state = {
        error:false,
        series: [{
          name: 'Inflation',
          data: [2.3, 3.1, 4.0]
        }],
        options: {
          chart: {
            height: 350,
            type: 'bar',
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              dataLabels: {
                position: 'center', // top, center, bottom
              },
            }
          },
          dataLabels: {
            enabled: true,
            formatter: function (val) {
              return val + "%";
            },
            offsetY: -20,
            style: {
              fontSize: '12px',
              colors: ["#304758"]
            }
          },
          
          xaxis: {
            categories: ["Mac", "Unix", "Windows"],
            position: 'top',
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
            }
          },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              formatter: function (val) {
                return val + "%";
              }
            }
          
          },
          title: {
            text: 'Opertion systems diversion ',
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
              color: '#444'
            }
          }
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
    {!this.state.error?
        <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
    :null}
     </div>
      )
    }
}
