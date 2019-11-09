import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DynamicArray<T> {

    array: Array<T>;
    capacity: number;
    size: number;   

    constructor(){
        this.array = new Array<T>(1);
        this.capacity = 1;
        this.size = 0;
    }

    get(index: number) : T {
        if(index < 0 || index >= this.size) {
            console.error("Error!!. Index out of range");
        } else {
            return this.array[index];
        }
    }

    set(index: number, val : T) {
        if(index >= this.size) {
            console.error("Error!!. Index out of range");
        } else {
            this.array[index] = val;
        }
    }

    pushBack(val: T) {
        if(this.size == this.capacity) {
            let new_array = new Array(this.capacity * 2);//arreglo con el doble de capacidad
            for(let i = 0; i < this.size; i++) {
                new_array[i] = this.array[i];
            }
            this.array = new_array;
            this.capacity *= 2;
        }
        this.array[this.size] = val;
        this.size++;
    }

    remove(index: number) : T {
        if(index < 0 || index >= this.size){ 
            console.error("Error!!. Index out of range");
            return null;
        } else {
            let val = this.array[index];
            for(let i = index; i < this.size-1; i++) {
                this.array[i] = this.array[i+1];
            }
            this.size--;
            return val;
        }
    }

    getSize(){
        return this.size;
    }

    displayArray(){
        if(this.size == 0){
            console.log("Empty list");
        } else {
            for(let i = 0; i < this.size; i++){
                console.log(this.array[i]);
            }
        }
    }


}