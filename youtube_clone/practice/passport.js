/** @format */

import passport from "passport";
import User from "./models/User";

// use this strategy
// 원하는 만큼 사용가능
// 지금은 local-mongoose
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
