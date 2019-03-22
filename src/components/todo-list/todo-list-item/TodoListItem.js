import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Icon, List } from 'antd';
import Task from '../../../classes/Task';
import { taskStatus } from '../../../shared/tasksConstantes';
import LinesEllipsis from 'react-lines-ellipsis';

export function TodoListItem (
  {
    task,
    onToggleCheckItem = () => {},
    onDeleteItem = () => {},
    onEditItem = () => {},
  }
) {
  const date = new Date(task.createdAt);
  const buttonIconType = task.status === taskStatus.PENDING ? 'check' : 'stop';
  const buttonTitle = task.status === taskStatus.PENDING ? 'marcar como Feito!' : 'marcar como Pendente!';
  return (
    <Card
      className={task.status === taskStatus.DONE && '--is-done'}
      key={task.id}
      title={date.toLocaleDateString()}
      actions={[
        <span title={buttonTitle}>
          <Icon type={buttonIconType} onClick={() => onToggleCheckItem(task.id)} />
        </span>,
        <span title="editar">
          <Icon type="edit" onClick={() => onEditItem(task.id)} />
        </span>,
        <span title="excluir">
          <Icon type="delete" onClick={() => onDeleteItem(task.id)} />
        </span>
      ]}
      style={{ width: '100%', marginBottom: 15 }}
    >
      <LinesEllipsis
        text={task.description}
        maxLine={3}
      />
    </Card>
  );
}

TodoListItem.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  onToggleCheckItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
};

export default TodoListItem;
