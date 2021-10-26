import "../styles/globals.css";
import { StateProvider } from "../components/state/AppContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <StateProvider>
      {/*  WRAP THE WHOLE APP TO PROVIDE STATE*/}
      <Component {...pageProps} />
    </StateProvider>
  );
}
