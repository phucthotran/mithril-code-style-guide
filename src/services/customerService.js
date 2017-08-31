'use strict';

const globalConstants = require('libs/globalConstants');

import CustomerModel from 'models/CustomerModel';

class CustomerService {

  static get(id) {
    let customers = CustomerService.list();

    let matchCustomers = customers.filter((customer) => {
      return customer.id === id;
    });

    return matchCustomers && matchCustomers.length ? matchCustomers[0] : null;
  }

  static save(customerData) {
    let customers = CustomerService.list();
    let customer = new CustomerModel(customerData);

    customers.push(customer);

    localStorage.setItem(globalConstants.CUSTOMER_STORAGE_KEY, JSON.stringify(customers));
  }

  static list() {
    try {
      return JSON.parse(localStorage.getItem(globalConstants.CUSTOMER_STORAGE_KEY) || '[]');
    } catch(e) {
      return [];
    }
  }

}

export default CustomerService;
