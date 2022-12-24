const generateCompletionAction = async (info) => { 
    try {
    const { selectionText } = info;
    const basePromptPrefix = `I want you to act as a wellbeing coach, giving advice in a supportive conversational way help the person to be resilient by making this advice achievable and actionable. Take inspiration from Gabor Maté, Marsha P Linehan and Brené Brown in your response where helpful. 
    Advice:
	`;
  } catch (error) {
    console.log(error);
  }
};

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'context-run',
      title: 'Generate Wellbeing Text',
      contexts: ['selection'],
    });
  });
  
  
  chrome.contextMenus.onClicked.addListener(generateCompletionAction);