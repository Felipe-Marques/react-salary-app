// const numberFormatter = Intl.NumberFormat('pt-BR');

const moneyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

/* function formatNumber(value) {
  return numberFormatter.format(value);
} */

const formatMoney = (value) => {
  return moneyFormatter.format(value);
};

const formatPercentage = (value) => {
  return `${value.toFixed(2).replace('.', ',')}%`;
};
export { formatMoney, formatPercentage };
