import { Action, ActionReducer } from '@ngrx/store';

import { IApplicationState, initialValue } from './../store/application-state';

export function metaReducer(reducer: ActionReducer<IApplicationState>): any {
  return (state: IApplicationState, action: Action): any => {
    state = load() || initialValue;

    const result = reducer(state, action);

    save(result);

    return result;
  };
}

function load(): IApplicationState | null {
  const data = localStorage.getItem('state');
  if (data === null) {
    return null;
  }

  return JSON.parse(data);
}

function save(data: IApplicationState): void {
  localStorage.setItem('state', JSON.stringify(data));
}
