import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Heroe } from '../../interface/heroes.interface';
import{switchMap}from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
   img{
      width:100%;
      border-radius:10px;
  }
  `
  ]
})
export class HeroeComponent implements OnInit {
    heroe !:Heroe
  constructor(private activatedRoute:ActivatedRoute, private serviceHeroe:HeroesService, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=>this.serviceHeroe.getHeroePorId(id))
      )
      .subscribe(heroe=> this.heroe=heroe);
  }
  regresar()
  {
    this.router.navigate(['/heroes/listado']);
  }

}
