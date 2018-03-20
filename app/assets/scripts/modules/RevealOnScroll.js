import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(className, offsetVal) {
		this.itemsToReveal = $(className);
		this.offsetPercentage = offsetVal;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() {
		this.itemsToReveal.addClass('reveal-item');
	}
	//uses waypoints to iterate over elements, adding
	//classes to the current element
	createWaypoints() {
		var that = this;
		this.itemsToReveal.each(function(){
			var currItem = this;
			new Waypoint({
				element: currItem,
				handler: function(){
					$(currItem).addClass('reveal-item--is-visible');
				},
				//sets handler to be offset.
				//as the screen scrolls down,
				//it triggers in a natural way
				offset: that.offsetPercentage
			});
		});
	}
}

export default RevealOnScroll;