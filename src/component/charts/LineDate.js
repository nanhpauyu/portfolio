import {
    Chart as ChartJS,
    CategoryScale,
    TimeScale, // Import the time scale
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Daily Job Applications Chart',
        },
    },
    scales: {
        x: {
            type: 'time',
            time: {
                unit: 'day',
                tooltipFormat: 'yyyy-MM-dd'
            },
            title: {
                display: false,
                text: 'Date'
            },
            ticks: {
                autoSkip: true, // Automatically skip ticks if there are too many
                maxRotation: 90, // Maximum label rotation
                minRotation: 0, // Minimum label rotation
                beginAtZero: true,
            },
        },

    },
};



function LineDate(props) {
    const allData = Array.from(props.data)
    const temp = {}
    allData.forEach(e => {
        var dateTime = e.start_date;
        if (temp[dateTime]) {
            temp[dateTime] += 1
        } else {
            temp[dateTime] = 1
        }
    })

    const data = {
        labels: Object.keys(temp),
        datasets: [
            {
                label: 'Job Applications',
                data: Object.values(temp),
                backgroundColor: '#fd7f6f',
                borderColor: 'rgb(75, 192, 192)',
            }
        ]
    }
    return (
        <>
            <Line options={options} data={data} />
        </>
    )
} export default LineDate