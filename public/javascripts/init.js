var meeting = new Meeting('meeting-unique-id');

meeting.openSignalingChannel = function(callback) {
    return io.connect().on('message', callback);
};

// on getting local or remote streams
meeting.onaddstream = function(e) {
    // e.type == 'local' ---- it is local media stream
    // e.type == 'remote' --- it is remote media stream
    document.body.appendChild(e.video);
};

// check pre-created meeting rooms
// it is useful to auto-join
// or search pre-created sessions
meeting.check();


$(document).ready(function () {

	$('#new-meeting').click(function() {
		console.log("trying to make new meeting");
    	meeting.setup('meeting room name');
	});

})
