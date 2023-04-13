import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';

import { AppEffects } from './app.effects';
import { DataService, DataItem } from './data.service';
import { LoadData, LoadDataError, LoadDataSuccess } from './app.actions';

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: AppEffects;
  let mockDataService: DataService;

  beforeEach(() => {
    mockDataService = {
      fetchData: jasmine.createSpy('fetchData')
    } as never as DataService;
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AppEffects,
        {
          provide: DataService,
          useValue: mockDataService
        },
        provideMockActions(() => actions$)
      ]
    }).compileComponents();

    effects = TestBed.inject(AppEffects);
  });

  it('should load data and return a LoadDataSuccess action on success', (done: DoneFn) => {
    const mockData: DataItem[] = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' }
    ];

    (mockDataService.fetchData as jasmine.Spy).and.returnValue(of(mockData));
    actions$ = of(LoadData);

    effects.loadData$.subscribe(action => {
      expect(action).toEqual(LoadDataSuccess({ data: mockData }));
      done();
    });
  });

  it('should return a LoadDataError action on error', (done: DoneFn) => {
    const mockError = new Error('Error loading data');
    (mockDataService.fetchData as jasmine.Spy).and.returnValue(throwError(mockError));
    actions$ = of(LoadData);

    effects.loadData$.subscribe(action => {
      expect(action).toEqual(LoadDataError({ error: mockError }));
      done();
    });
  });
});
