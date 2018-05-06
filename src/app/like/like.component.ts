import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{
@Input('isActive') isActive: boolean;
@Input('likesCount') likesCount: number;


onClick()
  {
    this.updateLikesCount();
    this.isActive = !this.isActive;
    console.log(this.isActive);
  }

  updateLikesCount(){
    this.likesCount += (this.isActive) ? -1 : +1;
  }

}
