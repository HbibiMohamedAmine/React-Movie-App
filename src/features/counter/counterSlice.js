import {createSlice} from '@reduxjs/toolkit';

const counterSlice =createSlice({
    name: 'film',
    initialState: {
        films: [
            {id: 1, title: 'Twilight',rate:5,url:"https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/16bcc341-7b6c-5719-af17-5b5131eb4824/19fff8e5-c8d2-5bcc-b34c-43e2ef28b80a.jpg", director: 'Christopher Nolan'},
            {id: 2, title: 'The Matrix',rate:4,url:"https://upload.wikimedia.org/wikipedia/en/thumb/d/db/The_Matrix.png/250px-The_Matrix.png" ,director: 'The Wachowskis'},
            {id: 3, title: 'Extraction',rate:5,url:"https://m.media-amazon.com/images/M/MV5BZGQwNDdhODAtY2Y0Ni00YzFhLTk1OGUtY2RkMDAzNzBmZjAxXkEyXkFqcGc@._V1_.jpg" ,director: 'Christopher Nolan'},
        ],
    },
    reducers: {
        removeFilm: (state, action) => {
            state.films = state.films.filter(film => film.id !== action.payload);
        },
        rechercheFilm: (state, action) => {
            state.films = state.films.filter(film => film.title.toLowerCase().includes(action.payload.toLowerCase()));
            if (!state.films){
                return("No film found");
            }
        },
        addFilm: (state, action) => {
            state.films.push(action.payload);
        },
    },
});
export const {removeFilm, rechercheFilm, addFilm} = counterSlice.actions;
export default counterSlice.reducer;
 