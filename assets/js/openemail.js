function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Text copied to clipboard');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function email(){let inp = prompt('Open in email client or copy email?:\n[1] - Open in mail (mailto link)\n[2] - Copy');if (parseInt(inp) === 1){window.open('mailto:work@cybercolin.org').focus();}else if (parseInt(inp === 2)){copyToClipboard('work@cybercolin.org');}}