class Stack{
    constructor(){
        this.arr=[]
    }
    len=()=>this.arr.length

    place=(el)=>this.arr.push(el)

    get=()=>this.len()?this.arr.pop():null
}

