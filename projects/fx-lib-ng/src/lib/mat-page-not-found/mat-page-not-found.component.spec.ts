import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPageNotFoundComponent } from './mat-page-not-found.component';

describe('MatPageNotFoundComponent', () => {
  let component: MatPageNotFoundComponent;
  let fixture: ComponentFixture<MatPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatPageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
