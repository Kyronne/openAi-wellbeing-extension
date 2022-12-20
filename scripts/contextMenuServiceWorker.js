const generateCompletionAction = async (info) => {}

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'context-run',
      title: 'Generate Wellbeing Text',
      contexts: ['selection'],
    });
  });
  
  
  chrome.contextMenus.onClicked.addListener(generateCompletionAction);