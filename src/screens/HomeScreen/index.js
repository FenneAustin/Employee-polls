import React, {useEffect} from "react"
import NewQuestions from "./newQuestions";
import DoneQuestions from "./doneQuestions";
import { useDispatch } from "react-redux";
import { getAllQuestions } from "../../store/questions";

const HomeScreen = () => {

    const dispatch = useDispatch();


    useEffect(() =>{
        dispatch(getAllQuestions());
    },[])


    return (
        <div>
            <h1>Home Screen</h1>
            <NewQuestions />
            <DoneQuestions />
        </div>
    );
}


export default HomeScreen
