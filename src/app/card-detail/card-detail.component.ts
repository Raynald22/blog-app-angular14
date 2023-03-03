import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogCard } from '../models/blog-card.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  @Input()
  data!: BlogCard;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
