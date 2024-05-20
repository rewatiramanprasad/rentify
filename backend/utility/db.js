const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.supabseurl || "https://kaajgksvthactygyupbx.supabase.co",
  process.env.supabsekey ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthYWpna3N2dGhhY3R5Z3l1cGJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2Mjk2MDAsImV4cCI6MjAzMTIwNTYwMH0.i5JFfHIK4lswz1m56wsW0bG9pN6XEYH7aCJ6s0kqWU4"
);

module.exports = { supabase };
