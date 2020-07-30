import React, { useState, useReducer } from 'react';

// material ui
//Core
import { Grid, Card, CardActions, Typography, CardContent, IconButton, Collapse, TextField, CardHeader } from '@material-ui/core'
import { green, orange, red } from '@material-ui/core/colors';
//Styles
import { makeStyles } from '@material-ui/core/styles';
//Icons
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';

// CSS
const useStyles = makeStyles({
    grid: {
        flexGrow: 1,
        marginTop: '1rem',
        justifyContent: 'space-evenly'
    },
    todo: {
        backgroundColor: '#343a40',
        color: '#5fd1f1',
        marginBottom: '0.5rem',
        padding: '0.8rem'
    },
    actionIcons: {
        justifyContent: 'space-evenly'
    },
    addIcon: {
        color: '#5fd1f1',
        marginLeft: '0.5rem',
        "&:hover": {
            backgroundColor: '#5fd1f1',
            color: '#343a40'
        }
    },
    editIcon: {
        color: orange[500],
        "&:hover": {
            backgroundColor: orange[500],
            color: '#343a40'
        }
    },
    deleteIcon: {
        color: red[500],
        "&:hover": {
            backgroundColor: red[500],
            color: '#343a40'
        }
    },
    completeIcon: {
        color: green[500],
        "&:hover": {
            backgroundColor: green[500],
            color: '#343a40'
        }
    },
    completedTask: {
        backgroundColor: '#2b3034',
        color: '#5fd1f1',
        textDecoration: 'line-through'
    },
    inputDate: {
        borderColor: '#5fd1f1',
        margin: '1.5rem 0rem',
        '& .MuiInputBase-root': {
            color: '#5fd1f1',
            '&:after': {
                color: '#5fd1f1'
            }
        },
        '& .Mui-focused': {
            color: '#5fd1f1',
            '& fieldset.MuiOutlinedInput-notchedOutline': {
                borderColor: '#5fd1f1',
            },
        },
        '& label.Mui-focused': {
            color: '#5fd1f1'
        }
    },
    inputTitle: {
        color: '#5fd1f1',
        backgroundColor: '#343a40',
        '&:focus': {
            borderColor: '#5fd1f1',
            outline: '#5fd1f1'
        }
    }
});

//dispatch actions
const ACTIONS = {
    ADD_TODO: 'add-todo',
    DELETE_TODO: 'delete-todo',
    TOGGLE_COMPLETE: 'toggle-complete',
    UPDATE_TODO: 'update-todo'
}
// dispatcher 
const reducer = (todos, action) => {
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            //return all todos plus new one via helper function
            return [...todos, newTodo(action.payload.title, action.payload.dueDate)];
        case ACTIONS.TOGGLE_COMPLETE:
            //find todo with passed id and toggle complete value
            return todos.map(todo => {
                if(todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            });
        case ACTIONS.DELETE_TODO:
            //return only todos that don't have passed id
            return todos.filter(todo => todo.id !== action.payload.id);
        case ACTIONS.UPDATE_TODO:
            //there's gotta be a better way to handle updating only values passed to update
            return todos.map(todo => {
                if(todo.id === action.payload.id) {
                    //i really dont like that i have to do these three if statements to get this to work correctly
                    //if both fields are blank, return original todo
                    if(action.payload.title === '' && action.payload.dueDate === '') {
                        return { ...todo }
                    //if the title is different and not blank, update title
                    } else if(action.payload.title !== todo.title && action.payload.title !== '') {
                        return { ...todo, title: action.payload.title }
                    //if due date is different and not blank, update due date
                    } else if(action.payload.dueDate !== todo.dueDate && action.payload.dueDate !== '') {
                        return { ...todo, dueDate: action.payload.dueDate }
                    }
                }
                return todo
            });
        default:
            return todos;
    }
}
// helper functions for dispatcher
const newTodo = (title, dueDate) => {
    return { id: Date.now(), title: title, completed: false, dueDate: dueDate }
}

// to-do task component
const TodoTask = ({ todo, dispatch }) => {
    const styles = useStyles();
    //store update title
    const [updatedTitle, setUpdatedTitle] = useState('');
    //store update due date
    const [updatedDueDate, setUpdatedDueDate] = useState('');
    //handle edit collapse
    const [expanded, setExpanded] = useState(false);
    const handleCollapse = () => {
        setExpanded(!expanded);
    }
    //handle update title and due date on change
    const handleOnTitleChange = (event) => {
        setUpdatedTitle(event.target.value);
    }
    const handleOnDueDateChange = (event) => {
        setUpdatedDueDate(event.target.value);
    }
    //handle update call to dispatcher
    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch({
            type: ACTIONS.UPDATE_TODO, 
            payload: { id: todo.id, title: updatedTitle, dueDate: updatedDueDate }
        });
        setUpdatedTitle('');
        setUpdatedDueDate('');
    }

    return(
        <Card id={todo.id} className={todo.complete ? styles.completedTask : styles.todo}>
            <CardHeader title={todo.title}/>
            <CardContent>
                <Typography>
                    Due on: {todo.dueDate}
                </Typography>
            </CardContent>
            <CardActions className={styles.actionIcons}>
                <IconButton className={styles.completeIcon} onClick={() => dispatch(
                    { type: ACTIONS.TOGGLE_COMPLETE, payload: { id: todo.id } }
                )}>
                    <DoneIcon />
                </IconButton>
                <IconButton className={styles.editIcon} onClick={handleCollapse} disabled={todo.complete ? true : false }>
                    <EditIcon />
                </IconButton>
                <IconButton className={styles.deleteIcon} onClick={() => dispatch(
                    { type: ACTIONS.DELETE_TODO, payload: { id: todo.id }}
                )}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded}>
                <CardContent>
                    <form onSubmit={handleUpdate}>
                        <TextField
                            id="updatedTitle"
                            label="Title"
                            type="text"
                            variant="outlined"
                            value={updatedTitle}
                            onChange={handleOnTitleChange}
                            InputLabelProps={{
                                shrink: true
                            }}
                            disabled={todo.complete ? true : false }
                            className={styles.inputDate}
                        />
                        <TextField
                            id="updatedDueDate"
                            label="Due Date"
                            type="date"
                            variant="outlined"
                            value={updatedDueDate}
                            onChange={handleOnDueDateChange}
                            InputLabelProps={{
                                shrink: true
                            }}
                            disabled={todo.complete ? true : false }
                            className={styles.inputDate}
                        />
                        <IconButton className={styles.addIcon} type="submit" disabled={todo.complete ? true : false } >
                            <EditIcon />
                        </IconButton>
                    </form>
                </CardContent>
            </Collapse>
        </Card>
    )
}

// main component
const MuiContainer = () => {
    const styles = useStyles();
    //store list of todos and call dispatcher to perform actions
    const [todos, dispatch] = useReducer(reducer, []);
    //store title of todo in state
    const [title, setTodoTitle] = useState('');
    //store dueDate of todo in state
    const [dueDate, setDueDate] = useState('');
    //handle due Date change
    const handleDueDateChange = (event) => {
        setDueDate(event.target.value);
    }
    //when submit new todo, send to dispatcher and reset input field
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { title: title, dueDate: dueDate} });
        setTodoTitle('');
        setDueDate('');
    }
    
    console.log(todos)

    return(
       <Grid container spacing={3} className={styles.grid}>
            <Grid item xs={4}>
                <Card className={styles.todo}>
                    <CardHeader
                        title="Enter New Todo &amp; See React Reducer In Action"
                    />
                    <hr/>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="enter title of todo" value={title} onChange={e => setTodoTitle(e.target.value)} className={styles.inputTitle} />
                            <br/>
                            <TextField
                                id="dueDate"
                                label="Due Date"
                                type="date"
                                variant="outlined"
                                value={dueDate}
                                onChange={handleDueDateChange}
                                InputLabelProps={{
                                    shrink: true
                                }}
                                
                                className={styles.inputDate}
                            />
                            <br/>
                            <IconButton className={styles.addIcon} type="submit" >
                                <AddIcon />
                            </IconButton>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={6} >
            {
                todos.map((obj, index) => {
                    return <TodoTask key={index} todo={obj} dispatch={dispatch} />
                })
            }
            </Grid>
        </Grid>
    )
}

export default MuiContainer;
