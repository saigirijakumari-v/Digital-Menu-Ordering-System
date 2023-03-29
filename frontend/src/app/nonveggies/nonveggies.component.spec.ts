import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonveggiesComponent } from './nonveggies.component';

describe('NonveggiesComponent', () => {
  let component: NonveggiesComponent;
  let fixture: ComponentFixture<NonveggiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonveggiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NonveggiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
