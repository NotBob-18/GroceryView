import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { GroceryService } from '../service/grocery-service.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-grocery-list-view',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgFor],
  templateUrl: './grocery-list-view.component.html',
  styleUrl: './grocery-list-view.component.css',
})
export class GroceryListViewComponent implements OnInit {

  GroceryItem = [];
  postForm!: FormGroup;

  constructor(private router: Router, private groceryService: GroceryService) {}

  ngOnInit() {
    this.postForm = new FormGroup({
      task: new FormControl('', Validators.required),
      taskId: new FormControl('', Validators.required),
    });

    this.getAllItemsList();
  }

  onSubmit() {
    if (this.postForm.valid) {
      console.log('Form Submitted', this.postForm.value);
    }
  }

  createNewItem() {
    const data = this.postForm.value;

    this.groceryService.createNewItem(data).subscribe((res) => {
      console.log('new item added to list array');
    });
  }

  getAllItemsList() {
    this.groceryService.getAllItemsList().subscribe(items => {
    this.GroceryItem = items;
    console.log(items);
    });
  }
}
