import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DugoKitComponent } from './dugo-kit.component';

describe('DugoKitComponent', () => {
  let component: DugoKitComponent;
  let fixture: ComponentFixture<DugoKitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DugoKitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DugoKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
