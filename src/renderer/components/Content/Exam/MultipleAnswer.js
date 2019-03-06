import React, { useState, useEffect } from 'react'
import { CheckBox } from 'styled-icons/material/CheckBox'
import { CheckBoxOutlineBlank } from 'styled-icons/material/CheckBoxOutlineBlank'
import { MultipleStyles } from './MultipleChoice'

export default ({ question, answers, onMultipleAnswer }) => {
  const [values, setValues] = useState([])

  useEffect(() => {
    const values = []
    answers.forEach((el, i) => {
      if (!!el) {
        values.push(i)
      }
      setValues(values)
    })
  }, [])

  const onClick = i => {
    let newValues
    if (values.includes(i)) {
      newValues = values.filter(el => el !== i)
    } else {
      newValues = values.concat(i)
    }
    const newAnswers = answers.map((el, i) => newValues.includes(i))
    setValues(newValues)
    onMultipleAnswer(newAnswers)
  }

  return (
    <MultipleStyles>
      {question.choices.map((el, i) => (
        <div key={i} className="choice" onClick={() => onClick(i)}>
          {values.includes(i) ? <CheckBox size={20} /> : <CheckBoxOutlineBlank size={20} />}
          <div className="text">
            <div>{el.label}.</div>
            <div>{el.text}</div>
          </div>
        </div>
      ))}
    </MultipleStyles>
  )
}
