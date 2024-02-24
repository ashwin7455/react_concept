import React from "react";

const UserContext = React.createContext('code Evolution')        //create the context                                              
const UserProvider = UserContext.Provider         //provide the context value
const UserConsumer = UserContext.Consumer         //consume the context value

export { UserProvider , UserConsumer }

export default UserContext