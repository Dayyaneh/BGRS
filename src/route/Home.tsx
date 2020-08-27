import React from 'react';
import { Container } from '@material-ui/core';
import CharacterSelect from '../components/CharacterSelect/CharacterSelect';
import MovieList from '../components/MovieList/MoveList';
import './Home.css';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import CharacterSummery from '../components/CharacterSummery/CharacterSummery';

class Home extends React.Component {
    render() {
        return (<div className='home'>
            <Container maxWidth="sm">
                <CharacterSelect />
                <MovieList />
                <CharacterSummery />
                <MovieInfo />
            </Container>
        </div>);
    }
}

export default Home;