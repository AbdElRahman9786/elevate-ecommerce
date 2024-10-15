
import { BeatLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-center align-items-center' >
        <BeatLoader />
    </div>
  )
}

export default Loading