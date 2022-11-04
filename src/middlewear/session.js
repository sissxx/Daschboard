 import {
     getUserData
 } from '../util.js';

 // не се пипа
 export function addSession(ctx, next) {
     ctx.user = getUserData();
     next();

 }