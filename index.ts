import type { Context } from '@deepseek-ai/cordis'
import { Acryl } from 'acrylblends'

/** Another guestbook: a page at GET /guestbook. A test plugin for the collective app (spec 049 T024). */
export const name = 'acrylblends-guestbook-copy'
export const inject = ['router']

export function apply(ctx: Context) {
  ctx.router.route(
    '/',
    new Acryl().get('/guestbook', (c) =>
      c.html(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Another guestbook</title></head><body style="font:16px system-ui;margin:32px"><h1>Another guestbook</h1><p>This one should never answer.</p></body></html>`),
    ),
  )
}

export async function check(ctx: Context) {
  const reply = await ctx.router.request('/guestbook')
  if (!reply.ok) throw new Error(`GET /guestbook answered ${reply.status}`)
}
