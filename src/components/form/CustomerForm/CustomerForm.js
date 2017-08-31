'use strict';

const m = require('mithril');

const config = require('configs/config');

let viewModel = require('./viewModel');

class CustomerForm {

  constructor() {
    this.handleName = this.handleName.bind(this);
    this.handleAge = this.handleAge.bind(this);
  }

  oninit() {
    viewModel.loadList();
  }

  handleName(e) {
    viewModel.name = e.target.value;
  }

  handleAge(e) {
    viewModel.age = e.target.value;
  }

  renderCustomerList() { debugger;
    if (viewModel.list && viewModel.list.length) {
      return viewModel.list.map((customer) => {
        return (
          <li key={customer.id}>
            <span>Name: {customer.name}, Age: {customer.age}</span>
          </li>
        );
      });
    }
  }

  view() {
    return (
      <section>
        <h1>{config.customerForm.formTitle}</h1>
        <input
          type="text"
          name="name"
          value={viewModel.name}
          onchange={this.handleName}
        />
        <input
          type="text"
          name="age"
          value={viewModel.age}
          onchange={this.handleAge}
        />
        <button onclick={viewModel.onSave}>Save</button>
        <p>Info: {viewModel.getInfo()}</p>
        <ul>
          {this.renderCustomerList()}
        </ul>
      </section>
    )
  }

}

export default CustomerForm;
