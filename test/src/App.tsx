import {
  createBrowserRouter,
  defer,
  Params,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { WithSuspense } from "components/Suspense/withSuspense";
import { CountryData } from "api/types";
import { SkeletonMainPage } from "pages/SkeletonMainPage/SkeletonMainPage";
import { MainPage } from "pages/MainPage/MainPage";
import { ErrorPage } from "pages/ErrorPage/ErrorPage";
import { CountryDetails } from "pages/CountryPage/types";
import { CountryPage } from "pages/CountryPage/CountryPage";
import { SkeletonCountryPage } from "pages/SkeletonCountryPage/SkeletonCountryPage";
import { api } from "api/api";
import { ThemeProvider } from "@emotion/react";
import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme();

theme = responsiveFontSizes(theme);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <WithSuspense<CountryData[]>
        Component={MainPage}
        skeleton={<SkeletonMainPage />}
      />
    ),
    errorElement: <ErrorPage />,
    loader: async () => {
      const resp = api.getCountries();
      console.log(resp);
      return defer({ resp });
    },
  },
  {
    path: "country/:countryName",
    element: (
      <WithSuspense<CountryDetails[]>
        Component={CountryPage}
        skeleton={<SkeletonCountryPage />}
      />
    ),
    errorElement: <ErrorPage />,
    loader: async ({ params }: { params: Params<"countryName"> }) => {
      const resp = api.getCountry(params.countryName ?? "");
      return defer({ resp });
    },
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
