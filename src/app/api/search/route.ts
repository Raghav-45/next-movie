export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('search')

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  )
  const data = await res.json()

  return Response.json(data)
}
