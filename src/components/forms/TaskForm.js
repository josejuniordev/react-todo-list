import React, {Fragment, useEffect, useState} from 'react';
import {
  Form,
  Row,
  Col,
  Select,
  Button,
  Input,
  Spin, Checkbox, Upload, Icon, DatePicker, InputNumber
} from 'antd';
import {delay, clearCharacters, onlyNumbers} from '../../utility/Utils';
import { connect } from 'react-redux';
import locale from 'antd/lib/date-picker/locale/pt_BR';
import moment from 'moment';

const Option = Select.Option;
const sortBy = require('sort-by');

const TaskForm = (
  {
    form,
    setTaskFormRef,
    resetTaskFormState,
    setResetTaskFormState,
    editableTask,
  }
) => {
  const [rules, setRules] = useState([]);
  const [preparingFormData, setPreparingFormData] = useState(false);

  const FormItem = Form.Item;
  const { getFieldDecorator } = form;

  useEffect(() => {
    setTaskFormRef(form);
    setResetTaskFormState(true);
  }, []);

  useEffect(() => {
    if (resetTaskFormState) {
      resetForm();
    }
  }, [resetTaskFormState]);

  useEffect(() => {
    if (editableTask) {
      delay(500).then(() => {
        prepareFormToEdit(editableTask);
      });
    }
  }, [editableTask]);

  function prepareFormToEdit(editableData) {
    setPreparingFormData(true);

    form.setFieldsValue({
      'description': editableData.description,
      'id': editableData.id,
      'time': moment(editableData.time),
      'durationTime': editableData.durationTime,
      'rememberTime': editableData.rememberTime,
    });

    delay(500).then(() => {
      setPreparingFormData(false);
    });
  }

  function resetForm() {
    form.resetFields();
    setResetTaskFormState(false);
  }

  return (
    <Spin spinning={preparingFormData}>
      <Form>
        {getFieldDecorator('id')(
          <Input type='hidden'/>
        )}
        <Row gutter={15}>
          <Col sm={12}>
            <FormItem label="Descrição">
              {getFieldDecorator('description', {
                initialValue: '',
                rules: [{required: true, message: 'Por favor informe uma descrição.'}]
              })(
                <Input/>
              )}
            </FormItem>
          </Col>
          <Col sm={12}>
            <FormItem label="Data">
              {getFieldDecorator('time', {
                rules: [{required: true, message: 'Por favor informe a data e hora da tarefa'}]
              })(
                <DatePicker
                  locale={locale}
                  showTime
                  placeholder="Selecione..."
                />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row gutter={15}>
          <Col sm={12}>
            <FormItem label="Duração da tarefa (em horas)">
              {getFieldDecorator('durationTime', {
                initialValue: 1,
                rules: [{required: true, message: 'Por favor informe uma duração'}]
              })(
                <InputNumber min={1} />
              )}
            </FormItem>
          </Col>
          <Col sm={12}>
            <FormItem label="Tempo para lembrete (em horas)">
              {getFieldDecorator('rememberTime', {
                initialValue: 0,
                rules: [{required: true, message: 'Por favor informe quantas horas antes você deseja ser lembrado'}]
              })(
                <InputNumber min={0} />
              )}
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Spin>
  );
};

export default Form.create()(TaskForm);
