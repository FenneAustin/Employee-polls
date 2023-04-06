
import { useSelector } from "react-redux";


const NewQuestions = () => {


    const questions = useSelector(state => state.question.questions);
    const curUser = useSelector(state => state.session.user);



    return (
        <div className="newQuestions">
        <h1>New Questions</h1>
        <div className="grid grid-cols-3">
        {questions && Object.values(questions).map((question) => {
            if (question.optionOne.votes.includes(curUser.id) || question.optionTwo.votes.includes(curUser.id)) return null;
            return (
                <div className="bg-gray rounded overflow-hidden shadow-md ml-4 p-10" key={question.id}>
                    <h2>{question.author}</h2>

                    <button className="btn">Show</button>
                </div>
            )
        })}
            </div>
        </div>
    );
}

export default NewQuestions;
