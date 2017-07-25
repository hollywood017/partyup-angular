import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubgComponent } from './pubg.component';

describe('PubgComponent', () => {
  let component: PubgComponent;
  let fixture: ComponentFixture<PubgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
