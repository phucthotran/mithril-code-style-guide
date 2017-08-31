'use strict';

import CustomerService from 'services/customerService';

let viewModel = {
  name: '',
  age: '',
  list: [],
  getInfo() {
    return `Name: ${viewModel.name}, age: ${viewModel.age}`;
  },
  loadList() { debugger;
    viewModel.list = CustomerService.list();
  },
  onSave() { debugger;
    CustomerService.save({
      name: viewModel.name,
      age: viewModel.age
    });

    viewModel.loadList();
  }
};

module.exports = viewModel;
