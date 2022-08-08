import { configureStore } from "@reduxjs/toolkit";

const initalState = {};

function reducer(state = initalState, action: any) {
  return state;
}

export const store = configureStore({ reducer });
