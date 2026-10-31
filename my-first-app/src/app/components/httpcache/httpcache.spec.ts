import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Httpcache } from './httpcache';

describe('Httpcache', () => {
  let component: Httpcache;
  let fixture: ComponentFixture<Httpcache>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Httpcache],
    }).compileComponents();

    fixture = TestBed.createComponent(Httpcache);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
