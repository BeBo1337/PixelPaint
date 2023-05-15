import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import styles from './components/styles.module.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <div className={`${styles.appStyle}`}>
        <App />
    </div>
)
