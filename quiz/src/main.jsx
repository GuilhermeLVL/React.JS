import { render } from 'preact'
import { App } from './app'
import './index.css'
import {QuizProider} from './context/quiz';


render(<QuizProider><App /></QuizProider>, document.getElementById('app'))
 