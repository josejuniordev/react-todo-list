import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import TodoListItem from './todo-list-item/TodoListItem';
import Task from '../../classes/Task';

const sortBy = require('sort-by');

function TodoList(
    {
        deletingForms,
        tasks,
        loading,
        onToggleCheckItemHandler,
        onDeleteItemHandler,
        onEditItemHandler,
    }
) {

    const sortedTasks = tasks.sort(sortBy('-createdAt'));

    console.log('sortedTasks', sortedTasks)

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
        <List
            grid={{
                gutter: 16, sm: 1, md: 2, lg: 3, xl: 4
            }}
            dataSource={sortedTasks}
            loading={loading}
            locale={{emptyText: 'Nenhuma task foi encontrada'}}
            renderItem={renderTaskListItem}/>
    );
}

TodoList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)).isRequired,
    loading: PropTypes.bool.isRequired,
    onToggleCheckItemHandler: PropTypes.func,
    onDeleteItemHandler: PropTypes.func,
    onEditItemHandler: PropTypes.func,
};

export default TodoList;
