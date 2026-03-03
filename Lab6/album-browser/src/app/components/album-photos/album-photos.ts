import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from '../../models';
import { AlbumsService } from '../../services/albums-service';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
  standalone: true
})
export class AlbumPhotos implements OnInit {
  photos: Photo[] = [];
  loaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getPhotos(id).subscribe((photos) => {
      this.photos = photos;
      this.loaded = true;
    });
  }

  goBack() {
    this.router.navigate(['/albums', this.route.snapshot.paramMap.get('id')]);
  }
}