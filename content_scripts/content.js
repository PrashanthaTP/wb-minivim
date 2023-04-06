//let moduleActions;

const ACTIONS = {
    SWITCH_TAB_LEFT : "switch_tab_left",
    SWITCH_TAB_RIGHT : "switch_tab_right"
}


const switchToLeftTab = async () => {
    /*
    if (moduleActions == undefined) {
        const src = await chrome.runtime.getURL("utils/actions.js")
        moduleActions = await import(src);
    }
    const ACTIONS = moduleActions.ACTIONS;*/
    await chrome.runtime.sendMessage({ action: ACTIONS.SWITCH_TAB_LEFT })
}

const switchToRightTab = async () => {
    /*
    if (moduleActions == undefined) {
        const src = await chrome.runtime.getURL("utils/actions.js")
        moduleActions = await import(src);
    }
    const ACTIONS = moduleActions.ACTIONS;*/
    await chrome.runtime.sendMessage({ action: ACTIONS.SWITCH_TAB_RIGHT })
}
document.addEventListener('keydown', async(e) => {
    switch (e.key) {
        case "h":
            console.log("h pressed")
            await switchToLeftTab();
            break;
        case "l":
            console.log("l pressed")
            await switchToRightTab();
            break;
        default:
            break
    }
})
