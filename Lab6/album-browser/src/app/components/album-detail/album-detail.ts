import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Album } from '../../models';
import { AlbumsService } from '../../services/albums-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule]
})
export class AlbumDetail implements OnInit {
  album!: Album;
  loaded: boolean = false;
  newTitle: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
  const idParam = this.route.snapshot.paramMap.get('id');
  console.log('Current ID from URL:', idParam);

  if (idParam) {
    const id = Number(idParam);
    this.albumsService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.newTitle = data.title;
        this.loaded = true;
      },
      error: (err) => {
        console.error('Failed to load album', err);
        this.loaded = true; 
      }
    });
  }
}

  saveTitle() {
    this.albumsService.updateAlbumTitle(this.album.id, this.newTitle).subscribe((updatedAlbum) => {
      this.album.title = this.newTitle;
      alert('Title updated (simulated)!');
    });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}
