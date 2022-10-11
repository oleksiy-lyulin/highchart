import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const App = () => {
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>({
    series: [
      {
        type: 'line',
        data: [1, 2, 3],
      },
    ],
  });

  useEffect(() => {
    setInterval(() => {
      setChartOptions({
        series: [
          {
            type: 'line',
            data: [Math.random() * 3, Math.random() * 3, Math.random() * 3],
          },
        ],
      });
    }, 1000);
  }, []);

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} credits />
    </div>
  );
};

const container = document.getElementById('root');
const root = container && createRoot(container);
root?.render(<App />);
