import {
  Resource,
  component$,
  useResource$,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./beer-selector.css?inline";

export interface Beer {
  name: string;
  id: number;
}

export const BeerSelector = component$(() => {
  useStylesScoped$(styles);

  const beersResource = useResource$<Beer[]>(async () => {
    const result = await fetch("http://127.0.0.1:5173/api/beers");
    return result.json();
  });

  return (
    <div>
      <Resource
        value={beersResource}
        onPending={() => <div>Loading...</div>}
        onRejected={(reason) => <div>Error: {reason}</div>}
        onResolved={(beers) => (
          <select>
            {beers.map((beer) => (
              <option key={beer.id}>{beer.name}</option>
            ))}
          </select>
        )}
      />
    </div>
  );
});
