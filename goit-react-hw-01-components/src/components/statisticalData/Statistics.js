import React from "react";
import PropTypes from "prop-types";
import styles from "../statisticalData/Statistics.module.css";
import color from "../statisticalData/RandomColor";

const Statistics = ({ title = "", stats }) => {
  return (
    <section className={[styles.statistics]}>
      <h2 className={[styles.title]}>{title}</h2>
      <ul className={[styles.list]}>
        {stats.map(stats => (
          <li
            key={stats.id}
            style={{ backgroundColor: color() }}
            className={[styles.item]}
          >
            <span className="label">{stats.label}</span>
            <span className="percentage">{stats.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number
    })
  ).isRequired
};

export default Statistics;
