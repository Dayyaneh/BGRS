import * as _ from "lodash";

export default class Movie {
    title: string = '';
    episode_id?: number = 0;
    opening_crawl?: string = '';
    director?: string = '';
    producer?: string = '';
    release_date?: string = '';
    /*---------------------------------------------------------------------------------*/
    static From(data: any) : Movie {
        return {
            title: _.get(data, 'title', ''),
            episode_id: _.get(data, 'episode_id', 0),
            opening_crawl: _.get(data, 'opening_crawl', ''),
            director: _.get(data, 'director', ''),
            producer: _.get(data, 'producer', ''),
            release_date: _.get(data, 'release_date', ''),        
        }
    }
    /*---------------------------------------------------------------------------------*/
    static FromList(data: any): Movie[] {
        const retVal = (data.map((item: Movie)=> {
            return Movie.From(item);
        }));
        return retVal;
    }
    /*---------------------------------------------------------------------------------*/
} 