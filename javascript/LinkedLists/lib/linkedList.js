'use strict';
const Node=require('./node');

class LinkedList {
    constructor(){
        this.head=null;
        this.length=0;
        this.tail=null;
    }

    append(value){
        const newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
            this.length++;
            return this;
        }
        else{
            let current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=newNode;
            this.length++;
            return this;
        }
    }

    insert(value){
        const newNode=new Node(value);
        if(!this.head){
            this.head=newNode;
            this.length++;
        }
        else{
            newNode.next=this.head;
            this.head=newNode;
            this.length++;
        }
    }

    includes(value){
        let current=this.head;
        while(current.next){
            if(current.value==value){
                return true;
            }
            else{
                current=current.next;
            }
        }
        return false;
    }

    toString(){
        let current=this.head;
        let string="";
        let result="";
        while(current.next){
            string="{ "+current.value+" } -> ";
            result+=string;
            current=current.next;
        }
        string="{ "+current.value+" } -> ";
        result=result+string+"NULL";
        return result;
    }
}

module.exports=LinkedList;