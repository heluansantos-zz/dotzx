import { Action, createReducer, on } from '@ngrx/store';

import * as UserActions from './../../store/user/actions';
import { IUserState, userInitialState } from './../../store/user/state';
import { IProfile } from './../../interfaces/profile';
import { IProduct } from './../../interfaces/product';

const userReducer = createReducer(
  userInitialState,
  on(
    UserActions.upsertProfile,
    (state: IUserState, { profile }: { profile: IProfile }): IUserState => {
      return { ...state, profile };
    },
  ),
  on(
    UserActions.setCartData,
    (state: IUserState, { cartData }: { cartData: IProduct }): IUserState => {
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
