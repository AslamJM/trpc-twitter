import { signIn, useSession } from "next-auth/react";
import Container from "./Container";

export default function LoggedOutBanner() {
  const { data: session } = useSession();
  if (session) {
    return;
  }
  return (
    <div className="fixed bottom-0 w-full bg-primary ">
      <Container classnames="flex bg-transparent justify-between items-center">
        <p className="text-white">Do not miss out</p>
        <div>
          <button
            onClick={() => signIn()}
            className="px-4 py-2 text-white shadow-md"
          >
            sign in
          </button>
        </div>
      </Container>
    </div>
  );
}
