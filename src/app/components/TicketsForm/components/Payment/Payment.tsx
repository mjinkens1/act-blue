import { InputMask } from "@react-input/mask";
import { CreditCard } from "lucide-react";

import "./payment.css";

import { PaymentDetailsT } from "../../../../types";

type PropsT = {
  isFormValid: boolean;
  payment: PaymentDetailsT;
  onChange: (name: string, value: string) => void;
};

function Payment(props: PropsT) {
  const { isFormValid, payment, onChange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <fieldset className="payment">
      <legend className="sr-only">Payment Details</legend>

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

      <div className="payment__card-number-container">
        <InputMask
          aria-label="Card Number"
          type="text"
          name="cardNumber"
          className="payment__input--card-number"
          placeholder="0000 0000 0000 0000"
          mask="____ ____ ____ ____"
          replacement={{ _: /\d/ }}
          value={payment.cardNumber}
          onChange={handleChange}
        />

        <CreditCard className="payment__card-number-container-icon" />
      </div>

      <InputMask
        aria-label="Card Expiration"
        type="tel"
        name="cardExpiration"
        className="payment__input--card-expiration"
        placeholder="MM / YY"
        mask="__ / __"
        replacement={{ _: /\d/ }}
        value={payment.cardExpiration}
        onChange={handleChange}
      />

      <InputMask
        aria-label="Card CVV"
        type="tel"
        name="cardCVV"
        className="payment__input--card-cvv"
        placeholder="CVV"
        mask="___"
        replacement={{ _: /\d/ }}
        value={payment.cardCVV}
        onChange={handleChange}
      />

      <button className="payment__button" disabled={!isFormValid}>
        Get Tickets
      </button>
    </fieldset>
  );
}

export default Payment;
