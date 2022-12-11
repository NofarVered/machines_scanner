class ApexChart extends React.Component {

    componentDidMount() {
        let scansSuccess
        let scansFailed        
        Promise.all([getAllScansFailed(), getAllScansSuccess()]).then((values) => {
            scansSuccess =values[0][0]["num_of_mac_accounts"]   
            scansFailed =values[1][0]["num_of_linux_accounts"]     
            const successAndNon = [scansSuccess,scansFailed]
            
            const series=
                [{"name": 'Inflation',
                "data":successAndNon}]
    
                this.setState({
                    series:series
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
          labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
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
              style: ['verticalLines', 'squares', 'horizontalLines', 'circles','slantedLines'],
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
          title: {
            text: "Favourite Movie Type"
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
        

  <div id="chart">
        <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width={380} />
</div>

      )}
}