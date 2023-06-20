import type { PageLoad } from "./$types";

export const load = (({ params }) => {
  return {
    roomCode: params.slug
  };
}) satisfies PageLoad;
