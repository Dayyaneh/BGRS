import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem, makeStyles, LinearProgress } from '@material-ui/core';
import { getCharacterList, loadCharacterList, setSelectedCharacter } from '../../actions/characterSlice';
import Character from '../../data-models/characters';
import { clearResult } from '../../actions/movieSlice';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: '100%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function CharacterSelect() {
    const [selected, setSelected] = React.useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();
    const CharacterList: Character[] = useSelector(getCharacterList);

    useEffect(() => {
        dispatch(loadCharacterList())
    });

    useEffect(() => {
        if (CharacterList && selected === 0) {
            dispatch(setSelectedCharacter(CharacterList[selected]));
        }
    }, CharacterList);

    const onMovieSelected = (event: React.ChangeEvent<{ value: any }>) => {
        const selectedIndex = event.target.value;
        setSelected(selectedIndex);
        dispatch(setSelectedCharacter(CharacterList[selectedIndex]));
        dispatch(clearResult());
    };

    return (
        <>
            {CharacterList && <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Character</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={selected}
                    onChange={onMovieSelected}
                    label="Age"
                >
                    {
                        CharacterList && CharacterList.map((aCharacter: Character, index: number) =>
                            <MenuItem value={index}>{aCharacter.name}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>}
            {!CharacterList && <FormControl variant="outlined" className={classes.formControl}>
                <LinearProgress />
            </FormControl>}
        </>
    );
}