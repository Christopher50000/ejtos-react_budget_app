import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // these were needed to do dropdown 

const CurrencyList = () => {
  const { currency1, dispatch, currency } = useContext(AppContext);

  const onChange = (e) => {
    let newCurrency = e.target.value;
    dispatch({
      type: 'CHG_CURRENCY',
      payload: newCurrency,
    });
  };

  return (
    <div className="dropdown d-flex align-items-stretch" style={{height: '57.5px'}}>
      <button
        className="btn btn-success dropdown-toggle"
        type="button"
        id="currencyDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Currency ({currency} {currency1[currency]})
      </button>
      <ul className="dropdown-menu" aria-labelledby="currencyDropdown">
        {Object.entries(currency1).map(([symbol, label]) => (
          <li key={symbol}>
            <button
              className="dropdown-item"
              type="button"
              value={symbol}
              onClick={onChange}
            >
              {symbol} {label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyList;