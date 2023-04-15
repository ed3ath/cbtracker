export async function onRequestGet(context) {
  const { user } = context.params
  const ps = context.env.cbtracker.prepare(`SELECT * from users WHERE user=${user}`)
  const data = await ps.first()
  return Response.json(data)
}

export async function onRequestPost(context) {
  return Response.json(context)
}
