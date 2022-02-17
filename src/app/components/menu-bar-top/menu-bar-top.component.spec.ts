import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarTopComponent } from './menu-bar-top.component';

describe('MenuBarTopComponent', () => {
  let component: MenuBarTopComponent;
  let fixture: ComponentFixture<MenuBarTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBarTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
