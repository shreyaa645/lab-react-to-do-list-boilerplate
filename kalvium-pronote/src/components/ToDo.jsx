import {Component} from 'react';

class ToDo extends Component {

    constructor() {
        super();
        this.state = {
            text : "",
            todo:[]
        }
    }
    render() {

        // let text = this.state.text
        // let todo = this.state.todo

        let {text, todo} = this.state;

        let handleChange = (event)=>{
            this.setState({text:event.target.value})
            console.log(text)
           
        }
        let handleClick = () => {
            this.setState({
                todo:[...todo,text]
            })
        }

        let handleUpdate = (index) => {
            let updatedText = prompt("Enter a new To Do")
            let filterTodo = todo.map((element,i) => {
                if (i == index){
                    return updatedText;
                }
                return element;
            })
            this.setState({
                todo: filterTodo
            })
        }

        
        let handleDelete = (index) => {
            let deleteData = todo.filter((element,i)=> i !== index)
            this.setState({
                todo:deleteData
            })
        }
        return(
            <>

            <div className='placeholder'>
            <input className='enter' type="text" placeholder='ENTER NEW TEXT' onChange={handleChange}/>
            <button onClick={handleClick}>ADD TO DO</button>
            </div>

            <div>
                {todo.map(
                    (element,i) => (
                        <div key={i}>
                           <p className='task'>{element}</p>
                           <button className='btn' onClick={()=> handleUpdate(i)}>Update Todo</button>
                           <button className='btn' onClick={()=> handleDelete(i)}>Delete Todo</button>
                        </div>
                    )
                )}
            </div>
            </>
        )
    }
}

export default ToDo