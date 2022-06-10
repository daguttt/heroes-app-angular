import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-remove-hero',
  templateUrl: './confirm-remove-hero.component.html',
  styles: [],
})
export class ConfirmRemoveHeroComponent {
  constructor(private _dialogRef: MatDialogRef<ConfirmRemoveHeroComponent>) {}
  remove() {
    this._dialogRef.close(true);
  }
  cancel() {
    this._dialogRef.close();
  }
}
