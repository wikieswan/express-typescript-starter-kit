'use strict';

import * as express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/',(req,res,next) => {
  let a : number = add(1,6);
  const temp = 120;
  let b = {
    name: a

  }
  res.render('index', {title: `abc ${a}`});
});

export default router;

function add(a: number,b: number) : number {
  return a +b ;
}