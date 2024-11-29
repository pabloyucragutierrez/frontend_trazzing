import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UneteComoHeadHunterComponent } from './unete-como-head-hunter.component';

describe('UneteComoHeadHunterComponent', () => {
  let component: UneteComoHeadHunterComponent;
  let fixture: ComponentFixture<UneteComoHeadHunterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UneteComoHeadHunterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UneteComoHeadHunterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
