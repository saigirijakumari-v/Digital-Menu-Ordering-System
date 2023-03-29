import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefstatusComponent } from './chefstatus.component';

describe('ChefstatusComponent', () => {
  let component: ChefstatusComponent;
  let fixture: ComponentFixture<ChefstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefstatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
