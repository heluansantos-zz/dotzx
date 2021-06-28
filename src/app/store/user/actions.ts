import { createAction, props } from '@ngrx/store';
import { IProduct } from './../../interfaces/product';

import { IProfile } from './../../interfaces/profile';

export const upsertProfile = createAction(
  '[user] - Upsert Profile',
  props<{ profile: IProfile }>(),
);

export const setCartData = createAction(
  '[user] - Set Cart data',
  props<{ cartData: IProduct }>(),
);

export const setShowCart = createAction(
  '[user] - Set show Cart',
  props<{ showCart: boolean }>(),
);
