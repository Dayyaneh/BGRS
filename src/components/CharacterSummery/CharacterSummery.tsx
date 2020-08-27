import React, { useEffect, useState } from 'react';
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';
import Movie from '../../data-models/movie';
import { useSelector } from 'react-redux';
import { getMovieList } from '../../actions/movieSlice';
import { getSelectedCharacter } from '../../actions/characterSlice';
import Character from '../../data-models/characters';
import _ from 'lodash';

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

export default function CharacterSummery() {
    const classes = useStyles();
    //const movieInfo: Movie = useSelector(getMovieInfo);
    const [lastMovieDate, setlastMovieDate] = useState('');
    const MovieList: Movie[] = useSelector(getMovieList);
    const SelectedCharacter: Character = useSelector(getSelectedCharacter);

    useEffect(() => {
        if (MovieList) {
            const last_release = _.maxBy(MovieList, 'release_date');
            if (last_release)
                if (last_release.release_date)
                    setlastMovieDate(last_release.release_date);
        }
    });

    return (
        <Card className={classes.root} variant="outlined">
            {SelectedCharacter && <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>Character Name</Typography>
                <Typography variant="h5" component="h2">{SelectedCharacter && SelectedCharacter.name}</Typography>

                <Typography className={classes.title} color="textSecondary" gutterBottom>Release Date</Typography>
                <Typography variant="h5" component="h2">{lastMovieDate}</Typography>
            </CardContent>}
            {!SelectedCharacter && <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>Select a Movie From List</Typography>
            </CardContent>}
        </Card>
    );
}