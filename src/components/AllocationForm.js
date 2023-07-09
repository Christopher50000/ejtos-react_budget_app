import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
  const { dispatch, remaining, currency } = useContext(AppContext);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [action, setAction] = useState('');

  const submitEvent = () => {
    if (cost > remaining) {
      alert("The value cannot exceed remaining funds " + currency + " " + remaining);
      setCost('');
      return;
    }

    const expense = {
      name: name,
      cost: parseInt(cost),
    };

    if (action === 'Reduce') {
      dispatch({
        type: 'RED_EXPENSE',
        payload: expense,
      });
    } else {
      dispatch({
        type: 'ADD_EXPENSE',
        payload: expense,
      });
    }
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="input-group">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Department
              </label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect01"
              onChange={(event) => setName(event.target.value)}
            >
              <option defaultValue>Choose...</option>
              <option value="Marketing" name="marketing">
                Marketing
              </option>
              <option value="Sales" name="sales">
                Sales
              </option>
              <option value="Finance" name="finance">
                Finance
              </option>
              <option value="HR" name="hr">
                HR
              </option>
              <option value="IT" name="it">
                IT
              </option>
              <option value="Admin" name="admin">
                Admin
              </option>
            </select>
          </div>
        </div>
        <div className="col">
          <div className="input-group">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect02">
                Allocation
              </label>
            </div>
            <select
              className="custom-select"
              id="inputGroupSelect02"
              onChange={(event) => setAction(event.target.value)}
            >
              <option defaultValue value="Add" name="Add">
                Add
              </option>
              <option value="Reduce" name="Reduce">
                Reduce
              </option>
            </select>
          </div>
        </div>
        <div className="col">
          <div className="input-group">
            <label className="input-group-text">{currency}</label>
            <input
              required
              type="number"
              className="form-control"
              id="cost"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" onClick={submitEvent}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;



// The elements are placed inside separate <div> elements with the Bootstrap class col to create a grid layout.
// The <div className="row"> wraps the row elements to ensure they appear in the same row.
// Each column is assigned the Bootstrap class col to distribute them evenly within the row.
// The Bootstrap classes input-group and input-group-prepend are applied to group related elements together.
// The <div className="input-group-append"> wraps the button element to keep it visually aligned with the input field.
// The className="form-control" is added to the input field to apply the Bootstrap styling.
// These updates should display the elements in a single row within the container.

