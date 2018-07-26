
let id = 1;
function uuid() {
    return id++;
}

export function addTodoItem(value){
    return {
        type: "ADD_TODO_ITEM",
        payload: {
            name: value,
            id: uuid(),
            completed: false,
            editable: false
        }
        
    }
 }


 export function modifyCompleted(){
     return {
         type:"MODIFY_COMPLETED",
         
     }
 }

 export function COMPLETE_TODO(id) {
     return {
        type: "COMPLETE_TODO",
        id
     }
 }
