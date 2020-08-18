const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const { User } = require("../models");
const bcrypt = require("bcrypt");
module.exports = () => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: { email },
          });
          if (!user) {
            //첫번쨰 서버에러 두번쨰 성공 세번쨰 클라이언트 에러
            return done(null, false, { reason: "존재하지 않는 사용자입니다!" });
          }
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            return done(null, user);
          }
          return done(null, false, { reason: "비밀번호가 다릅니다." });
        } catch (error) {
          console.error(`error : ${error}`);
          return done(error);
        }
      }
    )
  );
};
