import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbatComponent } from './toolbat.component';

describe('ToolbatComponent', () => {
  let component: ToolbatComponent;
  let fixture: ComponentFixture<ToolbatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbatComponent]
    });
    fixture = TestBed.createComponent(ToolbatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
