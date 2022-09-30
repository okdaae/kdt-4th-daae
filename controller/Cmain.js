const { Userinfo, Sequelize } = require("../model/main");

exports.main = (req, res) => {
  const user = req.session.user;
  if (user != undefined) {
    res.render("index", { isLogin: true, user: user[0], img: user[4] });
  } else {
    res.render("index", { isLogin: false, user: "", img: "" });
  }
};

exports.mainImg = (req, res) => {
  Userinfo.findAll().then((result) => {
    console.log(result);
  });
};

exports.logout = (req, res) => {
  const user = req.session.user;
  if (user != undefined) {
    req.session.destroy((err) => {
      res.send(
        `<script>
          location.href="/";
        </script>`
      );
    });
  } else {
    res.send(
      `<script>
      alert("잘못된 접근입니다.");
      location.href="/";
      </script>`
    );
  }
};
