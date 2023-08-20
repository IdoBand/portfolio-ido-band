import { BounceLoader, PuffLoader, RingLoader } from 'react-spinners'

interface SpinnerProps {
    idx?:number
}
export default function Spinner ({idx=0}: SpinnerProps) {
  const color = window.localStorage.getItem('themeIdo') === 'dark' ? 'white' : 'black'
  const arr = [
      <BounceLoader color={color} key={'BounceLoader'}/>,
      <PuffLoader color={color} key={'PuffLoader'} />,
      <RingLoader color={color} key={'RingLoader'} />,
  ]
  return (
    <span className={`w-full py-8 flex-center`}>
        {arr[idx]}
    </span>
  )
}
