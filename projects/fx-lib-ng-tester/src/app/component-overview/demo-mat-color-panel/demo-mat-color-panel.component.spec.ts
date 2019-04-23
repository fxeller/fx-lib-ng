import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMatColorPanelComponent } from './demo-mat-color-panel.component';

describe('DemoMatColorPanelComponent', () => {
  let component: DemoMatColorPanelComponent;
  let fixture: ComponentFixture<DemoMatColorPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMatColorPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMatColorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
