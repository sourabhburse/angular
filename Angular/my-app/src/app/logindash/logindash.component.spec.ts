import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindashComponent } from './logindash.component';

describe('LogindashComponent', () => {
  let component: LogindashComponent;
  let fixture: ComponentFixture<LogindashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogindashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
