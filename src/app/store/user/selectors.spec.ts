import { IProduct } from './../../interfaces/product';
import { IProfile } from './../../interfaces/profile';
import { UserSelectors } from './index';

import { IApplicationState } from '../application-state';

describe('UserSelectors', (): void => {
  let state: Partial<IApplicationState>;

  beforeEach((): void => {
    state = {
      user: {
        showCart: false,
        profile: {
          id: '1',
          createdAt: '',
          name: 'Teste',
          avatar: '',
          address: { street: '', zip_code: '', number: '' },
          points: 0,
          orders: [],
        },
        cartData: [
          {
            id: '',
            createdAt: '',
            price: 0,
            image: '',
            name: '',
            description: '',
          },
        ],
      },
    };
  });

  describe('selectUser', (): void => {
    it('should return selectUser', (): void => {
      const selectUser: IProfile = UserSelectors.selectUser(state);

      if (state.user === undefined) {
        return;
      }

      expect(selectUser).toEqual(state.user.profile);
    });
  });

  describe('selectCart', (): void => {
    it('should return selectCart', (): void => {
      const selectCart: boolean = UserSelectors.selectCart(state);

      if (state.user === undefined) {
        return;
      }

      expect(selectCart).toEqual(state.user.showCart);
    });
  });

  describe('selectCartData', (): void => {
    it('should return selectCartData', (): void => {
      const selectCartData: IProduct[] = UserSelectors.selectCartData(state);

      if (state.user === undefined) {
        return;
      }

      expect(selectCartData).toEqual(state.user.cartData);
    });
  });
});
