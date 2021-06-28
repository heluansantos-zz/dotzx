import { IProduct } from './../../interfaces/product';
import { IProfile } from './../../interfaces/profile';

export interface IUserState {
  profile: IProfile;
  showCart: boolean;
  cartData: IProduct[];
}

export const userInitialState: IUserState = {
  profile: {
    id: '',
    createdAt: '',
    name: '',
    avatar: '',
    address: { street: '', number: '', zip_code: '' },
    points: 0,
    orders: [],
  },
  showCart: false,
  cartData: [],
};
