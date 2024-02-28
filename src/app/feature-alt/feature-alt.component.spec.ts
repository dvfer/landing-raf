import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAltComponent } from './feature-alt.component';

describe('FeatureAltComponent', () => {
  let component: FeatureAltComponent;
  let fixture: ComponentFixture<FeatureAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureAltComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeatureAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
