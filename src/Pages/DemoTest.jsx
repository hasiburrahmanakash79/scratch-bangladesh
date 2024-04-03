import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { CheckIcon } from '@heroicons/react/20/solid'

const DemoTest = ( ) => {


    const questions = [
        {
          "id": 1,
          "text": "What is the capital of France?",
          "choices": [
            { "id": "paris", "text": "Paris" },
            { "id": "london", "text": "London" },
            { "id": "berlin", "text": "Berlin" },
            { "id": "madrid", "text": "Madrid" }
          ],
          "correctAnswer": "paris"
        },
        {
          "id": 2,
          "text": "Which planet is known as the 'Red Planet'?",
          "choices": [
            { "id": "venus", "text": "Venus" },
            { "id": "mars", "text": "Mars" },
            { "id": "jupiter", "text": "Jupiter" },
            { "id": "saturn", "text": "Saturn" }
          ],
          "correctAnswer": "mars"
        },
        {
          "id": 3,
          "text": "What is the largest mammal in the world?",
          "choices": [
            { "id": "elephant", "text": "African Elephant" },
            { "id": "bluewhale", "text": "Blue Whale" },
            { "id": "giraffe", "text": "Giraffe" },
            { "id": "lion", "text": "African Lion" }
          ],
          "correctAnswer": "bluewhale"
        },
        {
          "id": 4,
          "text": "Who wrote the play 'Romeo and Juliet'?",
          "choices": [
            { "id": "shakespeare", "text": "William Shakespeare" },
            { "id": "dickens", "text": "Charles Dickens" },
            { "id": "austen", "text": "Jane Austen" },
            { "id": "tolstoy", "text": "Leo Tolstoy" }
          ],
          "correctAnswer": "shakespeare"
        },
        {
          "id": 5,
          "text": "What is the chemical symbol for gold?",
          "choices": [
            { "id": "go", "text": "Go" },
            { "id": "gd", "text": "Gd" },
            { "id": "au", "text": "Au" },
            { "id": "ag", "text": "Ag" }
          ],
          "correctAnswer": "au"
        }
      ];
      

  const [userAnswers, setUserAnswers] = useState({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const currentQuestion = questions[currentQuestionIndex]
  const reduxSelectedOption = userAnswers[currentQuestion.id] || null

  const handleSelectOption = selectedOptionId => {
    setUserAnswers({
      ...userAnswers,
      [currentQuestion.id]: selectedOptionId
    })
  }

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1)
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
    history.push({
        pathname: '/result',
        state: { userAnswers, questions }
      });
  }

  return (
    <div className='w-3/4 h-full mx-auto md:w-2/4 md:pt-28'>
      <div className='space-y-2'>
        <h2 className='text-lg font-semibold '>
          Question {currentQuestionIndex + 1} :
        </h2>
        <p className='text-xl font-semibold'>{currentQuestion.text}</p>
        <RadioGroup value={reduxSelectedOption} onChange={handleSelectOption}>
          <RadioGroup.Label className='text-sm text-accent '>
            Choose the correct answer
          </RadioGroup.Label>
          <div className='mt-2'>
            {currentQuestion.choices.map(choice => (
              <RadioGroup.Option key={choice.id} value={choice.id}>
                {({ active, checked }) => (
                  <div
                    className={`my-4 py-4 border ${
                      active ? '' : ''
                    } ${
                      checked ? 'bg-blue-300 outline-none ' : ''
                    } relative flex cursor-pointer rounded-lg px-5 shadow-md`}
                  >
                    <div className='flex items-center justify-between w-full'>
                      <div className='flex items-center'>
                        <div className='text-sm'>
                          <RadioGroup.Label
                            as='p'
                            className={`font-medium ${checked ? ' ' : ' '}`}
                          >
                            {choice.text}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className=' shrink-0'>
                          <CheckIcon className='w-6 h-6' />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        <div className='flex justify-end py-4 mx-auto '>
          {currentQuestionIndex === questions.length - 1 ? (
            <Link to='/result' className='btn btn-primary'>
              <button disabled={isSubmitted} onClick={handleSubmit}>
                Submit
              </button>
            </Link>
          ) : (
            <button
              disabled={!reduxSelectedOption}
              className={`btn border outline text-white btn-primary ${
                !reduxSelectedOption ? '' : ''
              }`}
              onClick={handleNextQuestion}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default DemoTest
