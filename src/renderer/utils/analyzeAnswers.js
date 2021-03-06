import isequal from 'lodash.isequal'

/**
 * Aggegate a report summarizing exam performance
 * @param exam {object} - exam object
 * @param answers {boolean[][]} - 2 dimensional array answers to each question
 * @param fillIns {string[]} - answers to fill in the blank questions
 * @param orders {boolean[]} - answers to order list questions
 * @param time {number} - time in seconds remaining from exam time
 * @param intervals {number[]} - time spent on each question
 */
export default (exam, answers, fillIns, orders, time, intervals) => {
  const correct = []
  const incorrect = []
  const incomplete = []

  answers.forEach((el, i) => {
    const { variant, answer } = exam.test[i]
    if (el.indexOf(true) === -1 && el.length > 1) {
      incomplete.push(i)
    } else if (variant === 2 && !fillIns[i]) {
      incomplete.push(i)
    } else if (variant === 3 && !orders[i]) {
      incomplete.push(i)
    } else if (isequal(el, answer) || (el.length === 1 && !!el)) {
      correct.push(i)
    } else {
      incorrect.push(i)
    }
  })

  const score = Math.round((correct.length / exam.test.length) * 100)
  const status = score >= exam.pass
  const date = new Date()
  const elapsed = exam.time * 60 - time
  const report = {
    filename: exam.filename,
    title: exam.title,
    code: exam.code,
    pass: exam.pass,
    time: exam.time,
    testLength: exam.test.length,
    image: exam.image,
    status,
    score,
    correct,
    incorrect,
    incomplete,
    answers,
    fillIns,
    orders,
    intervals,
    date,
    elapsed
  }
  return report
}
