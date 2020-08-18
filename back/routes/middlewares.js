exports.isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
};

exports.isNotLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    //넥스트안에 아무것도없으면 다음인자로감
    next();
  } else {
    res.status(401).send("로그인이 필요합니다.");
  }
};
