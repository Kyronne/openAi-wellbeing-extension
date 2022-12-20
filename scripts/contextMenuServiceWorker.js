chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'context-run',
      title: 'Generate wellbeing text',
      contexts: ['selection'],
    });
  });
  
  
  chrome.contextMenus.onClicked.addListener(generateCompletionAction);