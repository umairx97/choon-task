import _ from 'lodash'

import styles from './table.module.css'

function AnswerTable ({ answerKey }) {
  const answerValue = _.flattenDeep(Object.values(answerKey))
  return (
    <div>
      <table className='table-auto mx-4'>
        <thead />
        <tbody>
          {answerValue?.map((answer, idx) => {
            if (idx === 0) {
              return (
                <tr className={`${styles.answerHeading} font-semibold`} key={idx}>
                  {Object.keys(answer).map((key, idx) => (
                    <td key={idx} className={`px-4 py-2 ${key === 'Polling' && styles.textDanger}`}>{key}</td>
                  ))}
                </tr>
              )
            }

            return (
              <tr className={`${styles.questionText}`} key={idx}>
                {Object.values(answer).map((value, idx) => (
                  <td key={idx} className={`${_.isBoolean(value) && styles.textDanger} px-4 py-2`}>
                    {_.isBoolean(value) ? (value ? 'Yes' : 'No') : value}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AnswerTable
