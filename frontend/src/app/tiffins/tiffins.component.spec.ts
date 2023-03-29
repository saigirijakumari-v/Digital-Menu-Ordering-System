import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiffinsComponent } from './tiffins.component';

describe('TiffinsComponent', () => {
  let component: TiffinsComponent;
  let fixture: ComponentFixture<TiffinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiffinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiffinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
