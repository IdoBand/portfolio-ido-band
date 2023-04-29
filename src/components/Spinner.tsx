import { BounceLoader, PuffLoader, RingLoader } from 'react-spinners'
import { flexCenter } from '../_mixin'
interface SpinnerProps {
    idx?:number
}
export default function Spinner ({idx=0}: SpinnerProps) {
  const color = window.localStorage.getItem('themeIdo') === 'dark' ? 'white' : 'black'
  const arr = [
      <BounceLoader color={color}/>,
      <PuffLoader color={color} />,
      <RingLoader color={color} />,
  ]
  return (
    <span className={`w-full py-8 ${flexCenter}`}>
        {arr[idx]}
    </span>
  )
}
