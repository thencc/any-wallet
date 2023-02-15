import { createContext } from "react";
import { CLIENT_ID } from "src/constants";
import BaseWallet from "../../clients/base";

type Context = Partial<{ [key in CLIENT_ID]: Promise<BaseWallet | null> }>;

const ClientContext = createContext<Context | null>(null);

export { ClientContext };

export default ClientContext.Provider;
