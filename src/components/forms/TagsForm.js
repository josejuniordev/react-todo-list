import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import TagClass from '../../classes/Tag';
import { Icon, Input, Tag, Tooltip } from 'antd';
import { delay } from '../../utility/Utils';

let inputRef = React.createRef();

function TagsForm(
  {
    tags = [],
    lockTheFirstTag = true,
    onTagClose = () => {},
    onInsertTag = () => {},
  }
) {

  const [isInputVisible, setIsInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(ev) {
    setInputValue(ev.target.value);
  }

  function handleInputConfirm() {
    const isTagAlreadyInserted = tags.find(tag => tag.name === inputValue);

    if (!isTagAlreadyInserted) {
      onInsertTag(inputValue);
    }

    setIsInputVisible(false);
    setInputValue('');
  }

  function handleNewTagClick() {
    setIsInputVisible(true);

    delay(200).then(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    });
  }

  return (
    <Fragment>
      {
        tags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          let isClosable = index !== 0;

          if (!lockTheFirstTag) {
            isClosable = true;
          }

          const tagElement = (
            <Tag
              key={tag.id}
              closable={isClosable}
              afterClose={() => onTagClose(tag.id)}
            >
              {isLongTag ? `${tag.name.slice(0, 20)}...` : tag.name}
            </Tag>
          );
          return isLongTag ? <Tooltip title={tag.name} key={tag.id}>{tagElement}</Tooltip> : tagElement;
        })
      }

      {isInputVisible && (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}

      {!isInputVisible && (
        <Tag
          onClick={handleNewTagClick}
          style={{ background: '#fff', borderStyle: 'dashed' }}
        >
          <Icon type="plus" /> Nova Tag
        </Tag>
      )}
    </Fragment>
  )
}

TagsForm.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.instanceOf(TagClass)).isRequired,
  lockTheFirstTag: PropTypes.bool,
  onTagClose: PropTypes.func,
  onInsertTag: PropTypes.func,
};

export default TagsForm;
