import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new Adapter() })

describe('<App />', () => {
  	const wrapper = shallow(<App />)

//  it('should render App', () => {
//    const wrapper = shallow(<App />, {context: {}, disableLifecycleMethods: false})
//    console.log(wrapper.debug())
//  })

  it('should contain 1 p element', () => {
    expect(wrapper.find('p').length).toBe(1)
  })

  it('should ul contain 3 li element', () => {
	expect(wrapper.find('ul').children().length).toBe(3)
  })

  it('ul should has class tyler', () => {
	expect(wrapper.find('ul').hasClass('tyler')).toBe(true)
  })  

  it('h1 text should be "Welcome to React"', () => {
	expect(wrapper.find('h1').text()).toBe('Welcome to React')
  })

})
