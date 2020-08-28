import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalSearchComponent } from './principal-search.component';

describe('PrincipalSearchComponent', () => {
  let component: PrincipalSearchComponent;
  let fixture: ComponentFixture<PrincipalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
