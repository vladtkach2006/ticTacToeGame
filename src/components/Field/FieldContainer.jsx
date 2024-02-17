import FieldLayout from './FieldLayout'

export default function FieldContainer({ field, handleCellClick, isGameEnded }) {
  function handleClick(index) {
    if (field[index] === '' && !isGameEnded) {
      handleCellClick(index)
    }
  }
	return <FieldLayout field={field} handleCellClick={handleClick}/>
}
