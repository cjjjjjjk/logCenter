import { Component } from '@angular/core';
import { RightOptionComponent } from '../../components/right-option/right-option.component';
import { ArticleMiniComponent } from '../../components/article-mini/article-mini.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documents',
  imports: [RightOptionComponent, ArticleMiniComponent, CommonModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css'
})
export class DocumentsComponent {
  iterations = Array(5);

  articles = [
    {
      title: 'Inpainting insert with a custom image using Imagen 3 on Google Gemini',
      author: 'Hai',
      description: 'I have explored the Google Imagen 3 Multimodal model to replace an object with another object generated by a prompt using the API.I am trying to explore the possibility of replacing an object with another object that is provided by me, instead of being generated by a prompt.Any ideas on how to do it ? Will grounding the Imagen 3 model or function calling help? I am using the following code, as you can see the replacement object is generated by the prompt and is not being provided as a static object.I want to be able to provide a picture of my corgi instead of using a prompt to generate a picture of the corgi.'
    },
    {
      title: 'Angular Example app',
      author: 'Leonick',
      description: 'A simple Spotify client built with Angular 15, Nx workspace, ngrx, TailwindCSS and ng-zorro. I have recently shared about #angularspotify at AngularAir.'
    },
    {
      title: "This spinning VR chair at CES 2025 somehow didn't make me feel like throwing up",
      author: 'Lernardo mark',
      description: "Apple today seeded the second public betas of upcoming iOS 18.3, iPadOS 18.3, and macOS Sequoia 15.3 updates, allowing the public to test the software ahead of when it launches later this month. The public betas come three weeks after the first public betas. …"
    },

  ];

} 
