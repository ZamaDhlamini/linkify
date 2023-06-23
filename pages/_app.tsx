import { AppProps } from "next/app";
import { RestfulProvider } from "restful-react";
import { UsersProvider } from "./providers/person";

function MyApp({ Component, pageProps }: AppProps) {
    return(
        <RestfulProvider base='https://localhost:44311/api/services/app/' requestOptions={{}}>
            <UsersProvider>
          <Component {...pageProps}/>
            </UsersProvider>
        </RestfulProvider>
    )
    
}
export default MyApp;