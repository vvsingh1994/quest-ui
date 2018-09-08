import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../../../../node_modules/@angular/material';
import { SignupComponent } from '../signup/signup.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-quest-login-main',
  templateUrl: './quest-login-main.component.html',
  styleUrls: ['./quest-login-main.component.scss']
})
export class QuestLoginMainComponent implements OnInit {
  hide: boolean;
  color = 'white';
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '50%',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.hide = true;
  }

}
