'use strict';

class CustomerModel {

  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.id = ++CustomerModel.count;
  }

}

CustomerModel.count = 1;

export default CustomerModel;
