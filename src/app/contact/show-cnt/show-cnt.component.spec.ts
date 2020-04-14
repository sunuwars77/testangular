import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCntComponent } from './show-cnt.component';

describe('ShowCntComponent', () => {
  let component: ShowCntComponent;
  let fixture: ComponentFixture<ShowCntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
