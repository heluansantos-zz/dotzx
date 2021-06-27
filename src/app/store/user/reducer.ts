import { Action, createReducer, on } from '@ngrx/store';

import * as UserActions from './../../store/user/actions';
import { IUserState, userInitialState } from './../../store/user/state';
import { Iprofile } from './../../interfaces/profile';
import { Iproduct } from './../../interfaces/product';

const userReducer = createReducer(
  userInitialState,
  on(
    UserActions.upsertProfile,
    (state: IUserState, { profile }: { profile: Iprofile }): IUserState => {
      return { ...state, profile };
    },
  ),
  on(
    UserActions.setCartData,
    (state: IUserState, { cartData }: { cartData: Iproduct }): IUserState => {
      if (!state.cartData) {
        state.cartData = [];
      }

      state.cartData.push(cartData);

      return { ...state };
    },
  ),
  on(
    UserActions.setShowCart,
    (state: IUserState, { showCart }: { showCart: boolean }): IUserState => {
      return { ...state, showCart };
    },
  ),
);

export function reducer(
  state: IUserState | undefined,
  action: Action,
): IUserState {
  return userReducer(state, action);
}
