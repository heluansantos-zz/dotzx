import { ActionReducerMap } from '@ngrx/store';

import { userInitialState, IUserState, UserReducer } from './../store/user';

export interface IApplicationState {
  user: IUserState;
}

export const reducers: ActionReducerMap<IApplicationState> = {
  user: UserReducer.reducer,
};

export const initialValue: IApplicationState = {
  user: userInitialState,
};
