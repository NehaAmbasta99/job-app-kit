import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobKitComponent } from './job-kit.component';

describe('JobKitComponent', () => {
  let component: JobKitComponent;
  let fixture: ComponentFixture<JobKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobKitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
