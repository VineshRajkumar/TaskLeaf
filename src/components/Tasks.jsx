import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';

const Tasks = ({ taskButton }) => {
    const playsound = useRef(null);
    const [taskdecide, settaskdecide] = useState(false);
    const [createtodo, setcreatetodo] = useState(false);
    const [activeTaskIndex, setActiveTaskIndex] = useState(null); // Track the index of the active task
    const [todo, settodo] = useState(""); // run when text is being entered
    const [todos, settodos] = useState([]); // after text entered and clicked ok this is stored in array
    const [editIndex, setEditIndex] = useState(-1);

    useEffect(() => {
        let todoString = localStorage.getItem("todos")
        if(todoString){
            let todoos = JSON.parse(todoString)
            settodos(todoos)
        }
        
    }, [])
    
    const saveToLS =() => {
        localStorage.setItem("todos",JSON.stringify(todos))
    }
    


    useEffect(() => {
        settaskdecide(taskButton);
    }, [taskButton]);

    const handleClick = () => {
        setcreatetodo(!createtodo);
    };

    const handleClickDots = (index) => {
        setActiveTaskIndex(index === activeTaskIndex ? null : index); // Toggle the active task index
    };

    const handleClickCheck = (index) => { //nrewtodo is new array created from the inputs ,item is current todo idx is index of current todo 
        //index is inbuilt function that store the index of clicked todo so we compare that with idx that is current index 
         //if will move through the array and check if clicked index is equal to idx current value if yes the update is isCompleted or else return current item unchanged
        
        const newTodos = todos.map((item, idx) => 
            idx === index ? { ...item, isCompleted: !item.isCompleted } : item
        );
        settodos(newTodos);

        // Play the appropriate sound
        if (playsound.current) {
            playsound.current.src = newTodos[index].isCompleted ? 'Audio1.mp3' : 'whoosh.mp3';
            playsound.current.play();
        }
        localStorage.setItem("todos",JSON.stringify(newTodos))
    };

    const handleChange = (e) => {
        settodo(e.target.value);
    };

    const handleClickAdd = () => {
        const newtodoss = [...todos, { todo, isCompleted: false }]
        settodos(newtodoss); // Storing todo in todos array
        localStorage.setItem("todos",JSON.stringify(newtodoss))
        settodo(""); // Resetting value of todo so that next todo can be entered
        
    };
    const handleClickEdit = (index) => {
        setEditIndex(index); // Set the index of the item being edited - sets the item to edit in edit mode
        const newTodos = todos.filter((item, idx) => idx !== index) //deleting clikced item
        settodos(newTodos);//dleteing clicked item
        settodo(todos[index].todo); //the particluar index is taken and is put to todo which is "" so it gets the value of that index
        localStorage.setItem("todos",JSON.stringify(newTodos))
    };

    //If todos is ['Task1', 'Task2', 'Task3'] and you want to delete the item at index 1 ('Task2'):
    //index is 1.
    //The filter method will iterate over todos:
    //For idx = 0, 'Task1', 0 !== 1 → true (include 'Task1').
    //For idx = 1, 'Task2', 1 !== 1 → false (exclude 'Task2').
    //For idx = 2, 'Task3', 2 !== 1 → true (include 'Task3').
    //The new array is ['Task1', 'Task3'], which updates the state, effectively removing 'Task2'.
    const handleClickDelete = (index) => { //todos.filter creates new array //index - it is the index of todos which we want to delete
        const newTodos = todos.filter((item, idx) => idx !== index) //item -current item, idx-index of filter array
        settodos(newTodos); // If idx is not equal to index, the condition returns true, so the item is included in the new array (newTodos). If idx is equal to index, the condition returns false, so the item is excluded from newTodos.
        localStorage.setItem("todos",JSON.stringify(newTodos))
    };

    const currentdatetime = moment();
    const day = currentdatetime.format('dddd');
    const month = currentdatetime.format('MMM');
    const year = currentdatetime.format('YYYY');
    const date = currentdatetime.format('D');

    return (
        <div>
            {taskdecide &&
                <div className='max-w-sm my-8 h-[90VH] mx-auto bg-white relative z-50 shadow-md overflow-y-auto overflow-x-hidden max-sm:max-w-80 max-sm:h-[73vh]  max-[321px]:max-w-[278px] '>
                    <div className='relative pb-12'>
                        <div className='flex justify-start ml-11 pt-11'>
                            <div className='text-5xl'>{date}</div>
                            <div>
                                <div className='ml-2 pt-2 font-bold bold text-sm flex items-center'>{month.toUpperCase()}</div>
                                <div className='ml-2 text-sm font-normal'>{year}</div>
                            </div>
                        </div>
                        <div className='absolute right-11 top-14 font-semibold'>{day.toUpperCase()}</div>
                    </div>

                    {createtodo &&
                        <div className='flex justify-center'>
                            <input
                                onChange={handleChange}
                                value={todo}
                                type="text"
                                placeholder="Type Here"
                                className='border ml-6 h-7 border-black w-72 placeholder:text-center max-sm:w-60'
                            />
                            <button disabled={todo.length<=0} className='correct'>
                                <span onClick={handleClickAdd}    className="ml-2 pt-[2px] w-8 h-7 material-symbols-outlined bg-black text-white max-sm:text-sm max-sm:w-5 ">check</span>
                            </button>
                        </div>
                    }

                    {todos.map((item, index) => (
                        <div className='text relative mt-5 py-3  ' key={index}>
                            <div className={`absolute left-10 cursor-pointer right-24  ${item.isCompleted ? "line-through" : ""}`}>
                                {item.todo}
                            </div>
                            <div onClick={() => handleClickCheck(index)} className='absolute right-12'>
                                <span className={`material-symbols-outlined cursor-pointer ${item.isCompleted ? 'text-green-500' : ''}`}>
                                    {item.isCompleted ? 'radio_button_checked' : 'radio_button_unchecked'}
                                </span>
                                <audio ref={playsound} />
                            </div>
                            <div className='absolute right-7 -top-[2px] cursor-pointer py-3'>
                                <span className="material-symbols-outlined text-lg" onClick={() => handleClickDots(index)}>more_vert</span>
                            </div>

                            {activeTaskIndex === index &&
                            <div className='options absolute left-[238px] bottom-3 cursor-pointer z-50 max-md:absolute max-md:left-[170px]'>
                                <div>
                                    <span className="material-symbols-outlined absolute border border-white text-white ml-3 bg-black " onClick={() => {handleClickEdit(index, 'New Todo')}}>edit</span>
                                    </div>
                                <div>
                                    <span className="material-symbols-outlined  absolute border border-white text-white ml-11 bg-black " onClick={() => handleClickDelete(index)}>delete</span>
                                    </div>
                                    </div>
                                }
                        </div>
                    ))}
                    
                    <div className='bottom-9 left-1/2 -ml-9 cursor-pointer hover:bg-green-500 text-white -mb-8 text-5xl bg-green-400 pb-4 pt-1 px-5 rounded-full fixed max-sm:fixed max-sm:bottom-[140px]' onClick={handleClick}>+</div>
                </div>
            }
        </div>
    );
};

export default Tasks;




