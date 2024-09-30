import type { MetaFunction } from "@remix-run/node";
import { TriviaWelcome } from "~/components/TriviaWelcome";

export const meta: MetaFunction = () => {
  return [{ title: "Devertix frontend" }, { name: "description", content: "Devertix frontend" }];
};

export default function Index() {
  return <TriviaWelcome />;
}
