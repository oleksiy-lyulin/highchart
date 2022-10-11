import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const ONE_HOUR = 3600000;
const ONE_DAY = 24 * ONE_HOUR;

const pointStart = Date.UTC(2020, 0, 1);
const pointInterval = ONE_DAY;

const data = Array.from(Array(365).keys()).map(() => 100 * Math.random());
const categories = Array.from(Array(365).keys()).map(d =>
  new Date(2020, 0, d).toDateString(),
);

const App = () => {
  const [chartOptions, setChartOptions] = useState<Highcharts.Options>({
    chart: {
      zooming: {
        type: 'x',
      },
    },
    plotOptions: {
      column: {
        borderWidth: 2,
        borderColor: 'black',
        opacity: 0.5,
      },
    },
    xAxis: {
      labels: {
        rotation: undefined,
        autoRotation: undefined,
      },
      crosshair: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      type: 'datetime',
      // minTickInterval: ONE_DAY,
      categories,
    },
    series: [
      {
        type: 'column',
        // pointStart,
        // pointInterval,
        data,
      },
    ],
  });

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} credits />
    </div>
  );
};

const container = document.getElementById('root');
const root = container && createRoot(container);
root?.render(<App />);
