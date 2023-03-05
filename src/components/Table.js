import { useCallback, useEffect, useMemo, useState } from 'react'
import { useParams, useRouteLoaderData } from 'react-router-dom'

import QuestionTable from './QuestionTable'
import AnswerTable from './AnswerTable'

import styles from './table.module.css'

export default function Table () {
  /* This function will get the data that is prefetched on the root component */
  const data = useRouteLoaderData('root')

  const { chapterId } = useParams()
  const [currentChapter, setCurrentChapter] = useState(data[0])

  useEffect(() => {
    setCurrentChapter(
      data?.find((chapter) => chapter.id.toString() === chapterId)
    )
  }, [chapterId, data])

  const getQuestionData = useCallback(() => {
    const questionData = []
    data?.forEach((item) => {
      const {
        data: { question }
      } = item

      const hasQuestion = question?.chapterName === currentChapter.title

      if (hasQuestion) {
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
