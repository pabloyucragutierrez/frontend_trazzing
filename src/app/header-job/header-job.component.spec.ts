import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderJobComponent } from './header-job.component';

describe('HeaderJobComponent', () => {
  let component: HeaderJobComponent;
  let fixture: ComponentFixture<HeaderJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
