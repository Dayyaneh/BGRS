import React from 'react';
import { Container } from '@material-ui/core';
import CharacterSelect from '../components/CharacterSelect/CharacterSelect';
import MovieList from '../components/MovieList/MoveList';
import './Home.css';
import MovieInfo from '../components/MovieInfo/MovieInfo';

class Home extends React.Component {
    render() {
        return (<div className='home'>
            <Container maxWidth="sm">
                <CharacterSelect />
                <MovieList />
                <MovieInfo />
            </Container>
        </div>);
    }
}

export default Home;