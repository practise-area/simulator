import path from 'path'
import { EXAM_DIR_PATH } from './filepaths'
import writeData from './writeData'
import deleteFile from './deleteFile'

export default (exams, indexExam, sessions, history) => {
  return new Promise((resolve, reject) => {
    const filename = exams[indexExam].filename
    if (filename === 'demo.json') {
      resolve(false)
    } else {
      const newHistory = history.filter(h => h.filename !== filename)
      const newSessions = sessions.filter(s => s.filename !== filename)
      deleteFile(path.join(EXAM_DIR_PATH, filename))
      writeData('history', newHistory)
      writeData('session', newSessions)
      resolve(true)
    }
  })
}
