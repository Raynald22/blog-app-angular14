import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogCard } from '../models/blog-card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  data!: BlogCard;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  detail() {
    this.router.navigate(['/cardDetail' + this.data.id]);
  }
}
