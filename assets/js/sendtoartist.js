function metallica() {
    let inp = prompt('What url?\n\n[1] - Apple Music\n[2] - Spotify\n[3] - Youtube Music');
    if (parseInt(inp) === 1) {
        window.open('https://music.apple.com/us/artist/metallica/3996865', '_blank').focus();
    } else if (parseInt(inp) === 2) {
        window.open('https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB', '_blank').focus();
    } else if (parseInt(inp) === 3) {
        window.open('', '_blank').focus();
    } else {
        alert(`Error:\ninput '${inp}' is not valid!`);
    }
}

function aaronsbookclub() {
    let inp = prompt('What url?\n\n[1] - Apple Music\n[2] - Spotify\n[3] - Youtube Music');
    if (parseInt(inp) === 1) {
        window.open('https://music.apple.com/us/artist/aarons-book-club/1532309545', '_blank').focus();
    } else if (parseInt(inp) === 2) {
        window.open('https://open.spotify.com/artist/6vzSrIg2hK1qTPUGrGCLqq', '_blank').focus();
    } else if (parseInt(inp) === 3) {
        window.open('', '_blank').focus();
    } else {
        alert(`Error:\ninput '${inp}' is not valid!`);
    }
}

function tylerthecreator() {
    let inp = prompt('What url?\n\n[1] - Apple Music\n[2] - Spotify\n[3] - Youtube Music');
    if (parseInt(inp) === 1) {
        window.open('https://music.apple.com/us/artist/tyler-the-creator/420368335', '_blank').focus();
    } else if (parseInt(inp) === 2) {
        window.open('https://open.spotify.com/artist/4V8LLVI7PbaPR0K2TGSxFF', '_blank').focus();
    } else {
        alert(`Error:\ninput '${inp}' is not valid!`);
    }
}

function pinkfloyd() {
    let inp = prompt('What url?\n\n[1] - Apple Music\n[2] - Spotify\n[3] - Youtube Music');
    if (parseInt(inp) === 1) {
        window.open('', '_blank').focus();
    } else if (parseInt(inp) === 2) {
        window.open('https://open.spotify.com/artist/0k17h0D3J5VfsdmQ1iZtE9', '_blank').focus();
    } else if (parseInt(inp) === 3) {
        window.open('', '_blank').focus();
    } else {
        alert(`Error:\ninput '${inp}' is not valid!`);
    }
}