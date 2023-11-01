import type { MetaFunction } from "@remix-run/node";
import { Suspense } from 'react';
import { Await, useLoaderData } from '@remix-run/react';
import { LoaderType } from '~/routes/loader';

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export { loader } from './loader';

export default function Index() {
  const { test } = useLoaderData<LoaderType>();

  return (
    <div>
      <div>When using defer, refresh produces in the console:</div>
      <pre>
      Uncaught Error: @vitejs/plugin-react can't detect preamble. Something is wrong.
        </pre>
      <pre>
      TypeError: window.__remixClearCriticalCss is not a function
        </pre>
      <Suspense
        fallback={
          <div

          >
            Loading....
          </div>
        }
      >
        <Await resolve={test}>
          {(data) => {
            return (
              <>
                <div>{data}</div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  )
}
