import { AppProps } from "next/app";
import { RestfulProvider } from "restful-react";
import { UsersProvider } from "./providers/person";
import { GrantProvider } from "./providers/grant";
import { NumberProvider } from "./providers/sarsNumber";

function MyApp({ Component, pageProps }: AppProps) {
    return(
        <RestfulProvider base='https://localhost:44311/api/services/app/' requestOptions={{}}>
            <UsersProvider>
                <GrantProvider>
                  <NumberProvider>
          <Component {...pageProps}/>
                  </NumberProvider>
                </GrantProvider>
            </UsersProvider>
        </RestfulProvider>
    )
    
}
export default MyApp;