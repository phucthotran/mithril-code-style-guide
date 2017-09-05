'use strict';

class MPG {

  initCustomerForm() {
    require.ensure([], (require) => {
      const m = require('mithril');

      require.ensure([], (require) => {
        const CustomerForm = require('components/form/CustomerForm').default;

        m.mount(document.body, {
          view: () => {
            return m(CustomerForm);
          }
        });
      });
    });
  }

}

(function () {
  window.MPG = new MPG();
}());
