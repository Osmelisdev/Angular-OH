import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginas-enumeradas',
  templateUrl: './paginas-enumeradas.component.html',
  styleUrls: ['./paginas-enumeradas.component.css']
})
export class PaginasEnumeradasComponent implements OnInit, OnChanges {


  @Input() rows: number= 10;
  @Input() pages: number;
  @Output() selectPage = new EventEmitter<any>();

  listaPagina:any[];
  currentPage:number = 1;

  constructor() { }

  ngOnInit() {
    this.crearPaginacion();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['rows'] || changes['pages']){
      this.crearPaginacion();
    }
      
  }

  crearPaginacion(){
    this.listaPagina = [];
    for(let i=1; i <= this.pages; i++){
      this.listaPagina.push(i);
    }

  }    

    fmselect(page:number){
      this.currentPage = page;
      this.selectPage.emit(page);

    }

    atras(){
      if(this.currentPage > 1){
        this.currentPage --;
        this.selectPage.emit(this.currentPage);

      }
    }

    siguiente(){
      if(this.currentPage < this.pages){
        this.currentPage ++;
        this.selectPage.emit(this.currentPage);

      }
    }
  }


