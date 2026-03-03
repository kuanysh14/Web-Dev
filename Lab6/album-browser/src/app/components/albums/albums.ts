import { Component, OnInit } from '@angular/core';
import { Album } from '../../models';
import { AlbumsService } from '../../services/albums-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.html', 
  styleUrl: './albums.css',
  standalone: true
})
export class Albums implements OnInit {
  albums: Album[] = [];
  loaded: boolean = false;

  constructor(private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    this.loaded = false;
    this.albumsService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter((x) => x.id !== id);
    this.albumsService.deleteAlbum(id).subscribe(() => {
      console.log('Deleted successfully');
    });
  }
}