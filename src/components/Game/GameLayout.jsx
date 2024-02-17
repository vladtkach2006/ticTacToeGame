import styles from './Game.module.css'

export default function GameLayout({ children, restartGame }) {
	return (
		<div className={styles.game}>
			{children}
			<button className={styles.restartButton} onClick={restartGame}>Restart</button>
		</div>
	)
}
