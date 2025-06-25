const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const tzbtn = document.querySelectorAll('.tzbtn');

function convertTZ(date, tzString) {
		return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}






