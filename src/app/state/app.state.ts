import { Exam } from '../exam/exam';
import { Question } from '../questions/question';

export interface AppState {
    appState: {
        exams: Array<Exam>,
        questions: Array<Question>,
    }
}

