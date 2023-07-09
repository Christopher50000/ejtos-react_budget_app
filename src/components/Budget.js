import React, { useRef, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch, remaining,expenses,currency } = useContext(AppContext);
  const inputRef = useRef(null);
  const totalEXP = expenses.reduce((sum, expense) => sum + expense.cost, 0);
  
  const handleBudgetChange = (e) => {
    let updatedBudget = parseInt(e.target.value);

 
    if (updatedBudget > 20000) {
      Exceed();
      updatedBudget = 20000;
    }
    if (updatedBudget<totalEXP)
    {
      Under();
      updatedBudget=totalEXP;
    }
    dispatch({
      type: 'SET_BUDGET',
      payload: updatedBudget
    });
  };

  function Exceed() {
    alert("The value cannot exceed remaining funds: £" + remaining);
  }
  function Under(){
    alert("You cannot reduce the budget value lower than your spending");

  }

  const incrementBudget = () => {
    if (inputRef.current !== document.activeElement) {
      const updatedBudget = budget + 10;
      if (updatedBudget <= 20000) {
        dispatch({
          type: 'SET_BUDGET',
          payload: updatedBudget
        });
      }
      else {
        Exceed();
      }
    }
  };

  const decrementBudget = () => {
    if (inputRef.current !== document.activeElement) {
      const updatedBudget = budget - 10;
      dispatch({
        type: 'SET_BUDGET',
        payload: updatedBudget
      });
    }
  };

  const handleInputClick = (e) => {
    if (e.target !== inputRef.current) {
      e.preventDefault();
    }
  };

  const handleInputFocus = () => {
    inputRef.current.defaultValue = budget;
  };

  return (
    <div className='alert alert-secondary'>
      <span id='Budget'>
        Budget: {currency}
        <input
          ref={inputRef}
          type='number'
          max='20000'
          step='10'
          value={budget}
          onChange={handleBudgetChange}
          onClick={handleInputClick}
          onMouseUp={incrementBudget}
          onMouseDown={decrementBudget}
          onFocus={handleInputFocus}
        />
      </span>
    </div>
  );
};

export default Budget;
// Do Task 3 tomorrow 