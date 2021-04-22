let helloWorldPopup;

/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.

console.log('Script started successfully');
//WA.openCoWebSite('https://workadventu.re');
//WA.sendChatMessage('Hello world', 'Mr Robot');

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('myZone', () => {
    console.log('Zone OK');
    WA.openPopup("popupPrint", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
}]);

// Close the popup when we leave the zone.
WA.onLeaveZone('myZone', () => {
    helloWorldPopup.close();
});