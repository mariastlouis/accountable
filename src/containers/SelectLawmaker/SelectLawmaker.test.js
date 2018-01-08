import { SelectLawmaker, mapStateToProps, mapDispatchToProps } from './SelectLawmaker.js';
import React from 'react';
import { shallow } from 'enzyme';
import { mockStoreData } from '../../mockData/mockStoreData.js';
import { mockLawmakerArray } from '../../mockData/mockLawmakerArray.js';

describe('select lawmaker component' , () => {
  let renderedComponent;
  let mockProps

  beforeEach(() => {
    mockProps = mockStoreData;
    renderedComponent = shallow(<SelectLawmaker />)
  });
});

describe('mapstateToPropsTests', () => {
  it('should pull lawmakers from the store', () => {
    const mockStore = {
      lawmakers: mockLawmakerArray 
    }
    const result = mapStateToProps(mockStore);
    expect(result.lawmakers).toEqual(mockStore.lawmakers);
  })

});

describe('mapDispatchToProps tests', () => {
    let mockDispatch;
    let result;

    beforeEach(() => {
      mockDispatch = jest.fn();
      result = mapDispatchToProps(mockDispatch);
    });

    it('should call dispatch when lawmakerSelect is called', () => {
      result.lawmakerSelect();
      expect(mockDispatch).toHaveBeenCalled();
    })

});

