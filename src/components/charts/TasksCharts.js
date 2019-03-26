import React, { Fragment } from 'react';
import CanvasJSReact from '../../vendor/canvasjs/canvasjs.react';
import tasksFilterMethods from '../../shared/tasksFilterMethods';
import { filterTasksMode } from '../../shared/tasksConstantes';

const { CanvasJS, CanvasJSChart } = CanvasJSReact;

function TasksCharts(
  {
    tasks = []
  }
) {
  const tasksLength = tasks.length;
  const pendingTasksQtd = tasksFilterMethods[filterTasksMode.PENDING](tasks).length;
  const doneTasksQtd = tasksFilterMethods[filterTasksMode.DONE](tasks).length;

  console.log('pendingTasksQtd', pendingTasksQtd)
  console.log('doneTasksQtd', doneTasksQtd)

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    title:{
      text: "Quantidade de tasks por situação"
    },
    data: [{
      type: "pie",
      indexLabel: "{label}: {y}%",
      startAngle: -90,
      dataPoints: [
        { y: Math.round(pendingTasksQtd / tasksLength * 100), label: `pendentes (${pendingTasksQtd})` },
        { y: Math.round(doneTasksQtd / tasksLength * 100), label: `concluídas (${doneTasksQtd})` },
      ]
    }]
  };

  return (
    <Fragment>
      <CanvasJSChart options={options} />
    </Fragment>
  )
}

export default TasksCharts;
