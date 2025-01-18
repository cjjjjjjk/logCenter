import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-mini',
  imports: [CommonModule],
  templateUrl: './article-mini.component.html',
  styleUrl: './article-mini.component.css'
})
export class ArticleMiniComponent {
  @Input() data!: { id: number, userId: number, title: string, body: string }
}
