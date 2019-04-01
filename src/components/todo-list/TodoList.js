import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import TodoListItem from './todo-list-item/TodoListItem';
import Task from '../../classes/Task';

function TodoList(
    {
        tasks,
        loading,
        onToggleCheckItemHandler,
        onDeleteItemHandler,
        onEditItemHandler,
    }
) {


    const renderTaskListItem = task => {
        return (
            <List.Item>
                <TodoListItem
                  task={task}
                  onToggleCheckItem={onToggleCheckItemHandler}
                  onDeleteItem={onDeleteItemHandler}
                  onEditItem={onEditItemHandler}
                />
            </List.Item>
        )
    };

    return (
      <Fragment>
        <List
          grid={{
            gutter: 16, sm: 1, md: 2, lg: 3, xl: 4
          }}
          dataSource={tasks}
          loading={loading}
          locale={{emptyText: 'Nenhuma task foi encontrada'}}
          renderItem={renderTaskListItem}/>
      </Fragment>
    );
}

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)).isRequired,
    loading: PropTypes.bool.isRequired,
    onToggleCheckItemHandler: PropTypes.func,
    onDeleteItemHandler: PropTypes.func,
    onEditItemHandler: PropTypes.func,
};

export default memo(TodoList);
