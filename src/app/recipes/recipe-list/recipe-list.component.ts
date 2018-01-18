import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://static.pexels.com/photos/34950/pexels-photo.jpg'),
    new Recipe('A Test Recipe', 'This is a test', 'https://static.pexels.com/photos/34950/pexels-photo.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
