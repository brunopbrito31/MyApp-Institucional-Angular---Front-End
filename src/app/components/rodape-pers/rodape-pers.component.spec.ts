import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RodapePersComponent } from './rodape-pers.component';

describe('RodapePersComponent', () => {
  let component: RodapePersComponent;
  let fixture: ComponentFixture<RodapePersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RodapePersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodapePersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
