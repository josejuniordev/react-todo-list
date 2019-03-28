import React from 'react';
import { mount, shallow } from 'enzyme';
import TagsForm from './TagsForm';
import tagsMockedData from '../../mock/TagsMock';
import { Tag } from 'antd';

describe('TagsForm component', () => {
  const rendered = shallow(<TagsForm tags={tagsMockedData} />);

  test('should render correctly', () => {
    expect(rendered).toMatchSnapshot();
  });

  test('renders the correct number of tags', () => {
    const tags = rendered.find(Tag);
    const tagsLengthPlusOneStatic = tagsMockedData.length + 1;

    expect(tags.length).toBe(tagsLengthPlusOneStatic);
  });

});
