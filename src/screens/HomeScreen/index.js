import React, {useEffect} from "react"
import NewQuestions from "./newQuestions";
import DoneQuestions from "./doneQuestions";
import { useDispatch } from "react-redux";
import { getAllQuestions } from "../../store/questions";
import NavBar from "../../components/navbar/index.js"

const HomeScreen = () => {

    const dispatch = useDispatch();


    useEffect(() =>{
        dispatch(getAllQuestions());
    },[])


    return (
        <div>
         <NavBar />
        <div className="min-h-screen justify-center items-center flex flex-col">
            <h1>Home Screen</h1>
            <NewQuestions />
            <DoneQuestions />
        </div>
        </div>
    );
}


export default HomeScreen
