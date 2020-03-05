import React from "react";
import PropTypes from "prop-types";
import styles from "../historyTransactionItem/TransactionItem.module.css";

const TransactionItem = ({ id, type, amount, currency }) => {
  return (
    <tr className={[styles.table]} key={id}>
      <td className={[styles.type]}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
};
export default TransactionItem;
