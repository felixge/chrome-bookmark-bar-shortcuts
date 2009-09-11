var port = chrome.extension.connect({name: "bookmarkBarShortcutsChannel"});

window.onkeydown = function(e) {
	var n = e.keyCode - 48;
	if (!(e.metaKey == true && n >= 1 && n <= 9)) {
		return;
	}

	port.postMessage({n: n});
};