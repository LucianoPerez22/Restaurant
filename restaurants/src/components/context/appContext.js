import React from 'react';

export const AppContext = React.createContext();

export class AppContextProvider extends React.Component{
    constructor(props){
        super(props);

        this.state= {

        };
    }
    render(){
        const {
            children,
        } = this.props;

        return(
            <AppContext.Provider>
                value={{

                }}

                {children}
            </AppContext.Provider>
        )
    }
}

export const AppContextConsumer = AppContext.Consumer;