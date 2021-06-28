import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { IProfile } from './interfaces/profile';
import { IApplicationState, initialValue } from './store/application-state';
import { UserActions } from './store/user';

describe('AppComponent', () => {
  let appComponent: AppComponent;
  let mockStore: MockStore<IApplicationState>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let appServiceSpy: jasmine.SpyObj<AppService>;

  const initialState: IApplicationState = initialValue;
  const mockedProfile: IProfile = {
    id: '1',
    createdAt: '',
    name: 'Teste',
    avatar: '',
    address: { street: '', zip_code: '', number: '' },
    points: 0,
    orders: [],
  };

  beforeEach((): void => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', {
      get: () => of({}),
    });

    appServiceSpy = jasmine.createSpyObj('AppService', {
      getUser: of(mockedProfile),
    });

    TestBed.configureTestingModule({
      providers: [
        AppComponent,
        provideMockStore({ initialState }),
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: AppService, useValue: appServiceSpy },
      ],
    });

    appComponent = TestBed.inject(AppComponent);
    mockStore = TestBed.inject(MockStore);

    spyOn(mockStore, 'dispatch').and.callFake((): void => {});
  });

  it('should initialize AppComponent', (): void => {
    expect(appComponent).toBeDefined();
    expect(mockStore).toBeDefined();
  });

  it('should store to have been caled dispatch after trigger setShowCart', (): void => {
    appComponent.setShowCart();

    expect(mockStore.dispatch).toHaveBeenCalledWith(
      UserActions.setShowCart({ showCart: !appComponent.showCart }),
    );
  });

  it('should store to have been caled dispatch after trigger getUser', (): void => {
    appComponent.getUser();

    expect(mockStore.dispatch).toHaveBeenCalledWith(
      UserActions.upsertProfile({ profile: mockedProfile }),
    );
  });
});
