import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMatPageNotFoundComponent } from './demo-mat-page-not-found.component';

describe('DemoMatPageNotFoundComponent', () => {
  let component: DemoMatPageNotFoundComponent;
  let fixture: ComponentFixture<DemoMatPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMatPageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMatPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
