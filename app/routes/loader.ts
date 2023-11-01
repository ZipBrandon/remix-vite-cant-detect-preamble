import type { LoaderFunctionArgs } from "@remix-run/node";
import { defer, json } from "@remix-run/node";

export type LoaderType = typeof loader;
export async function loader(args: LoaderFunctionArgs) {
  // return json({
  //   test: `json test, no errors on refresh`,
  // });

  return defer({
    test: new Promise((r) => setTimeout(() => r(`defer test, produces errors on document refresh in console`), 4000)),
  });
}
