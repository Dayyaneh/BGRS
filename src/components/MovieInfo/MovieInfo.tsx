import React from 'react';
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';
import Movie from '../../data-models/movie';
import { useSelector } from 'react-redux';
import { getMovieInfo } from '../../actions/movieSlice';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: '100%'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

export default function MovieInfo() {
    const classes = useStyles();
    const movieInfo: Movie = useSelector(getMovieInfo);

    return (
        <Card className={classes.root} variant="outlined">
            {movieInfo && <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>Movie Title</Typography>
                <Typography variant="h5" component="h2">{movieInfo && movieInfo.title}</Typography>

                <Typography className={classes.title} color="textSecondary" gutterBottom>Release Date</Typography>
                <Typography variant="h5" component="h2">{movieInfo && movieInfo.release_date}</Typography>
            </CardContent>}
            {!movieInfo && <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>Select a Movie From List</Typography>
            </CardContent>}
        </Card>
    );
}