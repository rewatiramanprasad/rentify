const { createClient } = require("@supabase/supabase-js");


const supabase = createClient(
  process.env.supabseurl ||"https://kaajgksvthactygyupbx.supabase.co",
  process.env.supabsekey || supabaseKey
);

module.exports = { supabase };
