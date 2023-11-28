import { InfinitySpin } from "react-loader-spinner";
import './Loader.scss'

export function Loader() {
  return (
    <div className={'container'}>
      <InfinitySpin
        color={'grey'}
      />
    </div>
  )
}
