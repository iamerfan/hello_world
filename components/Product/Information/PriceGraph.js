import React from 'react'
import { Line } from 'react-chartjs-2'
import {
   Chart as ChartJS,
   CategoryScale,
   LinearScale,
   Title,
   PointElement,
   LineElement,
   Tooltip,
   Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement, LineElement)
ChartJS.defaults.font = { family: 'Shabnam', size: 16 }

export default function PriceGraph({ activeView, product }) {
   const Prices = product.price.map(item => {
      return item.newPrice
   })
   const Dates = product.price.map(item => {
      return item.date
   })

   const data = {
      labels: ['1401/15/3', '1401/15/4', '1401/15/5', '1401/15/6'],
      datasets: [
         {
            label: 'قیمت',
            data: [100000, 120000, 140000, 160000],
            backgroundColor: '#fff',
            borderColor: '#f0282895',
         },
      ],
   }
   if (activeView === 1)
      return (
         <div className='PriceGraph'>
            <Line
               data={data}
               height={200}
               options={{
                  maintainAspectRatio: false,
                  responsive: true,
                  locale: 'fa',
                  plugins: { legend: { display: false } },
               }}
               className='graph'
            />
         </div>
      )
}
