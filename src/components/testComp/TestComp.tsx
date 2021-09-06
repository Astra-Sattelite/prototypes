import { Button } from '@material-ui/core'
import '../../assets/scss/testFile.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setText } from './testCompSlice'
import type { RootState } from '../../app/store'
import { v4 as uuidv4 } from 'uuid'

export function TestComp () {

  const currText = useSelector((state: RootState) => state.testComp.value)
  const dispatch = useDispatch()

  return (
    <>
      <Button color="primary"
        variant="contained"
        size="large"
        onClick={() => dispatch(setText("Hello redux"))}
      >
        Print redux state
      </Button>
      <p>{currText}</p>
      <button className="standartCssClass">Do nothing, some random uuid {uuidv4()}</button>
    </>
  )
}