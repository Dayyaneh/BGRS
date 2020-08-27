import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MovieIcon from '@material-ui/icons/Movie';
import { FormControl } from '@material-ui/core';

import { getMovieList, setSelectedMovie, getMovieInfo } from '../../actions/movieSlice';
import Movie from '../../data-models/movie';

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
    const MovieList: Movie[] = useSelector(getMovieList);
    const movieInfo: Movie = useSelector(getMovieInfo);

    useEffect(() => {
        if (MovieList && MovieList.length && !movieInfo) {
            dispatch(setSelectedMovie(MovieList[0]));
        }
    });

    const onMovieSelected = (selectedMovie: Movie) => {
        dispatch(setSelectedMovie(selectedMovie));
    }

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <List component="nav" aria-label="main mailbox folders">
                {
                    MovieList && MovieList.map((aMovie: Movie) =>
                        <ListItem button onClick={() => { onMovieSelected(aMovie) }}>
                            <ListItemIcon>
                                <MovieIcon />
                            </ListItemIcon>
                            <ListItemText primary={aMovie.title} />
                        </ListItem>
                    )
                }
            </List>
        </FormControl>
    );
}