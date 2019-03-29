import React, { Fragment, useEffect, useState, memo } from 'react';
import PropTypes from 'prop-types';
import { filterTasksMode } from '../../../shared/tasksConstantes';
import TasksUtils from '../../../utility/TasksUtils';
import { Radio } from 'antd';
import { delay } from '../../../utility/Utils';
import Task from '../../../classes/Task';

function TodoListFilter(
  {
    tasks = [],
    onFilter = () => {},
  }
) {

  const [filterBy, setFilterBy] = useState(filterTasksMode.ALL);
  const [filterByTime, setFilterByTime] = useState(filterTasksMode.ALL);
  const [filteredData, setFilteredData] = useState(tasks);

  function filterData() {
    TasksUtils.filterBy(tasks, filterBy)
      .then(data => {
        onFilter(data);
        setFilteredData(data);
      });
  }

  function filterDataByTime() {
    TasksUtils.filterBy(filteredData, filterByTime)
      .then(data => {
        onFilter(data);
      });
  }

  function onFilterModeHandler(ev) {
    setFilterBy(ev.target.value);
    delay(300).then(() => {
      setFilterByTime(filterTasksMode.ALL);
    });
  }

  function onFilterByTimeHandler(ev) {
    setFilterByTime(ev.target.value);
  }

  useEffect(() => {
    filterData();
  }, [filterBy]);

  useEffect(() => {
    filterDataByTime();
  }, [filterByTime]);

  return (
    <Fragment>
      <div className="toolbar-area">
        <Radio.Group value={filterBy} onChange={onFilterModeHandler}>
          <Radio.Button value={filterTasksMode.ALL}>Todos</Radio.Button>
          <Radio.Button value={filterTasksMode.DONE}>Realizadas</Radio.Button>
          <Radio.Button value={filterTasksMode.PENDING}>Não realizadas</Radio.Button>
        </Radio.Group>
      </div>

      <div>
        <Radio.Group value={filterByTime} onChange={onFilterByTimeHandler}>
          <Radio.Button value={filterTasksMode.ALL}>Todo o período</Radio.Button>
          <Radio.Button value={filterTasksMode.TODAY}>Hoje</Radio.Button>
          <Radio.Button value={filterTasksMode.THIS_WEEK}>Essa semana</Radio.Button>
          <Radio.Button value={filterTasksMode.THIS_MONTH}>Esse mês</Radio.Button>
        </Radio.Group>
      </div>

    </Fragment>
  );
}

TodoListFilter.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)).isRequired,
  onFilter: PropTypes.func
};

export default memo(TodoListFilter);
