import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceDashboardComponent } from './ecommerce-dashboard.component';

describe('ECommerceDashboardComponent', () => {
  let component: ECommerceDashboardComponent;
  let fixture: ComponentFixture<ECommerceDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ECommerceDashboardComponent]
    });
    fixture = TestBed.createComponent(ECommerceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
