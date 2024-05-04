"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart = ({ accounts}: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
            label: 'Banks',
            data: [2134, 1150, 3604],
            backgroundColor: ['#FF6633', '#FFB399', '#FF33FF']
            }
        ],
        labels: ['Bank of America', 'Chase', 'Wells Fargo']
    }
    return <Doughnut 
            data = {data}
            options ={{
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }}
             />

}

export default DoughnutChart
