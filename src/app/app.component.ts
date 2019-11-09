import { Component } from '@angular/core';
import { DoubleLinkedList } from './data-structures/double-linked-list';
import { Product } from './data-structures/product';
import { DynamicArray } from './data-structures/dynamic-array';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private lista: DynamicArray<number>){}

  prueba(v: number){
    //let product = new Product(1, "Product"+1);
    this.lista.setCapa(100);
    this.lista.push(v);
    this.lista.displayArray();
    console.log("hola")
  }

  /*//constructor(private list: DoubleLinkedList<Product>){}

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
  }*/

}
