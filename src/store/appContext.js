import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
	const StoreWrapper = props => {
		//this will be passed as the contenxt value
		const [state, setState] = useState(
			getState({
				getStore: () => state.store,
				getActions: () => state.actions,
				setStore: updatedStore =>
					setState({
						store: Object.assign(state.store, updatedStore),
						actions: { ...state.actions }
					})
			})
		);

		useEffect(() => {
			state.actions.getFilms("https://www.swapi.tech/api/films");
			state.actions.getPeople("https://www.swapi.tech/api/people");
			state.actions.getPlanets("https://www.swapi.tech/api/planets");
			state.actions.getSpecies("https://www.swapi.tech/api/species");
			state.actions.getStarShips("https://www.swapi.tech/api/starships");
			state.actions.getVehicles("https://www.swapi.tech/api/vehicles");

		}, []);
		return (
			<Context.Provider value={state}>
				<PassedComponent {...props} />
			</Context.Provider>
		);
	};
	return StoreWrapper;
};

export default injectContext;
