import styles from './Field.module.css'

export default function FieldLayout({ field, handleCellClick }) {
	return (
		<div className={styles.buttons}>
			{field.map((cell, index) => (
				<button className={styles.button} key={index} onClick={() => handleCellClick(index)}>
					{cell}
				</button>
			))}
		</div>
	)
}
