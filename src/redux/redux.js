import { combineReducers, legacy_createStore } from "redux";
import data from "../assets/data";

// 상태변경이 필요한 경우
// 1. 장바구니에 추가할 때
// 2. 장바구니에서 삭제할 때

// 리듀서에 필요한 값들만 넣어 전달
// 장바구니 추가 : options, quantity, id
// 장바구니 삭제 : id

export const addToCart = (options, quantity, id) => {
  return {
    type: "addToCart",
    payload: { options, quantity, id },
  };
};

export const deleteToCart = (id) => {
  return {
    type: "deleteToCart",
    payload: { id },
  };
};

// 리듀서는 관리할 상태의 종류의 갯수에 따라 만들어짐
// 카트의 상태변화
// 메뉴 표시
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "addToCart":
      return [...state, action.payload];
    case "deleteToCart":
      return state.filter((el) => action.payload.id !== el.id);
    default:
      return state;
  }
};

const menuReducer = (state = data.menu, action) => {
  return state;
};

const rootReducer = combineReducers({ cartReducer, menuReducer });

export const store = legacy_createStore(rootReducer);
