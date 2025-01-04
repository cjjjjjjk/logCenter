import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogcenterComponent } from './logcenter.component';

describe('LogcenterComponent', () => {
  let component: LogcenterComponent;
  let fixture: ComponentFixture<LogcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogcenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
