import { Component, OnInit, Input } from '@angular/core';
import { DoubleLinkedList } from './data-structures/double-linked-list';
import { DynamicArray } from './data-structures/dynamic-array';
import { Product } from './data-structures/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posicion: number = 9000;

  ngOnInit() {

  }


  constructor(private list: DoubleLinkedList<Product>, private dArray: DynamicArray<Product>) {

  }

  dPushBack(quantity: number) {
    let t0 = performance.now();
    let id = this.dArray.getSize();
    for (let i = 0; i < quantity; i++) {
      let product = new Product(id, "Product" + id);
      this.dArray.pushBack(product);
    }
    let t1 = performance.now();

    console.log("push back " + quantity + " products took: ");
    console.warn((t1 - t0) + " milliseconds");
  }

  dGet() {
    let t0 = performance.now();
    console.log("Elemento Obtenido: " + this.dArray.get(1).name);
    let t1 = performance.now();

    console.log("get 1 product took: ");
    console.warn((t1 - t0) + " milliseconds");
  }

  dSet() {
    let t0 = performance.now();
    let producto = new Product(333, "Nuevito");
    console.log("Elemento Actualizado: " + this.dArray.set(1, producto));
    let t1 = performance.now();

    console.log("set 1 product took: ");
    console.warn((t1 - t0) + " milliseconds");
  }

  dRemove() {
    let t0 = performance.now();
    let eliminado = this.dArray.remove(this.posicion);
    if (eliminado) {
      console.log("Eliminado: " + eliminado.name);
    }
    let t1 = performance.now();

    console.log("remove 1 product took: ");
    console.warn((t1 - t0) + " milliseconds");

  }

  dPrintElements() {
    this.dArray.printElements();
  }

  dGetSize() {
    let t0 = performance.now();
    console.log("Size: " + this.dArray.getSize());
    let t1 = performance.now();

    console.log("find 1 node took: ");
    console.warn((t1 - t0) + " milliseconds");
  }

  dGetCapacity() {
    let t0 = performance.now();
    console.log("Capacity: " + this.dArray.getCapacity());
    let t1 = performance.now();

    console.log("find 1 node took: ");
    console.warn((t1 - t0) + " milliseconds");
  }

  pushNodesFront(quantity: number) {

    let t0 = performance.now();
    for (let i = 0; i < quantity; i++) {
      let product = new Product(i, "Product" + i);
      this.list.pushFront(product);
    }
    let t1 = performance.now();

    console.log("push front " + quantity + " nodes took: ");
    console.warn((t1 - t0) + " milliseconds");
  }

  pushNodesBack(quantity: number) {

    let t0 = performance.now();
    for (let i = 0; i < quantity; i++) {
      let product = new Product(i, "Product" + i);
      this.list.pushBack(product);
    }
    let t1 = performance.now();

    console.log("push back" + quantity + " node took: ");
    console.warn((t1 - t0) + " milliseconds");
  }

  findByKey() {
    let t0 = performance.now();

    let product = new Product(1, "Product" + 1);
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

  resetList() {
    this.list.clearList();
  }

}
