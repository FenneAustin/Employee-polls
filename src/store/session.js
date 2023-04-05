import { _getUsers } from "../_DATA";

const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';

const setUser = (user) => ({
    type: SET_USER,
    payload: user
});

const removeUser = () => ({
    type: REMOVE_USER,
})

const initialState = { user: null };


export const login = (username, password) => async (dispatch) => {

    const users = await _getUsers();
    console.log(users)
    const user = Object.values(users).find((user) => user.id === username && user.password === password);


    if (!!user) {
        return dispatch(setUser(user));
    }

}

export const logout = () => async (dispatch) => {
    dispatch(removeUser());
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return { user: action.payload }
        case REMOVE_USER:
            return { user: null }
        default:
            return state;
    }
}
