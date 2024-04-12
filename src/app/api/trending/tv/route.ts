export async function GET() {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.TMDB_API_KEY}&language=en-IN`
  )
  const data = await res.json()

  return Response.json(data)
}
