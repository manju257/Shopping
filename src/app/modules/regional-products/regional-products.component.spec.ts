import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionalProductsComponent } from './regional-products.component';

describe('RegionalProductsComponent', () => {
  let component: RegionalProductsComponent;
  let fixture: ComponentFixture<RegionalProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionalProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionalProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
