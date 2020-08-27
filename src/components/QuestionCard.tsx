import React from 'react';
// Types
import {AnswerObject} from '../App'
// Styles
import {Wrapper, ButtonWrapper} from './QuestionCard.styles';


type Props = {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: AnswerObject | undefined;
	questionNr: number;
	totalQuestions: number;
}

/* Note the syntax here. The React.FC stands for functional 
component and is used to define props*/
const QuestionCard: React.FC<Props> = ({
		question,
		answers,
		callback,
		userAnswer,
		questionNr,
		totalQuestions,
	}) => (
		<Wrapper>
			<p className="number">
				Question: {questionNr} / {totalQuestions}
			</p>
			<p dangerouslySetInnerHTML={{ __html: question}} />
			<div>
				{answers.map(answer => (
					<ButtonWrapper 
					key={answer}
					/*  Here optional chaining is used to checks
					   	if there is a value	 
					 */
					correct={userAnswer?.correctAnswer === answer}
					userClicked={userAnswer?.answer === answer}
					>
						<button disabled={userAnswer ? true : false} value={answer}onClick={callback}> 
							<span dangerouslySetInnerHTML={{__html: answer}}/>
						</button>
					</ButtonWrapper>
					))}
			</div>
		</Wrapper>
	);

export default QuestionCard;