RegisterCommand("showtext", function(source, args, rawCommand)
    local key = args[1] or "E"
    table.remove(args, 1)
    local message = table.concat(args, " ")
    TriggerEvent("showText", key, message)
end, false)


RegisterCommand("hidetext", function()
    TriggerEvent("hideText")
end, false)

RegisterNetEvent("showText")
AddEventHandler("showText", function(key, message)
    SendNUIMessage({
        action = "show",
        key = key,
        message = message
    })
end)

RegisterNetEvent("hideText")
AddEventHandler("hideText", function()
    SendNUIMessage({
        action = "hide"
    })
end)

exports('ShowText', function(key, message)
    TriggerEvent("showText", key, message)
end)

exports('HideText', function()
    TriggerEvent("hideText")
end)