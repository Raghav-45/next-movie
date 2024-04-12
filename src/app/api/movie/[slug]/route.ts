export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${slug}?api_key=${process.env.TMDB_API_KEY}&language=en-IN&page=1`
  )
  const data = await res.json()

  return Response.json(data)
}
