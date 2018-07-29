import React, { Component } from 'react';
import { connect } from 'react-redux'


class Detail extends Component {
  render() {
    return (
        <div>And I am detail!</div>
    );
  }
}

const mapStateToProps = state => {
    return {
    }
  }
export default connect(mapStateToProps)(Detail)

