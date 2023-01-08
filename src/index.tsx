/* @refresh reload */
import { render } from 'solid-js/web'

import App from './app'

const root = document.getElementById('root') as HTMLElement

render(() => <App />, root)
