import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IProduct } from './../../interfaces/product';
import { IProfile } from './../../interfaces/profile';
import { IUserState } from './../../store/user/state';

const selectFeature = createFeatureSelector<IUserState>('user');

export const selectUser = createSelector(
  selectFeature,
  (state: IUserState): IProfile => {
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
  (state: IUserState): IProduct[] => {
    return state.cartData ?? [];
  },
);
