import React from 'react';
import './App.css';
import {chartData} from './data';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, HiloOpenCloseSeries, DateTime,
  Inject, Zoom, ScrollBar} from '@syncfusion/ej2-react-charts';

function App() {
  return (
    <div style={{textAlign:"center", margin:'5%'}}>
      <ChartComponent title="AAPL Historical"
      primaryXAxis={{valueType:"DateTime", title: 'Month', skeleton: 'yMMM',
      edgeLabelPlacement:"Shift", enableAutoIntervalOnZooming:true}} primaryYAxis={{title:"Price"}}
      zoomSettings={{enableSelectionZooming:true, enablePan:true, enableScrollbar:true, mode:"X",
      toolbarItems:["ZoomIn", "ZoomOut", "Reset", "Pan"]}}>
        <Inject services={[HiloOpenCloseSeries, DateTime, Zoom, ScrollBar]}></Inject>
        <SeriesCollectionDirective>
          <SeriesDirective type="HiloOpenClose" dataSource={chartData}
          xName="date" high="high" low="low" open="open" close="close"></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}
export default App;

