import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirm-remove-hero',
  templateUrl: './confirm-remove-hero.component.html',
  styles: [],
})
export class ConfirmRemoveHeroComponent {
  constructor(
    private _dialogRef: MatDialogRef<ConfirmRemoveHeroComponent>,
    @Inject(MAT_DIALOG_DATA) public hero: Hero
  ) {}
  remove() {
    this._dialogRef.close(true);
  }
  cancel() {
    this._dialogRef.close(false);
  }
}
