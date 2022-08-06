import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const App = () => {
  const [chartOptions, setChartOptions] = useState({
    series: [
      {
        data: [1, 2, 3],
      },
    ],
  });

  setInterval(() => {
    setChartOptions({
      series: [
        {
          data: [Math.random() * 3, Math.random() * 3, Math.random() * 3],
        },
      ],
    });
  }, 500);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} credits />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
