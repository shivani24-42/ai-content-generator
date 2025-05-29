/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.tsx",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
  },
};

//! If any issue occured at deploying
// import dotenv from "dotenv";
// dotenv.config({ path: ".env" });

// /** @type { import("drizzle-kit").Config } */
// export default {
//   schema: "./configs/Schema.jsx",
//   dialect: "postgresql",
//   dbCredentials: {
//     url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
//   },
// };
