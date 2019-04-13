import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoMatExpansionPanelComponent } from './demo-mat-expansion-panel.component';

describe('DemoMatExpansionPanelComponent', () => {
  let component: DemoMatExpansionPanelComponent;
  let fixture: ComponentFixture<DemoMatExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoMatExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoMatExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
