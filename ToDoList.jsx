import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListCom from './ListCom';

const ToDoList = () => {

    const [item,setItem] = useState("");
    const [newItem,setNewItem] = useState([]);

    const itemEvent = (event) => {
        setItem(event.target.value);
    }

    const addItems = () => {
        setNewItem( (oldvalues) => {
            return [...oldvalues, item];
        })
        setItem(" ");
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>TODO LIST</h1>
                    <br />
                    <input type="text" value={item}  placeholder="Add an Item" onChange={itemEvent}/>
                    <Button className="newBtn" onClick={addItems}> 
                        <AddIcon/> 
                    </Button>
                    <br/>
                    <ol>
                        { 
                            newItem.map( (val,index) => {
                                return <ListCom text={val} key={index}/>;
                            }) 
                        }
                    </ol>
                    <br/>
                </div>
            </div>
        </>
    );
}

export default ToDoList;