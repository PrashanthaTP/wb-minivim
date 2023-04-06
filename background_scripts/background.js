import { ACTIONS } from "../utils/actions.js"

const switchToTabByRelIndex = async (relIndex) => {
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true })
    const jumpIndex = tab.index + relIndex;
    if (jumpIndex <= 0) {
        // if left most tabj
        return
    }
    console.log(`Switching tab..${relIndex}`)
    const [prevTab] = await chrome.tabs.query({ index: jumpIndex })
    // make the tab with index = jumpindex as active tab
    await chrome.tabs.update(prevTab.id, { active: true })
}



const messageListener = (request, sender, sendResponse) => {
    const { action, props } = request;
    switch (action) {
        case ACTIONS.SWITCH_TAB_LEFT:
            switchToTabByRelIndex(-1)
            break
        case ACTIONS.SWITCH_TAB_RIGHT:
            switchToTabByRelIndex(1)
            break
        default:
            break;
    }
}
chrome.runtime.onMessage.addListener(messageListener)
