import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MovieIcon from '@material-ui/icons/Movie';
import { FormControl } from '@material-ui/core';

import Character from '../../data-models/characters';
import { getSelectedCharacter } from '../../actions/characterSlice';
import { loadMovieInfo } from '../../actions/movieSlice';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            width: '100%',
            borderColor: theme.palette.grey[400],
            borderWidth: 1,
            borderRadius: 4,
            borderStyle: 'solid',
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

export default function MovieList() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const selectedCharacter: Character = useSelector(getSelectedCharacter);

    const onMovieSelected = (selectedMovie: string) => {
        dispatch(loadMovieInfo(selectedMovie));
    }

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <List component="nav" aria-label="main mailbox folders">
                {
                    selectedCharacter && selectedCharacter.movies?.map((aMovie: string) =>
                        <ListItem button onClick={() => {onMovieSelected(aMovie)}}>
                            <ListItemIcon>
                                <MovieIcon />
                            </ListItemIcon>
                            <ListItemText primary={ aMovie } />
                        </ListItem>
                    )
                }
            </List>
        </FormControl>
    );
}