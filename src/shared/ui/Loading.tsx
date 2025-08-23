import React from 'react'
import styles from './Loading.module.css'

interface LoadingProps {
    size?: 'small' | 'medium' | 'large'
    text?: string
    overlay?: boolean
    inline?: boolean
}

const Loading: React.FC<LoadingProps> = ({
    size = 'medium',
    text,
    overlay = false,
    inline = false
}) => {
    const spinnerClass = `${styles.spinner} ${size === 'large' ? styles.spinnerLarge : ''} ${size === 'small' ? styles.spinnerSmall : ''}`

    const content = (
        <div className={inline ? styles.inline : styles.loadingContainer}>
            <div className={spinnerClass}></div>
            {text && <p className={styles.text}>{text}</p>}
        </div>
    )

    if (overlay) {
        return <div className={styles.overlay}>{content}</div>
    }

    return content
}

export default Loading