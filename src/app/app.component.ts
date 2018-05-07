import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular app';
  courses = [1,2];
  post = {
    title: "Title",
    isFavorite: true
  }

  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: true,
    likesCount: 10
  }

  viewMode = 'map';

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs)
{
  console.log("Favorite Changed", eventArgs);
}

}
