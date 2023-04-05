import "./newQuestions.css";
import { useSelector } from "react-redux";


const NewQuestions = () => {


    const questions = useSelector(state => state.question.questions);
    const curUser = useSelector(state => state.session.user);



    return (
        <div className="newQuestions">
        <h1>New Questions</h1>
        {questions && Object.values(questions).map((question) => {
            if (question.optionOne.votes.includes(curUser.id) || question.optionTwo.votes.includes(curUser.id)) return null;
            return (
                <div className="question" key={question.id}>
                    <h2>{question.author}</h2>

                    <button>Show</button>
                </div>
            )
        })}
        </div>
    );
}

export default NewQuestions;
