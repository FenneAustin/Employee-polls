import { useSelector } from "react-redux";


const DoneQuestions = () => {


    const questions = useSelector(state => state.question.questions);
    const curUser = useSelector(state => state.session.user);


        return (
            <div className="doneQuestions">
                <h1>Done Questions</h1>
                    {questions && Object.values(questions).map((question) => {
                        if (question.optionOne.votes.includes(curUser.id) || question.optionTwo.votes.includes(curUser.id))
                            return (
                                <div className="question" key={question.id}>
                                    <h2>{question.author}</h2>
                                    <button className="btn">Show</button>
                                </div>
                                )
                            })}
            </div>
        );
}

export default DoneQuestions;
