'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { id } = ctx.query;
    ctx.body = id;
    // ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
