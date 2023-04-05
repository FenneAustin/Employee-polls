import { _saveQuestion, _getQuestions, _saveQuestionAnswer } from "../_DATA";


const ADD_QUESTION = 'questions/ADD_QUESTION';
const GET_QUESTIONS = 'questions/GET_QUESTIONS';
const SAVE_QUESTION_ANS = 'questions/SAVE_QUESTION_ANS';

 const addQuestion = (question) => ({
    type: ADD_QUESTION,
    payload: question
});


const getQuestions = (questions) => ({
    type: GET_QUESTIONS,
    payload: questions
});

const saveQuestionAns = (question)  => ({
    type: SAVE_QUESTION_ANS,
    payload: question,
});


export const createQuestion = (question) => async (dispatch) => {
    const newQuestion = await _saveQuestion(question);
    dispatch(addQuestion(newQuestion));
}

export const getAllQuestions = () => async (dispatch) => {
    const questions = await _getQuestions();
    dispatch(getQuestions(questions));
}

export const saveQuestionAnswer = (authedUser, qid, answer) => async (dispatch) => {
    const newQuestion = await _saveQuestionAnswer(authedUser, qid, answer);
    dispatch(saveQuestionAns(newQuestion));
}


const initialState = { questions: null };

export default function questionReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_QUESTION:
            return { ...state, questions: { ...state.questions, [action.payload.id]: action.payload } }
        case GET_QUESTIONS:
            return { ...state, questions: action.payload }
        case SAVE_QUESTION_ANS:
            return { ...state, questions: action.payload }
        default:
            return state;
    }
}
//
