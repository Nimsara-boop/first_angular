import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOtherComponent } from './my-other-component';

describe('MyOtherComponent', () => {
  let component: MyOtherComponent;
  let fixture: ComponentFixture<MyOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyOtherComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyOtherComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
