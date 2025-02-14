import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import { dummyData } from '../../data/dummyData';
import { colorPicker } from '../../data/colorData';


ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Remote Hybrid On-site',
      },
    },
  };


function DonutRemote(props) {
    const allData = Array.from(props.data);
    const dataset = {}
    allData.forEach(e => {        
        let remoteValue = ''
        if (e.remote.charAt(0) ==='H' || e.remote.charAt(0) ==='h' ){
            remoteValue = 'Hybrid'
        }else if (e.remote.charAt(0) ==='R' || e.remote.charAt(0) ==='r'){
            remoteValue ='Remote'
        }else{
            remoteValue = 'Onsite'
        }
        if (dataset[remoteValue]) {
            dataset[remoteValue] += 1
        } else {
            dataset[remoteValue] = 1
        }
    })
    const color = colorPicker(Object.values(dataset).length)
    const data = {
        labels: Object.keys(dataset),
        datasets: [
            {
                label: 'Status',
                data: Object.values(dataset),
                backgroundColor: color,
                hoverOffset: 4
            }
        ]
    }
    return (
        <>
            <Doughnut data={data} options={options} />
        </>
    )
} export default DonutRemote;