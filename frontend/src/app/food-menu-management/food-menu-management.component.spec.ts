import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMenuManagementComponent } from './food-menu-management.component';

describe('FoodMenuManagementComponent', () => {
  let component: FoodMenuManagementComponent;
  let fixture: ComponentFixture<FoodMenuManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodMenuManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodMenuManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
