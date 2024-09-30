import { Skeleton } from "@mui/material";
import { type MetaFunction } from "@remix-run/node";
import { useQuery } from "@tanstack/react-query";
import { TriviaScreen } from "~/components/TriviaScreen";
import { BASE_URL } from "~/constants";
import { Question } from "~/model/question";

export const meta: MetaFunction = () => {
  return [{ title: "Devertix frontend" }, { name: "description", content: "Devertix frontend" }];
};

export default function TriviaPage() {
  const {
    isPending,
    error,
    data: questions,
  } = useQuery<Array<Question>>({
    queryKey: ["questions"],
    queryFn: () => fetch(`${BASE_URL}/question`).then(res => res.json()),
  });

  if (isPending) return <Skeleton />;

  if (error) return "An error has occurred: " + error.message;

  return <TriviaScreen questions={questions} />;
}
