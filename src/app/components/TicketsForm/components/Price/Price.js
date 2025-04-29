const formatUsd = (cents) => {
  const dollars = cents / 100;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(dollars);
};

function Price(props) {
  const { amount } = props;

  return <span>{formatUsd(amount)}</span>;
}

export default Price;
