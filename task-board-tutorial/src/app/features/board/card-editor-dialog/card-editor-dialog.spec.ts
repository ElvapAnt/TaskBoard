import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditorDialog } from './card-editor-dialog';

describe('CardEditorDialog', () => {
  let component: CardEditorDialog;
  let fixture: ComponentFixture<CardEditorDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEditorDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEditorDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
