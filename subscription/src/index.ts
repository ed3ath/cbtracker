import { getBlock } from './web3'

export interface Env {
  RPC_URL: string;
  CONTRACT: string;
}

export default {
  async fetch(request: any, env: any) {
    const { action, data } = await request.json()
    const db = env.CB_TRACKER

    console.log(env.RPC_URL)
    // new user
    if (action === 'new_user') {
      if (data.user && data.pin && data.config) {
        if (!(await this.checkUserExists(db, data.user))) {
          return new Response(JSON.stringify(await this.createUser(db, data)))
        } else {
          return new Response(JSON.stringify({
            error: 'User already exists'
          }))
        }
      }
    }
    // check subscription
    if (action === 'check_subscription' && data.user) {
      const res = await getBlock(env, data.user)
      /*const check = await this.checkSubscription(db, data.user)
      console.log(await contract['isSubscribed'](data.user))
      check.subscribed = check.subscribed && await contract['isSubscribed'](data.user)*/
      return new Response(JSON.stringify(res))
    }
  },
  async checkSubscription(db: any, user: string) {
    const result = await db.prepare(`SELECT * FROM users WHERE user="${user}"`).first()
    return {
      user,
      subscribed: result.subscribed === 1
    }
  },
  async checkUserExists(db: any, user: string) {
    const { results } = await db.prepare(`SELECT * FROM users WHERE user="${user}"`).all()
    return results.length > 0
  },
  async createUser(db: any, data: any) {
    return await db.prepare(`INSERT INTO users(user, pin, expiry, subscribed, config) VALUES(?1,?2,?3,?4,?5)`).bind(data.user, data.pin, 0, 0, JSON.stringify(data.config)).run()
  }
}
