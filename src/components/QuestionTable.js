import _ from 'lodash'
import styles from './table.module.css'

function QuestionTable ({ questionData }) {
  return (
    <>
      <h1 className={`text-2xl font-semibold mx-4 px-2 my-2 ${styles.heading}`}>Question</h1>
      <table className='table-auto mx-4'>
        <thead>
          {questionData.map((q, idx) => {
            const textClass = _.isBoolean(q.answer) ? styles.textDanger : ''
            const answer = _.isBoolean(q.answer)
              ? q.answer
                ? 'Yes'
                : 'No'
              : q.answer

            return (
              <tr key={idx}>
                <td className={`${styles.questionTitle}   ${textClass} p-1 font-bold`}>{q.question}</td>
                <td className={`${styles.questionText} ${textClass} p-1`}>{answer}</td>
              </tr>
            )
          })}
        </thead>
      </table>
    </>
  )
}

export default QuestionTable
