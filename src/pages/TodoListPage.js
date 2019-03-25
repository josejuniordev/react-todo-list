import React, { Fragment, lazy, Suspense, useState } from 'react';
import AppHeader from "../components/generics/AppHeader";
import { connect } from "react-redux";
import { deleteTaskAction, insertNewTaskAction, toggleTaskStatusAction, updateTaskAction } from '../ducks/tasks';
import TodoList from '../components/todo-list/TodoList';
import { Button, Modal, Spin } from 'antd';
import TodoListFilter from '../components/todo-list/todo-list-filter/TodoListFilter';

const TaskForm = lazy(() => import('../components/forms/TaskForm'));

function TodoListPage(
  {
    tasks,
    tags,
    callToggleTaskStatus,
    callDeleteTask,
    callInsertNewTask,
    callUpdateTask,
  }
) {
  const sortBy = require('sort-by');
  const sorteredTasks = tasks.data.sort(sortBy('time'));

  const [taskFormRef, setTaskFormRef] = useState(false);
  const [resetTaskFormState, setResetTaskFormState] = useState(false);
  const [showTaskFormModal, setShowTaskFormModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(false);
  const [editableTask, setEditableTask] = useState(false);
  const [filteredTasks, setFilteredTasks] = useState(sorteredTasks);

  function toggleCheckItemHandler(itemId) {
    callToggleTaskStatus(itemId);
  }

  function deleteItemHandler(itemId) {
    callDeleteTask(itemId);
  }

  function editItemHandler(itemId) {
    setTaskToEdit(itemId);
    setEditableTask(tasks.data.find(task => task.id === itemId));
    setShowTaskFormModal(true);
  }

  function addNewTaskButtonClickHandler() {
    clearEditableData();
    setShowTaskFormModal(true);
  }

  function onCancelTaskForm() {
    setResetTaskFormState(true);
    clearEditableData();
    setShowTaskFormModal(false);
  }

  function clearEditableData() {
    setTaskToEdit(false);
    setEditableTask(false);
  }

  function saveTaskForm() {
    if (taskFormRef) {
      taskFormRef.validateFields((err, values) => {
        if (!err) {
          values.time = values.time.toISOString();

          if (taskToEdit) {
            callUpdateTask(values);

          } else {
            callInsertNewTask(values);
          }

          onCancelTaskForm();
        }
      });
    }
  }

  return (
    <Fragment>
      <AppHeader title="Todo list"/>
      <div className="toolbar-area text-align-right">
        <Button onClick={addNewTaskButtonClickHandler} type="primary" icon="plus">Nova task</Button>
      </div>
      <Modal
        visible={showTaskFormModal}
        onCancel={onCancelTaskForm}
        title={false ? 'Editando o item' : 'Novo item'}
        style={{top: 30}}
        bodyStyle={{maxHeight: '65vh', overflow: 'auto'}}
        footer={[
          <Button key="back" onClick={onCancelTaskForm}>Cancelar</Button>,
          <Button key="submit" type="primary" onClick={saveTaskForm}>Salvar</Button>,
        ]}
      >
        <Suspense
          fallback={<Spin />}
        >
          <TaskForm
            tags={tags.data}
            editableTask={editableTask && {...editableTask}}
            setTaskFormRef={setTaskFormRef}
            resetTaskFormState={resetTaskFormState}
            setResetTaskFormState={setResetTaskFormState}
          />
        </Suspense>
      </Modal>

      <div className="toolbar-area">
        <TodoListFilter
          tasks={sorteredTasks}
          onFilter={setFilteredTasks}
        />
      </div>

      <TodoList
        tasks={filteredTasks}
        loading={tasks.loading.fetch}
        onToggleCheckItemHandler={toggleCheckItemHandler}
        onDeleteItemHandler={deleteItemHandler}
        onEditItemHandler={editItemHandler}
      />
    </Fragment>
  )
}

export default connect(
  ({tasks, tags}) => {
    return {tasks, tags}
  },
  (dispatch => {
    return {
      callInsertNewTask(values) {
        dispatch(insertNewTaskAction(values));
      },
      callUpdateTask(values) {
        dispatch(updateTaskAction(values));
      },
      callToggleTaskStatus(taskId) {
        dispatch(toggleTaskStatusAction(taskId));
      },
      callDeleteTask(taskId) {
        dispatch(deleteTaskAction(taskId));
      }
    }
  })
)(TodoListPage);
