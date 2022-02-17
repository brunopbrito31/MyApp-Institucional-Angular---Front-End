import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselPersComponent } from './carrousel-pers.component';

describe('CarrouselPersComponent', () => {
  let component: CarrouselPersComponent;
  let fixture: ComponentFixture<CarrouselPersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrouselPersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrouselPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
