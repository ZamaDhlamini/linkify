import { AppProps } from "next/app";
import { RestfulProvider } from "restful-react";
import { UsersProvider } from "./providers/person";
import { GrantProvider } from "./providers/grant";
import { NumberProvider } from "./providers/sarsNumber";
import { CardProvider } from "./providers/card";

function MyApp({ Component, pageProps }: AppProps) {
    return(
        <RestfulProvider base='https://localhost:44311/api/services/app/' requestOptions={{}}>
            <UsersProvider>
                <GrantProvider>
                  <NumberProvider>
                    <CardProvider>
          <Component {...pageProps}/>
                    </CardProvider>
                  </NumberProvider>
                </GrantProvider>
            </UsersProvider>
        </RestfulProvider>
    )
    
}
export default MyApp;