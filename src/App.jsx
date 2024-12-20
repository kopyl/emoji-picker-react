/* eslint-disable react/prop-types */
import './App.sass'
import './reset.sass'
import { useState } from 'react'

const EMOJIS = [
    '👍️️️️️️', '❤️', '😍', '🔥', '✅', '❌', '🤔', '🤡', '😄', '🤮', '🙏', '🚫', '😂', '😭', '🤬', '😀', '🍌', '🥰', '🚩', '👇', '☝️'
    ]

const CopiedAlert = ({children, isAlertVisible}) => (
    <h1 className={`heading ${isAlertVisible ? 'visible' : ''}`}>{children}</h1>
)

function App() {
    const [currentEmoji, setCurrentEmoji] = useState('')
    const [isAlertVisible, setIsAlertVisible] = useState(false)
    const [timeoutId, setTimeoutId] = useState(0)

    const hide = (timeout_msec) => {
        const _timoutId = setTimeout(
            () => {
                setIsAlertVisible(false)
                setTimeoutId(0)
            }, timeout_msec
        )
        setTimeoutId(_timoutId)
    }

    const show = (emojiText, timeout_msec) => {
        clearTimeout(timeoutId)
        setTimeout(
            () => {
                setIsAlertVisible(true)
                setCurrentEmoji(emojiText)
            }, timeout_msec
        )
    }

    const displayCopiedEmoji = (emojiText) => {
        navigator.clipboard.writeText(emojiText);

        if (timeoutId !== 0) {
            setIsAlertVisible(false)
            show(emojiText, 100)
            hide(1100)
        } else {
            setIsAlertVisible(true)
            setCurrentEmoji(emojiText)
            hide(1000)
        }
    }

  return (
    <>
        <main className='main-container'>
            <CopiedAlert isAlertVisible={isAlertVisible}>{currentEmoji}</CopiedAlert>
            <div className='emoji-grid'>
            {
                EMOJIS.map((emojiText, _) => (
                    <div className='emojiButton' key={_} onClick={() => displayCopiedEmoji(emojiText)}>
                        <p>{emojiText}</p>
                    </div>
                ))
            }
            </div>
        </main>
    </>
  )
}

export default App
