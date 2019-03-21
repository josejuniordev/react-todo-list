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

const Option = Select.Option;
const sortBy = require('sort-by');

const TaskForm = (
  {
    form,
    setTaskFormRef,
    indexers,
    fields,
    resetTaskFormState,
    setResetTaskFormState,
    editableField,
  }
) => {
  const [rules, setRules] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [selectedFieldType, setSelectedFieldType] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [loadingImage, setLoadingImage] = useState(false);
  const [isFieldChecked, setIsFieldChecked] = useState(false);
  const [preparingFormData, setPreparingFormData] = useState(false);

  const FormItem = Form.Item;
  const { getFieldDecorator } = form;

  if (editableField) {
    // filteredFields = filteredFields.filter(field => field.name !== editableField.name);
  }

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
    if (editableField) {
      delay(500).then(() => {
        prepareFormToEdit(editableField);
      });
    }
  }, [editableField]);

  function prepareFormToEdit(editableData) {
    setPreparingFormData(true);

    form.setFieldsValue({
      'type': editableData.type,
      'id': editableData.id,
    });
    //
    // onFieldTypeChangeHandler(editableData.type);
    //
    // if (editableData.type === fieldsTypes.IMAGE.id) {
    //   form.setFieldsValue({'url': editableData.url});
    //   setImagePreview(editableData.signedUrl || editableData.url);
    //   setPreparingFormData(false);
    //
    // } else if(editableData.type === fieldsTypes.INDEXER.id) {
    //   delay(200).then(() => {
    //     form.setFieldsValue(
    //       {
    //         'indexerTypeId': editableData.indexerTypeId || '',
    //         'label': editableData.label,
    //         'required': editableData.required,
    //         'rules': editableData.rules
    //       }
    //     );
    //
    //     setIsFieldChecked(editableData.required);
    //     setRules(editableData.rules);
    //
    //     const rulesFields = {};
    //
    //     editableData.rules.forEach(rule => {
    //       rulesFields[`reference-${rule.key}`] = rule.reference;
    //       rulesFields[`type-${rule.key}`] = rule.type;
    //       rulesFields[`value-${rule.key}`] = rule.value;
    //     });
    //
    //     form.setFieldsValue(rulesFields);
    //
    //     setPreparingFormData(false);
    //   });
    // }
  }

  function resetForm() {
    form.resetFields();
    setRules([]);
    setFileList([]);
    setSelectedFieldType('');
    setIsFieldChecked(false);
    setImagePreview(null);
    setLoadingImage(false);
    setResetTaskFormState(false);
  }

  function deleteFieldRule(key) {
    const rulesChanged = [...rules];
    const ruleFound = rulesChanged.findIndex((item) => item.key === key );

    if (ruleFound >= 0) {
      rulesChanged.splice(ruleFound, 1);
    }

    form.setFieldsValue({'rules': rulesChanged});
    setRules(rulesChanged);
  }

  function rulesFieldsChangeHandler(idx, attribute, value) {
    const editedRules = [...rules];

    switch (attribute) {
      case 'reference':
        editedRules[idx].setReference(value);
        break;
      case 'type':
        editedRules[idx].setType(value);
        break;
      case 'value':
        editedRules[idx].setValue(value);
        break;
    }

    setRules(editedRules);
    form.setFieldsValue({rules: editedRules});
  }

  function fieldLabelChangeHandler(event) {
    let value = event.target.value;
    const regex = new RegExp('[^a-zA-Z0-9_-]', 'g');
    const friendlyName = value.replace(regex, '-').toLocaleLowerCase();

    form.setFieldsValue({'name': friendlyName});
  }

  function validateFieldAlreadyInserted(value) {
    return new Promise((resolve) => {
      const thatFieldAlreadyExists = fields.find(field => field.label === value);

      if (
        editableField
        && thatFieldAlreadyExists
        && editableField.id === thatFieldAlreadyExists.id
      ) {
        resolve(false);
        return;
      }

      if (thatFieldAlreadyExists) {
        resolve(true);

      } else {
        resolve(false);
      }
    })
  }


  function onFieldTypeChangeHandler(value) {
    setSelectedFieldType(value);
  }

  function removeFileFromList() {
    setFileList([]);
    form.setFieldsValue({ 'file': undefined });
    setImagePreview(null);
  }

  // function renderRulesTypesOptions() {
  //   return Object.values(rulesTypes)
  //     .map(rule => {
  //       if (rule.enabled) {
  //         return <Option key={rule.id} value={rule.id}>{rule.label}</Option>
  //       }
  //     });
  // }

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
