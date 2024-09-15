import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemExperienciasComponent } from './item-experiencias.component';

describe('ItemExperienciasComponent', () => {
  let component: ItemExperienciasComponent;
  let fixture: ComponentFixture<ItemExperienciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemExperienciasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemExperienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
