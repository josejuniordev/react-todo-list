import React, { Fragment } from 'react';
import CanvasJSReact from '../../vendor/canvasjs/canvasjs.react';
import { taskStatus } from '../../shared/tasksConstantes';

const { CanvasJSChart } = CanvasJSReact;

function TasksChart(
  {
    tasks = [],
    tags = []
  }
) {
  const tagsData = tags.map(tag => {
    const label = tag.name;
    let y = 0;

    tasks.forEach((task) => {
      const tagFound = task.tags.includes(tag.id);

      if (tagFound && task.status === taskStatus.DONE) {
        y = y + 1;
      }
    });

    return {label, y}
  });

  const options = {
    title: {
      text: "Tasks resolvidas, por tag"
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
        dataPoints: tagsData
      }
    ]
  };

  return (
    <Fragment>
      <CanvasJSChart options={options} />
    </Fragment>
  )
}

export default TasksChart;
