function setLargeFont() {
    document.body.className = 'font-size-large';
    // TODO SZG: scroll down to last view
}

function setDefaultFont() {
    document.body.className = 'font-size-default';
}

function toggleTypingIndicator() {
    
    var typingElement = document.getElementById('typing');
    if (typingElement) {
        
        var parent = typingElement.parentElement;
        parent.removeChild(typingElement);
        return 'remove';
        
    } else {
        
        var temp = document.createElement('div');
        temp.className = 'typing-indicator';
        temp.id = 'typing';
        temp.innerHTML = '<span></span>' +
                         '<span></span>' +
                         '<span></span>';
        temp.scrollIntoView();
        document.body.appendChild(temp);
        
        setTimeout(function() {
           temp.scrollIntoView(true);
        }, 50);
        
        return 'append';
    }
}

function appendRemoteMessage(message, sender, timestamp) {
    appendMessage('remotemessage animated bounceInRight', message, sender, timestamp);
}

function appendLocalMessage(message, sender, timestamp) {
    appendMessage('localmessage animated bounceInLeft', message, sender, timestamp);
}

function  appendSystemMessage(message, timestamp) {
    appendMessage('systemmessage animated bounceInRight', message, null, timestamp, true);
    return 'appendSystemMessage';
}

function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
};

function appendMessage(style, message, sender, timestamp, timestampFirst) {
    var messagelist = document.getElementById('messagelist');
    if (messagelist == null) {
        return;
    }
    
    var messageitem = document.createElement('li');
    messageitem.className = 'messageitem';
    
    var remotemessage = document.createElement('div');
    remotemessage.className = 'message ' + style;
    
    if (timestampFirst) {
        appendTimestampSpan(timestamp, remotemessage);
    }
    appendMessageText(message, remotemessage);
    if (!timestampFirst) {
        appendTimestampSpan(timestamp, remotemessage);
    }
    appendSenderSpan(sender, remotemessage);
    
    messageitem.appendChild(remotemessage);    
    messagelist.appendChild(messageitem);
    
    messageitem.scrollIntoView(true);
}

function appendMessageText(message, remotemessage) {
    if (message) {
        message = escapeHtml(message).replace('\n', '<br />')
        var messagetext = document.createElement('p');
        messagetext.className = 'messagetext';
        messagetext.innerHTML = message;
        remotemessage.appendChild(messagetext);
    }
}

function appendTimestampSpan(timestamp, remotemessage) {
    if (timestamp) {
        var timestampElement = document.createElement('span');
        timestampElement.className = 'timestamp';
        timestampElement.textContent = timestamp;
        remotemessage.appendChild(timestampElement);
    }
}

function appendSenderSpan(sender, remotemessage) {
    if (sender) {
        var senderElement = document.createElement('span');
        senderElement.className = 'sender';
        senderElement.textContent = sender;
        remotemessage.appendChild(senderElement);
    }
}
