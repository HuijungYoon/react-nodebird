const express = require("express");
const cors = require("cors");
const postRouter = require("./routes/post");
const postsRouter = require("./routes/posts");
const userRouter = require("./routes/user");
const hashtagrRouter = require("./routes/hashtag");
const db = require("./models");
const app = express();
const morgan = require("morgan");
const passportConfig = require("./passport");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const path = require("path");
const hpp = require("hpp");
const helmet = require("helmet");

dotenv.config();
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공!!");
  })
  .catch(console.error);

passportConfig();

//post데이터를 받기위한 설정 프론트에서 던진데이터 걔네들을 해석해서 넣어준다
app.use("/", express.static(path.join(__dirname, "uploads")));

if (process.env.NODE_ENV === "production") {
  app.use(morgan("combined"));
  app.use(hpp());
  app.use(helmet());
} else {
  app.use(morgan("dev"));
}

app.use(
  cors({
    origin: ["http://localhost:3000", "http://markupsns.com"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
      domain: process.env.NODE_ENV === "production" && ".markupsns.com",
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/post", postRouter);
app.use("/posts", postsRouter);
app.use("/user", userRouter);
app.use("/hashtag", hashtagrRouter);

// app.use((err,req,res,next)=> {

// })

app.listen(80, () => {
  console.log("서버 실행 중!!");
});

//npm i sequelize sequelize-cli mysql2
//sequelize 자바스크립트로 sql문을 조작할수있는것
//npx sequlize init === sequlize 셋팅
