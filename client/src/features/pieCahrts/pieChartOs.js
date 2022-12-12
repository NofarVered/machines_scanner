import React from 'react';
import { getMacStatictis,getLinuxStatictis,getWindowsStatictis } from "./ApiClientPieChart";
import ReactApexChart from "react-apexcharts";


export class ApexChartOsStatistics extends React.Component {
    
    componentDidMount() {
        let linux
        let mac 
        let windows 
        Promise.all([getMacStatictis(), getLinuxStatictis(), getWindowsStatictis()]).then((values) => {
            mac =values[0][0]["num_of_mac_accounts"]   
            linux =values[1][0]["num_of_linux_accounts"]      
            windows =values[2][0]["num_of_windows_accounts"] 
            const sumOfMachines = mac+linux+windows
            mac=Math.round((mac/sumOfMachines)*100)
            linux=Math.round((linux/sumOfMachines)*100)
            windows=Math.round((windows/sumOfMachines)*100)
            const privilegAndNon = [mac,linux,windows]
            
            const series=
                [{"name": 'Inflation',
                "data":privilegAndNon}]
    
                this.setState({
                    series:series
                })
        });


        
        
    }
    
    
    constructor(props) {
      super(props);

      this.state = {
        error:false,
        series: [{
          name: 'Inflation',
          data: []
        }],
        options: {
          chart: {
            height: 350,
            width: 100,
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
              fontSize: '20px',
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
            text: 'Operating systems ',
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
