import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatColorPanelComponent } from './mat-color-panel.component';

describe('MatColorPanelComponent', () => {
  let component: MatColorPanelComponent;
  let fixture: ComponentFixture<MatColorPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatColorPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatColorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
