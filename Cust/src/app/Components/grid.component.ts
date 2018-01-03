import {Component,Input,Output,EventEmitter} from "@angular/core";

@Component({
  selector:'grid-ui',
  templateUrl:'./grid.component.html'
})

export class GridComponent{

  @Output("grid-Selected")
  selected:EventEmitter<Object>=new EventEmitter<Object>();

  gridColumns:Array<Object>=new Array<Object>();

  gridData:Array<Object>=new Array<Object>();

  @Input("grid-Entity")
  Entity:string="";

  @Input("grid-DataBind")
  set gridDataSet(_gridData:Array<Object>){
    if(_gridData.length > 0){
      if(this.gridColumns.length == 0){
        var columnNames = Object.keys(_gridData[0]);
        this.gridColumns=new Array<Object>();
        for(let index in columnNames){
        this.gridColumns.push(columnNames[index]);
        }
      }
      this.gridData=_gridData;
    }

  }

  Select(_selected:Object){
    this.selected.emit(_selected);
  }

}

