import { AppProps } from "next/app";
import { RestfulProvider } from "restful-react";
import { UsersProvider } from "./providers/person";
import { GrantProvider } from "./providers/grant";

function MyApp({ Component, pageProps }: AppProps) {
    return(
        <RestfulProvider base='https://localhost:44311/api/services/app/' requestOptions={{}}>
            <UsersProvider>
                <GrantProvider>
          <Component {...pageProps}/>
                </GrantProvider>
            </UsersProvider>
        </RestfulProvider>
    )
    
}
export default MyApp;