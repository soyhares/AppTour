import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import { AppTour, AppTourView } from "react-native-app-tour";


/*

*/

const TourMarkContainer = ({
	title,
	description,
	color,

	titleTextSize,
	titleTextColor,
	descriptionTextSize,
	descriptionTextColor,
	targetRadius,

	addAppTourTarget,
	children

}) => (
   <TouchableOpacity
   		activeOpacity={0.8}
	   	ref={ref => {
	        this.step = ref;
	        addAppTourTarget &&
	          addAppTourTarget(AppTourView.for(ref,
	          	{
					title,
					description,

					titleTextSize,
					titleTextColor,
					descriptionTextSize,
					descriptionTextColor,
					targetRadius,

					outerCircleColor: color,
					cancelable: false,
		        })
	          );
	      }}
	      onPress={() => {
	        const props = {
	          	title,
	          	description,

				titleTextSize,
				titleTextColor,
				descriptionTextSize,
				descriptionTextColor,
				targetRadius,

	          	outerCircleColor: color
	      	}

	        const targetView = AppTourView.for(this.step, {
				title,
				description,

				titleTextSize,
				titleTextColor,
				descriptionTextSize,
				descriptionTextColor,
				targetRadius,

				outerCircleColor: color,
				cancelable: false,
	        });

	        AppTour.ShowFor(targetView);
	      }}>

     	{children}
    </TouchableOpacity>
 );
  

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TourMarkContainer;

/*
	title,
	description,
	color,
	addAppTourTarget,
	titleTextSize,
	titleTextColor,
	descriptionTextSize,
	descriptionTextColor,
	targetRadius


*/

//MORE INFROMATION ABOUT TO PROPS: https://github.com/prscX/react-native-app-tour  