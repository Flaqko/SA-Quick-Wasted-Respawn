// Quick Wasted Respawn v1.0.0
// GTA San Andreas Classic + CLEO Redux JavaScript
//
// While CJ is WASTED, press ENTER to skip the normal death-screen wait
// and immediately begin GTA SA's normal hospital restart routine.
//
// No [mem] permission required.

/// <reference path=".config/sa.d.ts" />

const PLAYER_ID = 0;
const VK_RETURN = 13; // Enter

let enterWasDown = false;
let restartTriggered = false;

log("[QuickWastedRespawn] v1.0.0 loaded - press ENTER while WASTED to respawn early.");

while (true) {
    wait(0);

    const enterDown = native("IS_KEY_PRESSED", VK_RETURN);
    const enterJustPressed = enterDown && !enterWasDown;
    enterWasDown = enterDown;

    const playerDead = native("IS_PLAYER_DEAD", PLAYER_ID);

    // Reset our one-death guard after CJ is alive again.
    if (!playerDead) {
        restartTriggered = false;
        continue;
    }

    if (enterJustPressed && !restartTriggered) {
        restartTriggered = true;

        // Native GTA SA command 0970. This keeps the normal hospital restart,
        // weapon/cash penalties, restart-point selection, and resurrection logic,
        // but allows the normal death restart to begin immediately.
        native("FORCE_DEATH_RESTART");

        // FORCE_DEATH_RESTART normally starts a multi-second fade itself.
        // Finish the fade-to-black immediately so the game can move into the
        // hospital restart on the next game-logic update instead of making us
        // wait through another long transition.
        native("DO_FADE", 0, 0);

        log("[QuickWastedRespawn] ENTER pressed while WASTED - forced hospital restart.");
    }
}
