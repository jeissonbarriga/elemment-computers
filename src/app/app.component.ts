import { Component } from '@angular/core';
import { DoubleLinkedList } from './data-structures/double-linked-list';
import { DynamicArray } from './data-structures/dynamic-array';
import { Product } from './data-structures/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posicion: number = 9000;

  constructor(private list: DoubleLinkedList<Product>, private array: DynamicArray<Product>){}

  //Dynamic Array:

  getValue(index: number){
    let t0 = performance.now();

    let value = this.array.get(index);
    console.log(value);

    let t1 = performance.now();

    console.log("get value at index "+ index +" took:")
    console.warn((t1 - t0) + " milliseconds");
  }

  setValue(index: number, value: Product){
    let t0 = performance.now();

    this.array.set(index, value);

    let t1 = performance.now();

    console.log("set value "+ value +" at index "+ index +" took:")
    console.warn((t1 - t0) + " milliseconds");
  }
  
  pushValuesBack(quantity: number){

    let t0 = performance.now();
    for(let i=0; i < quantity; i++){
      let product = new Product(i, "Product"+i);
      this.array.pushBack(product);
    }
    let t1 = performance.now();
    
    this.array.displayArray();

    console.log("push back "+ quantity +" value took: ");
    console.warn((t1 - t0) + " milliseconds");
  }

  removeValue(index: number) {
    let t0 = performance.now();

    let eliminado = this.array.remove(this.posicion);
    if (eliminado) {
      console.log("Eliminado: " + eliminado.name);
    }
    
    let t1 = performance.now();

    console.log("remove 1 value took: ");
    console.warn((t1 - t0) + " milliseconds");
  }

  display(){
    this.array.displayArray();
  }

  //Doubly-linked List:

  pushNodesFront(quantity: number){

    let t0 = performance.now();
    for(let i=0; i < quantity; i++){
      let product = new Product(i, "Product"+i);
      this.list.pushFront(product);
    }
    let t1 = performance.now();

    //this.list.displayList();

    console.log("push front "+ quantity +" nodes took: ");
    console.warn((t1 - t0) + " milliseconds");
  }
  
  pushNodesBack(quantity: number){

    let t0 = performance.now();
    for(let i=0; i < quantity; i++){
      let product = new Product(i, "Product"+i);
      this.list.pushBack(product);
    }
    let t1 = performance.now();

    console.log("push back"+ quantity +" node took: ");
    console.warn((t1 - t0) + " milliseconds");
  }

  findByKey() {
    let t0 = performance.now();

    let product = new Product(1, "Product"+1);
    this.list.findByKey(product);
    
    let t1 = performance.now();

    console.log("find 1 node took: ");
    console.warn((t1 - t0) + " milliseconds");
  }

  popBack() {
    let t0 = performance.now();
    
    this.list.popBack();
    
    let t1 = performance.now();

    console.log("pop back 1 node took: ");
    console.warn((t1 - t0) + " milliseconds");
  }

  resetList(){
    this.list.clearList();
  }

}
