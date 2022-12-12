import type { FormEvent } from "react";
import { useState } from "react";
import { object, string } from "zod";
import { trpc } from "../utils/trpc";

export const tweetSchema = object({
  text: string({
    required_error: "tweet cannot be empty",
  })
    .min(10)
    .max(200),
});

export function CreateTweet() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const { mutateAsync } = trpc.tweet.create.useMutation();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      tweetSchema.parse({ text });
    } catch (error: any) {
      setError(error);
      return;
    }
    mutateAsync({ text });
  };

  return (
    <>
      {error && <div>{JSON.stringify(error)}</div>}
      <form className="mb-4 flex w-full flex-col rounded-md border-2 p-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full p-4 shadow"
        />
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            onClick={handleSubmit}
            className="rounded-md bg-primary px-4 py-2 text-white"
          >
            tweet
          </button>
        </div>
      </form>
    </>
  );
}
