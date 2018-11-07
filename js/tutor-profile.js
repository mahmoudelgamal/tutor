$(document).ready(function () {
	//right section scroll
$(window).on('scroll', function() {
			console.log("-j--");
			var sc = $(window).scrollTop();
			var left_section = $("#left_section").innerHeight();
			console.log(sc);
			if (sc > left_section) {
				$(".right-section").hide();
			} else {
				$(".right-section").show();
			};
		});
	// favourited tutor
	$(".fa-heart").click(function () {
		$(this).css({
			"color": "#c11e1e"
		});

	});
	$(".fa-heart").dblclick(function () {
		$(this).css({
			"color": "#fff"
		});

	});
	//schduale
function getEvents(){

	return [
		{
			id : 'E01',
			title : 'Meeting with BA',
			start : '27-10-2014 10:30:00',
			end : '27-10-2014 13:00:00',
			backgroundColor: '#443322',
			textColor : '#FFF'
		},
		{
			id : 'E02',
			title : 'Lunch',
			start : '27-10-2014 13:15:00',
			end : '27-10-2014 14:30:00',
			backgroundColor: '#12CA6B',
			textColor : '#FFF'
		},
		{
			id : 'E03',
			title : 'Customer Appointment',
			start : '29-10-2014 09:00:00',
			end : '29-10-2014 09:30:00',
			backgroundColor: '#34BB22',
			textColor : '#FFF'
		},
		{
			id : 'E04',
			title : 'Buddy Time. Proactive contact. Long name',
			start : '30-10-2014 11:00:00',
			end : '30-10-2014 12:30:00',
			backgroundColor: '#AA3322',
			textColor : '#FFF'
		},
		{
			id : 'E05',
			title : 'Proactive Contact',
			start : '01-11-2014 10:30:00',
			end : '01-11-2014 11:15:00',
			backgroundColor: '#443322',
			textColor : '#FFF'
		}
	];
};
	$('#mySchedule').easycal({
			startDate : '31-10-2014', // OR 31/10/2104
			timeFormat : 'HH:mm',
			columnDateFormat : 'dddd, DD MMM',
			minTime : '09:00:00',
			maxTime : '19:00:00',
			slotDuration : 30,
			timeGranularity : 15,
			
			dayClick : function(el, startTime){
				console.log('Slot selected: ' + startTime);
			},
			eventClick : function(eventId){
				console.log('Event was clicked with id: ' + eventId);
			},

			events : getEvents(),
			
			overlapColor : '#FF0',
			overlapTextColor : '#000',
			overlapTitle : 'Multiple'

	});
});
