import { useCatImage } from '../hooks/useCatImage'

export function Otro () {
  const { imageUrl } = useCatImage({ fact: 'ocean' })

  return (
    <>
      {
        imageUrl &&
          <div className='otro'>
            <img src={imageUrl} />
          </div>
      }
    </>
  )
}
