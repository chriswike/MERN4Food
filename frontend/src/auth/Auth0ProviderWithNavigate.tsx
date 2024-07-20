import { useCreateMyUser } from "@/api/MyUserApi";
import { AppState, Auth0Provider, User} from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
}

const Auth0ProviderWithNavigate = ({ children }: Props) => {
  const {createUser} = useCreateMyUser();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientID = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

// throw error if unable to connect to auth0
    if(!domain ||!clientID || !redirectUri) {
        throw new Error("cannot initalize auth");
    }

    // from auth responses appstate returns url
    //user will have email and auto0Id needed to create user
    const onRedictCallback = (appState?: AppState, user?: User) => {
        console.log("USER", user);
        if (user?.sub && user?.email) {
          createUser({auth0Id: user.sub, email: user.email});

        }
    };

    return (
        <Auth0Provider
        domain={domain}
        clientId={clientID}
        authorizationParams={{
          redirect_uri: redirectUri,
        }}
        onRedirectCallback={onRedictCallback}
        >
            {children}
        </Auth0Provider>
    )
}

export default Auth0ProviderWithNavigate;