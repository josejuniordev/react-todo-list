import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Icon, List } from 'antd';
import Task from '../../../classes/Task';
import { taskStatus } from '../../../shared/tasksConstantes';

export function TodoListItem ({ callDeleteTask, deleting, task }) {
  const date = new Date(task.createdAt);
  const buttonIconType = task.status === taskStatus.PENDING ? 'check' : 'stop';
  const buttonTitle = task.status === taskStatus.PENDING ? 'marcar como Feito!' : 'marcar como Pendente!';
  return (
    <Card
      className={task.status === }
      key={task.id}
      title={date.toLocaleDateString()}
      actions={[
        <span title={buttonTitle}>
          <Icon type={buttonIconType} onClick={() => {}} />
        </span>,
        <span title="editar">
          <Icon type="edit" onClick={() => {}} />
        </span>,
        <span title="excluir">
          <Icon type="delete" onClick={() => {}} />
        </span>
      ]}
      style={{ width: '100%', marginBottom: 15 }}
    >
      { task.description }
    </Card>
  );
}

TodoListItem.propTypes = {
  callDeleteTask: PropTypes.func.isRequired,
  task: PropTypes.instanceOf(Task).isRequired
};

export default TodoListItem;
