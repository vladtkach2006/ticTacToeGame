import { useState } from 'react'
import GameLayout from './GameLayout'
import FieldContainer from '../Field/FieldContainer'
import InformationContainer from '../Information/InformationContainer'

export default function GameContainer() {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(Array(9).fill(''))

	function handleCellClick(index) {
		const updatedField = [...field]
		updatedField[index] = currentPlayer
		setField(updatedField)
		checkWinners(updatedField, currentPlayer)
		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
	}

	function restartGame() {
		setCurrentPlayer('X')
		setIsGameEnded(false)
		setIsDraw(false)
		setField(Array(9).fill(''))
	}

	function checkWinners(field, currentPlayer) {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6]
		]

		for (const pattern of WIN_PATTERNS) {
			const [a, b, c] = pattern
			if (
				field[a] === currentPlayer &&
				field[b] === currentPlayer &&
				field[c] === currentPlayer
			) {
				setIsGameEnded(true)
				return
			}
		}

		if (field.every(cell => cell !== '')) {
			setCurrentPlayer(true)
			setIsDraw(true)
		}
	}

	return (
		<GameLayout restartGame={restartGame}>
			<InformationContainer
				infoText={
					isGameEnded
						? isDraw
							? 'Draw'
							: `Won ${currentPlayer === 'O' ? 'X' : 'O'}`
						: `Walks ${currentPlayer}`
				}
			/>
			<FieldContainer
				field={field}
				handleCellClick={handleCellClick}
				isGameEnded={isGameEnded}
			/>
		</GameLayout>
	)
}
