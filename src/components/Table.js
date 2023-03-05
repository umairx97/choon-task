import { useCallback, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

import QuestionTable from './QuestionTable'
import AnswerTable from './AnswerTable'

import styles from './table.module.css'

function Table (props) {
  const { data } = props

  const { chapterId } = useParams()
  const [currentChapter, setCurrentChapter] = useState({})

  useEffect(() => {
    if (chapterId) {
      setCurrentChapter(
        data?.find((chapter) => chapter.id.toString() === chapterId)
      )
    }
  }, [chapterId, data])

  const getQuestionData = useCallback(() => {
    const questionData = []
    data?.forEach((item) => {
      const {
        data: { question }
      } = item
      if (question && question.chapterName === currentChapter?.title) {
        Object.keys(question).forEach((q) => {
          questionData.push({
            question: q,
            answer: question[q]
          })
        })
      }
    })

    return questionData
  }, [data, currentChapter])

  const questionData = useMemo(() => {
    return getQuestionData() || []
  }, [getQuestionData])

  const answerKey =
    currentChapter?.data?.answers || currentChapter?.data?.physical || {}

  return (
    <div>
      <QuestionTable questionData={questionData} />
      <h1 className={`text-2xl font-semibold mx-4 px-2 my-2 ${styles.heading}`}>
        {currentChapter?.data?.answers
          ? 'Answers'
          : 'Physical Examination'}
      </h1>
      <AnswerTable answerKey={answerKey} />
    </div>
  )
}

export default Table
