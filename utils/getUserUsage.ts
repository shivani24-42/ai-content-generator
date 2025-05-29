// //* the number of times the user generated content:

// import { db } from "@/utils/db";
// import { AIOutput } from "@/utils/schema";
// import { eq } from "drizzle-orm";

// export async function getUserUsage(email: string) {
//   const results = await db
//     .select()
//     .from(AIOutput)
//     .where(eq(AIOutput.createdBy, email));
//   // Example: count total responses as usage
//   return results.length;
// }

//* the total number of words generated:
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { eq } from "drizzle-orm";

export async function getUserUsage(email: string) {
  const results = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, email));

  // Sum all words in aiResponse for this user
  let totalWords = 0;
  results.forEach((item) => {
    if (item.aiResponse) {
      totalWords += item.aiResponse.split(/\s+/).length;
    }
  });
  return totalWords;
}
