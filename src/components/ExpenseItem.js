import React, { useContext } from "react";
import { TiDelete, TiMinus, TiPlus } from "react-icons/ti";
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: "RED_EXPENSE",
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>£{props.cost}</td>
      <td>
        <TiPlus
          size="1.5em"
          style={{
            border: "transparent",
            background: "#00a000",
            borderRadius: "50%",
            color: "white",
          }}
          onClick={(event) => increaseAllocation(props.name)}
        ></TiPlus>
      </td>
      <td>
        <TiMinus
          size="1.5em"
          style={{
            background: "#a00000",
            borderRadius: "50%",
            color: "white",
          }}
          onClick={(event) => decreaseAllocation(props.name)}
        ></TiMinus>
      </td>
      <td>
        <TiDelete
          size="2em"
          color="red"
          onClick={handleDeleteExpense}
        ></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;
