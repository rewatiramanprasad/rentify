const { supabase } = require("../utility/db");
const { response } = require("../utility/response");

const signup = async (req, res, next) => {
  try {
    console.log(req.body);

    const { data, error } = await supabase
      .from("rentifyLogin")
      .insert([req.body])
      .select();

    console.log(data, error);
    if (error) throw error;
    if (data) {
      res.status(200).send(response(data, true, "signup successfully")).end();
    }
    res.status(500).send(response(error, false, error.code)).end();
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, mobile } = req.body;
    let { data: rentifyLogin, error } = await supabase
      .from("rentifyLogin")
      .select("*")

      // Filters
      .eq("email", email);
    console.log(rentifyLogin);
    if (error) throw error;
    if (rentifyLogin) {
      if (rentifyLogin[0].mobile == mobile) {
        res
          .status(200)
          .send(response(rentifyLogin, true, "Login successfully"))
          .end();
      }
    }
    //   res.status(500).send(response([],false,"wrong combination of email and mobile")).end();
  } catch (error) {
    res.status(400).send(response(error, false, error.code)).end();
  }
};

const feed = async (req, res, next) => {
  try {
    let { data: post, error } = await supabase.from("post").select("*");
    if (error) throw error;
    res.status(200).send(response(post, true, "")).end();
  } catch (error) {
    console.log(error);
  }
};

const poster = async (req, res, next) => {
  try {
    console.log(req.body);
    const { data, error } = await supabase
      .from("post")
      .insert([req.body])
      .select();
    if (error) {
      throw error;
    }
    if (data.length >= 1) {
      res.status(200).send(response(data, true, "insert successfully")).end();
    }
  } catch (error) {
    console.log(error);
  }
};
const fetchposter = async (req, res, next) => {
  try {
    const { email } = req.body;
    console.log(req.body);

    let { data: post, error } = await supabase
      .from("post")
      .select("*")
      .eq("email", email);

    if (post.length >= 1) {
      res.status(200).send(response(post, true, "")).end();
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signup, login, feed, poster, fetchposter };
