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
    }
) {

    const sortedTasks = tasks.sort(sortBy('createdAt'));

    const renderTaskListItem = task => {
        return (
            <List.Item>
                <TodoListItem task={task}/>
            </List.Item>
        )
    };

    return (
        <List
            grid={{
                gutter: 16, column: 4,
            }}
            dataSource={sortedTasks}
            loading={loading}
            locale={{emptyText: 'Nenhuma task foi encontrada'}}
            renderItem={renderTaskListItem}/>
    );
}

TodoList.propTypes = {
    deletingForms: PropTypes.arrayOf(PropTypes.number).isRequired,
    tasks: PropTypes.arrayOf(PropTypes.instanceOf(Task)).isRequired,
    loading: PropTypes.bool.isRequired
};

export default TodoList;
