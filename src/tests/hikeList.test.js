import React from 'react';
import HikeList from '../components/hikeList.js';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const userHikes = ["hike1", "hike2"]

test('renders the HikeList correctly', () => {
  const json = renderer
                  .create(<HikeList userHikes={userHikes}/>)
                  .toJSON();
  expect(json).toMatchSnapshot();
})


test('the greeting should display if it is a prop', () => {
  const wrapper = shallow(<HikeList userHikes={userHikes} greeting="hello"/>);
  console.log(wrapper)
  const hikeListShallow = wrapper.find('.hikeList')
  expect(hikeListShallow.find('h2')).toHaveLength(1)
})
