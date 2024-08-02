import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GroceryListViewComponent } from './grocery-list-view/grocery-list-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GroceryListViewComponent, ReactiveFormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GrocerylistFront';
}
