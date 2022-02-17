import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionPersComponent } from './accordion-pers.component';

describe('AccordionPersComponent', () => {
  let component: AccordionPersComponent;
  let fixture: ComponentFixture<AccordionPersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionPersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionPersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

