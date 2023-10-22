import DataBase from "../product";
import React, { Component } from 'react'

export default class price extends Component {
  render() {
    return (
      <div>
        price1={DataBase.price}
      </div>
    )
  }
}
