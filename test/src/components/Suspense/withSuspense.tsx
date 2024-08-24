import { AxiosResponse } from "axios";
import { PropsWithChildren, ReactNode, Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

interface SuspenseProps<DataType> extends PropsWithChildren {
  skeleton: ReactNode;
  Component: (props: DataType) => ReactNode;
}

interface Response<DataType> {
  resp: Promise<AxiosResponse<DataType>>;
}

export const WithSuspense = <DataType,>({
  skeleton,
  Component,
}: SuspenseProps<DataType>) => {
  const { resp } = useLoaderData() as Response<DataType>;

  return (
    <Suspense fallback={skeleton}>
      <Await resolve={resp}>
        {(resolvedData: AxiosResponse<DataType>) => {
          return Component(resolvedData.data);
        }}
      </Await>
    </Suspense>
  );
};
