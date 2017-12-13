import React, { Component } from 'react';
import './bar.css'
import {Bar} from 'react-chartjs-2'

class BarGraph extends Component {
  constructor(){
    super()

    this.state = {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Naps Per Month',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 100, 81, 56, 55, 30]
          }
        ]
      }
    }
  }
 



  render() {
    return (
      <div className='sizer'>
        <Bar
          data={this.state.data}
          width={100}
          height={80}
          options={{
            maintainAspectRatio: true
          }}
          />
      </div>
    );
  }
}

export default BarGraph;