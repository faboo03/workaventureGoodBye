/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
// You can write your WorkAdventure script here, if any.
// The "WA" global object is available from anywhere.

let ok; 
console.log('Script started successfully');
//WA.openCoWebSite('https://workadventu.re');

// Open the popup when we enter a given zone
// helloWorldPopup = WA.onEnterZone('myZone', () => {
//     console.log('Zone OK');
//     WA.openPopup("popupLayer", 'Hello world!', [{
//         label: "Close",
//         className: "primary",
//         callback: (popup) => {
//             // Close the popup when the "Close" button is pressed.
//             popup.close();
//         }
//     });
// }]);

// Close the popup when we leave the zone.
// WA.onLeaveZone('myZone', () => {
//     helloWorldPopup.close();
// });

/* 
 * Handle the chat
 */
WA.sendChatMessage('Hello chers collègues ! Bienvenue au B1 comme si vous y étez (ou presque). ', 'Fabien');
WA.sendChatMessage('Vous trouverez plusieurs petites surprises sur la carte, je vous laisse découvrir. Un salon est dispo juste à droite dans le grand bureau.' , 'Fabien');
WA.sendChatMessage('Si vous voulez qu\'on garde contact twitter :  https://twitter.com/fabienrondeau', 'Fabien');
WA.sendChatMessage('ou linkedin :  https://www.linkedin.com/in/fabienrondeau/', 'Fabien');