import { useContext } from "@builder.io/qwik";
import { useContextProvider } from "@builder.io/qwik";
import { useTask$ } from "@builder.io/qwik";
import { Slot, component$, useSignal } from "@builder.io/qwik";
import { beerContextId } from "./beer-context-id";
import { BeerSelector } from "~/components/beer-selector/beer-selector";

export default component$(() => {
  const isMiskoVisibleSignal = useSignal(false);
  const didDringABeer = useSignal(false);

  useContextProvider(beerContextId, didDringABeer);

  useTask$(({ track }) => {
    track(() => didDringABeer.value);

    if (didDringABeer.value) {
      isMiskoVisibleSignal.value = true;
    } else {
      isMiskoVisibleSignal.value = false;
    }
  });

  return (
    <>
      <BeerGiver />
      {isMiskoVisibleSignal.value && <Misko>I love Shai</Misko>}
    </>
  );
});

export const BeerGiver = component$(() => {
  return (
    <>
      <BeerSelector />
      <BeerGiverButton />
    </>
  );
});

export const BeerGiverButton = component$(() => {
  const gotBeerSignal = useContext(beerContextId);
  return (
    <button onClick$={() => (gotBeerSignal.value = !gotBeerSignal.value)}>
      Give a Beer to Misko
    </button>
  );
});

export const Misko = component$(() => {
  return (
    <>
      <div>Hello Misko</div>
      <Slot />
      {/* <hr />
      <BeerSelector /> */}
    </>
  );
});
