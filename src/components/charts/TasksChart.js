import React, { Fragment } from 'react';
import CanvasJSReact from '../../vendor/canvasjs/canvasjs.react';
import tasksFilterMethods from '../../shared/tasksFilterMethods';
import { filterTasksMode } from '../../shared/tasksConstantes';

const { CanvasJS, CanvasJSChart } = CanvasJSReact;

function TasksChart(
  {
    tasks = []
  }
) {
  const tasksLength = tasks.length;
  const pendingTasksQtd = tasksFilterMethods[filterTasksMode.PENDING](tasks).length;
  const doneTasksQtd = tasksFilterMethods[filterTasksMode.DONE](tasks).length;

  const pendingTasksPercentage = Math.round(pendingTasksQtd / tasksLength * 100);
  const doneTasksPercentage = Math.round(doneTasksQtd / tasksLength * 100);

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    title:{
      text: "Tasks por situação"
    },
    data: [{
      type: "pie",
      indexLabel: "{label}: {y}%",
      startAngle: -90,
      dataPoints: [
        { y: doneTasksPercentage, label: `concluídas (${doneTasksQtd})` },
        { y: pendingTasksPercentage, label: `pendentes (${pendingTasksQtd})` },
      ]
    }]
  };

  return (
    <Fragment>
      <CanvasJSChart options={options} />
    </Fragment>
  )
}

export default TasksChart;


