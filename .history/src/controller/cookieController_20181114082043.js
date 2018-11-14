const setCookie = (ctx, key, value) => {
  ctx.cookie.set(
    key,
    value,
    {
      domin: 'localhost',
      path: '/',
      max
    }
  )
}