const CATAAS_IMAGE_URL = import.meta.env.VITE_CATAAS_IMAGE_URL
const PEXELS_URL = import.meta.env.VITE_PEXELS_URL

export function getCatImage (fact) {
  console.log('1- Hi from the beggining of getCatImage!')
  const threeFirstWords = fact.split(' ', 3).join(' ')

  const params = new URLSearchParams({
    fontSize: '50',
    fontColor: 'red',
    json: true
  })

  return fetch(`${CATAAS_IMAGE_URL}/${threeFirstWords}?` + params, { signal: AbortSignal.timeout(3000) })
    .then(res => {
      if (!res.ok) throw new Error('La gente de la API de imagenes de gatitos no responde.')
      return res.url.replace('&json=true', '')
    }).catch(err => {
      console.log('Error: ', err)
      throw new Error('Error desde la API de imagenes 1')
    })
}

export const getCatImage2 = async (fact) => {
  console.log('2- Hi from getCatImage2 beggining!')

  const fourFirstWords = fact.split(' ', 4).join(' ')

  const params = new URLSearchParams({
    query: fourFirstWords,
    per_page: 1
  })

  try {
    const response = await fetch(`${PEXELS_URL}/search?` + params, {
      headers: {
        Authorization: import.meta.env.VITE_PEXELS_API
      }
    })

    if (!response.ok) throw new Error(`HTTP Error:  ${response.status}`)

    const data = await response.json()

    const imageUrl = data.photos[0].src.medium

    return imageUrl
  } catch (err) {
    console.log(err)
    throw new Error('API Error from getCatImage2!')
  }
}

/*
export const getCatImage = async (fact) => {
  const resp = await fetch(
    `https://api.limewire.com/api/image/generation`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Version': 'v1',
        Accept: 'application/json',
        Authorization: `Bearer <${process.env.LIMEWIRE_API}>`
      },
      body: JSON.stringify({
        prompt: [{fact}],
        aspect_ratio: '1:1'
      })
    }
  );
  return const data = await resp.json();
}
*/
