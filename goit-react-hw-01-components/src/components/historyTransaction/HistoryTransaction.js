import React from "react";
// import styles from "../historyTransactionItem/HistoryTransaction.module.css";
import PropTypes from "prop-types";
import TransactionItem from '../historyTransactionItem/TransactionItem'
import styles from '../historyTransaction/HistoryTransaction.module.css'
const HistoryTransaction = ({ transaction }) => {
  console.log("transactions", transaction);
  return (
    <table className={[styles.transactionTable]}>
      <thead className={[styles.head]}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transaction.map(transaction => {
          const {id,amount,currency,type}=transaction;
          return(
            <TransactionItem 
            key={id}
            amount={amount}
            currency={currency}
            type={type}
           />
            )
          })}
      </tbody>
    </table>
  );
};
HistoryTransaction.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.object).isRequired
};

export default HistoryTransaction;
