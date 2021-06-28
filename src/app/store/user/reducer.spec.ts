import { Action } from '@ngrx/store';

import { IProduct } from './../../interfaces/product';
import { IProfile } from './../../interfaces/profile';

import {
  UserActions,
  userInitialState,
  UserReducer,
  IUserState,
} from './../user';

describe('UserReducer', (): void => {
  const state: IUserState = userInitialState;

  it('should reducer return the default state', (): void => {
    const action: Action = {
      type: 'Unknown',
    };

    expect(UserReducer.reducer(state, action)).toBe(state);
  });

  describe('upsertProfile', (): void => {
    it('should change state of the user profile', (): void => {
      const mockedProfile: IProfile = {
        id: '1',
        createdAt: '',
        name: 'Teste',
        avatar: '',
        address: { street: '', zip_code: '', number: '' },
        points: 0,
        orders: [],
      };
      const action: Action = UserActions.upsertProfile({
        profile: mockedProfile,
      });
      const reducer: IUserState = UserReducer.reducer(state, action);

      expect(reducer.profile).toEqual(mockedProfile);
    });
  });

  describe('setCartData', (): void => {
    it('should change state of the user cartData', (): void => {
      const mockedCartData: IProduct = {
        id: '',
        createdAt: '',
        price: 0,
        image: '',
        name: '',
        description: '',
      };

      const action: Action = UserActions.setCartData({
        cartData: mockedCartData,
      });

      const reducer: IUserState = UserReducer.reducer(state, action);

      expect(reducer.cartData).toEqual([mockedCartData]);
    });
  });

  describe('setShowCart', (): void => {
    it('should change state of the user showCart', (): void => {
      const mockedShowCart: boolean = false;

      const action: Action = UserActions.setShowCart({
        showCart: mockedShowCart,
      });

      const reducer: IUserState = UserReducer.reducer(state, action);

      expect(reducer.showCart).toEqual(mockedShowCart);
    });
  });
});
