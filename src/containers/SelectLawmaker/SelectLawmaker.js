import React, {Component} from 'react';
import Contact from '../Contact/Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions/';
import {selectNewLawmaker} from '../../helper/helper'
import './SelectLawmaker.css'
import { withRouter} from 'react-router-dom'


export class SelectLawmaker extends Component {
  constructor() {
    super();
  }


getSelect = () => {
  const toMap = this.props.lawmakers.lawmakers || []
  return Object.keys(toMap).map((dataPoint, index) => {
    return (
    <option key = {index} value = {toMap[dataPoint].id}>
      {`${toMap[dataPoint].contact.firstName} ${toMap[dataPoint].contact.lastName}`}
    </option>
      
    )
  })
}

  selectLawmaker = async(event, id) => {
  const lawmakerData = await selectNewLawmaker(id);
  console.log(lawmakerData)
  this.props.lawmakerSelect(lawmakerData);
  this.props.history.push(`/lawmakers/${id}`);
}

  render (){
  return (
    <div className="select">
      <select onChange = {(e) => this.selectLawmaker(e, e.target.value)}>
      <option> Select a lawmaker </option>
      {this.getSelect()}
        
      </select>
      
    </div>
  );
}
};

export const mapDispatchToProps = dispatch => ({
  lawmakerSelect: lawmaker => dispatch(actions.setSelectLawmaker(lawmaker))

});

export const mapStateToProps = store => {
  return {
    lawmakers: store.lawmakers
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SelectLawmaker))