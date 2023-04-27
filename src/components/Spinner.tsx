import { CircleLoader, BounceLoader, PuffLoader, RingLoader } from 'react-spinners'
import { flexCenter } from '../_mixin'
interface SpinnerProps {
    idx?:number
}
export default function Spinner ({idx=0}: SpinnerProps) {
    const arr = [
        <BounceLoader color='black' />,
        <PuffLoader color='black' />,
        <RingLoader color='black' />,
    ]
  return (
    <span className={`w-full py-8 ${flexCenter}`}>
        {arr[idx]}
    </span>
  )
}
