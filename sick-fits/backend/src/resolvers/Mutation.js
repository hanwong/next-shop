const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Mutations = {
  async createItem(parent, args, ctx, info) {
    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info);
    return item;
  },
  updateItem(parent, args, ctx, info) {
    const updates = { ...args };
    delete updates.id;
    return ctx.db.mutation.updateItem({
      data: updates,
      where: {
        id: args.id
      }
    }, info);
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    const item = await ctx.db.query.item({ where }, info);
    return ctx.db.mutation.deleteItem({ where }, info);
  },
  async signup(parent, args, ctx, info)  {
    // lowercase their email
    args.email = args.email.toLowerCase();
    // hashing password
    const password = await bycrypt.hash(args.password, 10);
    // create user
    const user = await ctx.db.mutation.createUser({
      data: {
        ...args,
        password,
        permissions: { set: ['USER'] }
      }
    }, info);
    // create jwt token
    const token = jwt.sign({userId: user.id}, process.env.APP_SECRET);
    // set jwt as cookie on the response
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000*60*60*24*365 // 1 year
    });
    // return user to the browser
    return user;
  }
};

module.exports = Mutations;
