import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyList =() =>
{
    const { currency1 ,dispatch} = useContext(AppContext);

    const onChange= (e)=>
    {
        let NewCurrency=e.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: NewCurrency
          });
    }

    
        return (
            <div> Currency (
            <select onChange={onChange}>
            {currency1.map((currency) => {
              const symbol = Object.keys(currency)[0];
              const label = Object.values(currency)[0];
              console.log(symbol);
              console.log(label);
              return (
                
                <option key={label} value={symbol}>
                  {symbol} {label}
                </option>
              );
            })}
          </select>
            )</div>
        );
      };
      
        
        export default CurrencyList;