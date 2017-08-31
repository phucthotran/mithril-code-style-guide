'use strict';

class MPG {

  initCustomerForm() {
    require.ensure([], (require) => {
      const m = require('mithril');

      require.ensure([], (require) => {
        const CustomerForm = require('components/form/CustomerForm').default;

        m.render(document.body, <CustomerForm />);
      });
    });
  }

}

(function () {
  window.MPG = new MPG();
}());
