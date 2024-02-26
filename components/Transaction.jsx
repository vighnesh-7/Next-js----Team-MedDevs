import React from 'react';

const PaymentComponent = () => {
  return (
      <body>
        <form>
          <script
            src="https://checkout.razorpay.com/v1/payment-button.js"
            data-payment_button_id="pl_Neb519ebFYMSx2"
            async
          ></script>
        </form>
      </body>
  );
};

export default PaymentComponent;
