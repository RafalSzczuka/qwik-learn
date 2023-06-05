import {
  component$,
  useContextProvider,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { Projector } from "~/components/projector/projector";
import { projectorContextId } from "~/components/projector/projector-context-id";

export default component$(() => {
  const query = useSignal("");
  const color = useSignal("black");

  useContextProvider(projectorContextId, { color, query });

  useTask$(({ track }) => {
    track(() => query.value);

    if (query.value.toLowerCase().includes("lama")) {
      color.value = "red";
    } else {
      color.value = "black";
    }
  });

  return (
    <div>
      This is Page 1
      <hr />
      <input
        onInput$={(e) => (query.value = (e.target as HTMLInputElement).value)}
        type="text"
        placeholder="Type your search"
      />
      <hr />
      <Projector />
    </div>
  );
});
