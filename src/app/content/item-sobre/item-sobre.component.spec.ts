import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSobreComponent } from './item-sobre.component';

describe('ItemSobreComponent', () => {
  let component: ItemSobreComponent;
  let fixture: ComponentFixture<ItemSobreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemSobreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSobreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
