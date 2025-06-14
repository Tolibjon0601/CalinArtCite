import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulComponent } from './useful.component';

describe('UsefulComponent', () => {
  let component: UsefulComponent;
  let fixture: ComponentFixture<UsefulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsefulComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsefulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
