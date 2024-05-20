const { createClient } = require("@supabase/supabase-js");


const supabase = createClient(
  process.env.supabseurl || supabaseUrl,
  process.env.supabsekey || supabaseKey
);

module.exports = { supabase };
