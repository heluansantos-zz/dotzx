import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ProfileComponent } from './profile.component';
import {
  IApplicationState,
  initialValue,
} from '../../store/application-state';

describe('ProfileComponent', () => {
  let profileComponent: ProfileComponent;
  let mockStore: MockStore<IApplicationState>;

  const initialState: IApplicationState = initialValue;

  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [ProfileComponent, provideMockStore({ initialState })],
    });

    profileComponent = TestBed.inject(ProfileComponent);
    mockStore = TestBed.inject(MockStore);

    spyOn(mockStore, 'dispatch').and.callFake((): void => {});
  });

  it('should initialize ProfileComponent', (): void => {
    expect(profileComponent).toBeDefined();
    expect(mockStore).toBeDefined();
  });
});
