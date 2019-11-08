import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DynamicArray<T> {

    array : Array<T>;
    size: number;   
    capacity: number;

    constructor(){
        this.size = 0;
        this.capacity = 100000;
    }

    get(index: number){
        if(index < 0 || index >= this.size){
            console.error("Error!!. Index out of range");
        }else{
            return this.array[index];
        }
    }

    set(index: number, val : T){
        if(index >= this.size){
            console.error("Error!!. Index out of range");
        }else{
            this.array[index] = val;
        }
    }

    pushBack(val: T){
        if(this.size == this.capacity){
            let new_array = new Array<T>();

            for(let i = 0; i < this.size; i++)
                new_array[i] = this.array[i];
            this.array = new_array;
            this.capacity *= 2;
        }
        this.array[this.size] = val;
        this.size++;
    }

    remove(index: number){
        if(index < 0 || index >= this.size){
            console.error("Error!!. Index out of range");
        }else{
            for(let i = index; i < this.size-1; i++)
                this.array[i] = this.array[i+1];
            this.size--;
        }
    }

    getSize(){
        return this.size;
    }

    find(val: T){
        for(let i = 0; i < this.size; i++){
            if(this.array[i] == val) 
                return i;
        }
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

    clearArray(){
        this.array = new Array<T>();
        this.size = 0;
    }


}