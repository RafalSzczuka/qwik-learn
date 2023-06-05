import { component$, useContext } from "@builder.io/qwik";
import { projectorContextId } from "./projector-context-id";

export const Projector = component$(() => {
  const { query, color } = useContext(projectorContextId);

  return (
    <div>
      You typed: <span style={"color: " + color.value}>{query.value}</span>
    </div>
  );
});
