import React, { useState, useReducer } from 'react';

// material ui
import { Grid, Card, CardActions, Typography, CardContent, IconButton, Collapse } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { green, orange, red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';

// CSS
const useStyles = makeStyles({
    grid: {
        flexGrow: 1,
        marginTop: '1rem',
    },
    todo: {
        backgroundColor: '#343a40',
        color: '#5fd1f1'
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
    }
});

//dispatch actions
const ACTIONS = {
    ADD_TODO: 'add-todo',
    DELETE_TODO: 'delete-todo',
    TOGGLE_COMPLETE: 'toggle-complete',
    UPDATE_TODO_TITLE: 'update-todo'
}
// dispatcher 
const reducer = (todos, action) => {
    switch(action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.title)];
        case ACTIONS.TOGGLE_COMPLETE:
            return todos.map(todo => {
                if(todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            });
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id);
        case ACTIONS.UPDATE_TODO_TITLE:
            return todos.map(todo => {
                if(todo.id === action.payload.id) {
                    return { ...todo, title: action.payload.title }
                }
                return todo
            });
        default:
            return todos;
    }
}
// helper functions for dispatcher
const newTodo = (title) => {
    return { id: Date.now(), title: title, completed: false }
}

// to-do task component
const TodoTask = ({ todo, dispatch }) => {
    const styles = useStyles();
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [expanded, setExpanded] = useState(false);
    const handleCollapse = () => {
        setExpanded(!expanded);
    }
    const handleOnChange = (event) => {
        setUpdatedTitle(event.target.value);
    }
    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch({
            type: ACTIONS.UPDATE_TODO_TITLE, 
            payload: { id: todo.id, title: updatedTitle }
        });
        setUpdatedTitle('');
    }

    return(
        <Card id={todo.id} className={todo.complete ? styles.completedTask : styles.todo}>
            <CardContent>
                <Typography>
                    {todo.title}
                </Typography>
            </CardContent>
            <CardActions className={styles.actionIcons}>
                <IconButton className={styles.completeIcon} onClick={() => dispatch(
                    { type: ACTIONS.TOGGLE_COMPLETE, payload: { id: todo.id } }
                )}>
                    <DoneIcon />
                </IconButton>
                <IconButton className={styles.editIcon} onClick={handleCollapse}>
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
                        <input placeholder="update title" value={updatedTitle} onChange={handleOnChange} />
                        <IconButton className={styles.addIcon} type="submit" >
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
    //when submit new todo, send to dispatcher and reset input field
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { title: title} });
        setTodoTitle('');
    }
    
    console.log(todos)

    return(
       <Grid container spacing={3} className={styles.grid}>
           <Grid item xs={12}>
               <Typography>
                   Enter New Todo &amp; See Reducer In Action
               </Typography>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="enter title of todo" value={title} onChange={e => setTodoTitle(e.target.value)} />
                    <IconButton className={styles.addIcon} type="submit" >
                        <AddIcon />
                    </IconButton>
                </form>
           </Grid>
           {
               todos.map((obj, index) => {
                   return <Grid item xs={12} key={index}>
                       <TodoTask todo={obj} dispatch={dispatch} />
                    </Grid>
               })
           }
       </Grid>
    )
}

export default MuiContainer;
