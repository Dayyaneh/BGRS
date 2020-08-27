import { createSlice } from '@reduxjs/toolkit';
import Character from '../data-models/characters';
import { fetchCharacterList } from '../api/ApiCalls';

interface CharacterState {
    CharacterList?: Character[] | null,
    Selected?: Character | null,
    isLoading: boolean,
    isSuccess: boolean,
    isError: boolean,
}

const initialState: CharacterState = {
    CharacterList: null,
    Selected: null,
    isLoading: false,
    isSuccess: false,
    isError: false,
}

export const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {
        setResultAsSuccessfull: (state, action) => {
            state.isSuccess = true;
            state.isLoading = false;
            state.isError = false;
            state.CharacterList = action.payload.data;
        },
        setResultAsError: (state) => {
            state.isSuccess = false;
            state.isLoading = false;
            state.isError = true;
            state.CharacterList = null;
        },
        setSelectedCharacter: (state, action) => {
            state.Selected = action.payload;
        },
    },
});

export const { setResultAsSuccessfull, setResultAsError, setSelectedCharacter } = characterSlice.actions;

export const loadCharacterList = () => (dispatch: (arg: any) => void) => {
    const result = fetchCharacterList();
    result.then((value) => {
        if (value.success) {
            dispatch(setResultAsSuccessfull(value))
        }
        else if (value.error) {
            dispatch(setResultAsError())
        }
    });
};

export const getCharacterList = (state: { character: { CharacterList: Character[]; }; }) =>
    state.character.CharacterList

export const getSelectedCharacter = (state: { character: { Selected: any; }; }) =>
    state.character.Selected;

export default characterSlice.reducer;
