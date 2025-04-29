import { InputMask } from "@react-input/mask";

import "./payment.css";

function Payment(props) {
  const { isFormValid, payment, onChange } = props;

  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <div className="payment">
      <input
        aria-label="First Name"
        type="text"
        name="firstName"
        className="payment__input--first-name"
        placeholder="First Name"
        value={payment.firstName}
        onChange={handleChange}
      />
      <input
        aria-label="Last Name"
        type="text"
        name="lastName"
        className="payment__input--last-name"
        placeholder="Last Name"
        value={payment.lastName}
        onChange={handleChange}
      />
      <input
        aria-label="Address"
        type="text"
        name="address"
        className="payment__input--address"
        placeholder="Address"
        value={payment.address}
        onChange={handleChange}
      />

      <div className="payment__details-title">Payment Details</div>

      <InputMask
        aria-label="Card Number"
        type="tel"
        name="cardNumber"
        className="payment__input--card-number"
        placeholder="0000 0000 0000 0000"
        mask="9999 9999 9999 9999"
        replacement={{ 9: /\d/ }}
        value={payment.cardNumber}
        onChange={handleChange}
      />

      <InputMask
        aria-label="Card Expiration"
        type="tel"
        name="cardExpiration"
        className="payment__input--card-expiration"
        placeholder="MM / YY"
        mask="99 / 99"
        replacement={{ 9: /\d/ }}
        value={payment.cardExpiration}
        onChange={handleChange}
      />

      <InputMask
        aria-label="Card CVV"
        type="tel"
        name="cardCVV"
        className="payment__input--card-cvv"
        placeholder="Card CVV"
        mask="999"
        replacement={{ 9: /\d/ }}
        value={payment.cardCVV}
        onChange={handleChange}
      />

      <button className="payment__button" disabled={!isFormValid}>
        Get Tickets
      </button>
    </div>
  );
}

export default Payment;
