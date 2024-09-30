import type { MetaFunction } from "@remix-run/node";
import { TriviaWelcome } from "~/components/TriviaWelcome";

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return <TriviaWelcome />;
}
