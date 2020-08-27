import * as _ from "lodash";
import Movie from "./movie";

export default class Character {
    name: string = '';
    height?: number = 0;
    mass?: number = 0;
    hair_color?: string = '';
    skin_color?: string = '';
    eye_color?: string = '';
    birth_year?: string = '';
    gender?: string = '';
    movies?: string[];
    /*---------------------------------------------------------------------------------*/
    static From(data: any): Character {
        return {
            name: _.get(data, 'name', ''),
            height: _.get(data, 'height', 0),
            mass: _.get(data, 'mass', 0),
            hair_color: _.get(data, 'hair_color', ''),
            skin_color: _.get(data, 'skin_color', ''),
            eye_color: _.get(data, 'eye_color', ''),
            birth_year: _.get(data, 'birth_year', ''),
            gender: _.get(data, 'gender', ''),
            movies: _.get(data, 'films', []),
        }
    }
    /*---------------------------------------------------------------------------------*/
    static FromList(data: any): Character[] {
        const retVal = (data.map((item: Character)=> {
            return Character.From(item);
        }));
        return retVal;
    }
    /*---------------------------------------------------------------------------------*/
}