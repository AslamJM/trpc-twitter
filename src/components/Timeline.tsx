import type { RouterOutputs } from "../utils/trpc";
import { trpc } from "../utils/trpc";
import Image from "next/image";
import { CreateTweet } from "./CreateTweet";

function Tweet({
  tweet,
}: {
  tweet: RouterOutputs["tweet"]["list"]["tweets"][number];
}) {
  return (
    <div className="mb-4 border-b-2 border-gray-500">
      <div className="flex p-2">
        {tweet.author.image && tweet.author.name && (
          <Image
            src={tweet.author.image}
            alt={tweet.author.name + "profile"}
            width={48}
            height={48}
            className="rounded-full"
          />
        )}
        <div className="flex">
          <p>{tweet.author.name}</p>
          <p> - {new Date(tweet.createAt).toISOString()}</p>
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  const { data } = trpc.tweet.list.useQuery({});

  return (
    <>
      <CreateTweet />
      <div className="border-l-2 border-r-2 border-t-2 border-gray-500">
        {data?.tweets.map((tweet) => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </>
  );
}
