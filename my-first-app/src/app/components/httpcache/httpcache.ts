import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post{
  id: number;
  title: string;
  body: string;

}
@Component({
  selector: 'app-httpcache',
  imports: [CommonModule],
  templateUrl: './httpcache.html',
  styleUrl: './httpcache.css',
})
export class Httpcache {
  posts$: Observable<Post[]>  | null = null;

  http = inject(HttpClient);
  ngOnInit(){
    this.posts$ = this.http.get<Post[]>(
  'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
