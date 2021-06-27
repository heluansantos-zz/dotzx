import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Iproduct } from './../../interfaces/product';
import { Iprofile } from './../../interfaces/profile';
import { IUserState } from './../../store/user/state';

const selectFeature = createFeatureSelector<IUserState>('user');

export const selectUser = createSelector(
  selectFeature,
  (state: IUserState): Iprofile => {
    return state.profile;
  },
);

export const selectCart = createSelector(
  selectFeature,
  (state: IUserState): boolean => {
    return state.showCart;
  },
);

export const selectCartData = createSelector(
  selectFeature,
  (state: IUserState): Iproduct[] => {
    return state.cartData ?? [];
  },
);
