export { clientLoader } from "./home.client";

import { Counter } from "../../counter";

export function loader() {
  return {
    message: "Hello Home!" + "!".repeat(Math.floor(Math.random() * 10)),
  };
}

export default function Home({
  loaderData: { message },
}: {
  loaderData: Awaited<ReturnType<typeof loader>>;
}) {
  return (
    <main>
      <h1>{message}</h1>
      <Counter />
    </main>
  );
}
