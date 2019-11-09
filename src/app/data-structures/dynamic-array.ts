import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
    providedIn: 'root',
})

export class DynamicArray <T>{
    arr:T[];
    //arr: Array<T>;
    size: number;
    capa: number;

    constructor(){
        this.arr = [];
        this.capa = 0;
        this.size = 0;
    }

    setCapa(cap: number){
        this.capa = cap;
        //this.arr = T[cap];
        this.arr = new Array(cap); 
    }

    get(pos: number){
        if(pos > this.size) return -1;
        else return this.arr[pos];
    }

    set(pos: number, val:T){
        if(pos> this.capa-1) console.log("Se sale.");
        else if(pos> this.size-1) this.push(val);
        else this.arr[pos];
    }
    
    push(val: T){
        if(this.capa == this.size){
            if(this.capa == 0){
                let narr:T[] = new Array(1);                
                this.arr = narr;
            }else{
                this.capa *= 2;
                let narr:T[] = new Array(this.capa);
                for(var i = 0; i < this.size; i++) narr[i] = this.arr[i];  
                this.arr = narr;    
            }
        }
        this.arr[this.size] = val;
        this.size++;    
    }

    remove(pos: number){
        if(pos > this.size-1) console.log("No hay elemento.");
        else{
            this.size--;
            for(var i = pos; i < this.size; i++){
                this.arr[i] = this.arr[i+1];
            }
        }
    }

    numberElemnts(): number{
        return this.size;
    }

    displayArray(){
        for(var i = 0; i<this.size; i++){
            console.log(this.arr[i] + "/"); 
        } 
    }
   
}