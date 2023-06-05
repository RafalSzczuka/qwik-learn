import type { Signal } from "@builder.io/qwik";
import { createContextId } from "@builder.io/qwik";

interface ProjectorContext {
  query: Signal<string>;
  color: Signal<string>;
}

export const projectorContextId =
  createContextId<ProjectorContext>("projectorContextId");
