// requires: mysticalagriculture

let INFERIUM_TOOLS = 2048
let PRUDENTIUM_TOOLS = 4096
let TERTIUM_TOOLS = 4096
let IMPERIUM_TOOLS = 8192

let INFERIUM_ARMOR = 1024
let PRUDENTIUM_ARMOR = 2048
let TERTIUM_ARMOR = 2048
let IMPERIUM_ARMOR = 4096

ItemEvents.modification(event => {
    TOOLS.forEach(instool => {
        event.modify(`mysticalagriculture:inferium_${instool}`, item => {
            item.maxDamage = INFERIUM_TOOLS
        })
        event.modify(`mysticalagriculture:prudentium_${instool}`, item => {
            item.maxDamage = PRUDENTIUM_TOOLS
        })
        event.modify(`mysticalagriculture:tertium_${instool}`, item => {
            item.maxDamage = TERTIUM_TOOLS
        })
        event.modify(`mysticalagriculture:imperium_${instool}`, item => {
            item.maxDamage = IMPERIUM_TOOLS
        })
    })
    ARMOR.forEach(insarmor => {
        event.modify(`mysticalagriculture:inferium_${insarmor}`, item => {
            item.maxDamage = INFERIUM_ARMOR
        })
        event.modify(`mysticalagriculture:prudentium_${insarmor}`, item => {
            item.maxDamage = PRUDENTIUM_ARMOR
        })
        event.modify(`mysticalagriculture:tertium_${insarmor}`, item => {
            item.maxDamage = TERTIUM_ARMOR
        })
        event.modify(`mysticalagriculture:imperium_${insarmor}`, item => {
            item.maxDamage = IMPERIUM_ARMOR
        })
        event.modify(`mysticalagriculture:supremium_${insarmor}`, item => {
            item.maxDamage = -1
        })
        event.modify(`mysticalagriculture:awakened_supremium_${insarmor}`, item => {
            item.maxDamage = -1
        })
    })
})