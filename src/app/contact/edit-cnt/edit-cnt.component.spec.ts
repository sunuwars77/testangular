import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCntComponent } from './edit-cnt.component';

describe('EditCntComponent', () => {
  let component: EditCntComponent;
  let fixture: ComponentFixture<EditCntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
