import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'antd';
import Task from '../../../classes/Task';
import { taskStatus } from '../../../shared/tasksConstantes';
import LinesEllipsis from 'react-lines-ellipsis';
import moment from 'moment';

export function TodoListItem (
  {
    task,
    onToggleCheckItem = () => {},
    onDeleteItem = () => {},
    onEditItem = () => {},
  }
) {
  const date = moment(task.time);
  const buttonIconType = task.status === taskStatus.PENDING ? 'check' : 'stop';
  const buttonTitle = task.status === taskStatus.PENDING ? 'marcar como Feito!' : 'marcar como Pendente!';

  return (
    <Card
      className={[
        'task-card',
        task.status === taskStatus.DONE && '--is-done',
        (task.isLate() && task.status !== taskStatus.DONE) && '--is-late'
      ]}
      key={task.id}
      title={date.format("DD/MM/YYYY")}
      actions={[
        <span title={buttonTitle}>
          <Icon className='icon-state' type={buttonIconType} onClick={() => onToggleCheckItem(task.id)} />
        </span>,
        <span title="editar">
          <Icon className='icon-edit' type="edit" onClick={() => onEditItem(task.id)} />
        </span>,
        <span title="excluir">
          <Icon className='icon-delete' type="delete" onClick={() => onDeleteItem(task.id)} />
        </span>
      ]}
      style={{ width: '100%', marginBottom: 15 }}
    >
      <LinesEllipsis
        style={{minHeight: '70px'}}
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

export default memo(TodoListItem);
