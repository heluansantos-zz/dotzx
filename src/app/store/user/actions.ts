import { createAction, props } from '@ngrx/store';
import { Iproduct } from './../../interfaces/product';
import { Iprofile } from './../../interfaces/profile';

export const upsertProfile = createAction(
  '[user] - Upsert Profile',
  props<{ profile: Iprofile }>(),
);

export const setCartData = createAction(
  '[user] - Set Cart data',
  props<{ cartData: Iproduct }>(),
);

export const setShowCart = createAction(
  '[user] - Set show Cart',
  props<{ showCart: boolean }>(),
);
