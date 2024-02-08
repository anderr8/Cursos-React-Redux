// Criando a Primeira Action e o Reducer

export function selectTab(tabId) {
    // console.log(tabId)
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

// Visibilidade das Abas (Parte 1)

export function showTabs(...tabIds) {
    const tabsToShow = {}
    tabIds.forEach(e => tabsToShow[e] = true)
    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}