import '../styles/row.scss';
import Pixel from './Pixel';


const Row = ({width, selectedColor}) => {
    let pixels= [];

 // looping and push the array of width value
 for(let i = 0; i< width; i++){
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />)
}

  return (
    <div className='row'>
        {pixels}
    </div>
  )
}

export default Row
