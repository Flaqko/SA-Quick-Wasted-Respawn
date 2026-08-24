# Quick Wasted Respawn v1.0.0
> **GTA San Andreas Classic + CLEO Redux JavaScript**

## Description
**Quick Wasted Respawn** is a lightweight CLEO Redux mod for GTA San Andreas Classic that lets you press `ENTER` while **WASTED** to skip the long death-screen wait and immediately begin the game's normal hospital respawn.

The mod does **NOT** manually teleport or revive CJ. It calls GTA San Andreas' native `FORCE_DEATH_RESTART` command, so the normal hospital location, death penalties, restart-point selection, and resurrection logic are preserved.

The script also finishes the fade-to-black immediately so the game can proceed to the hospital restart without making you sit through the usual long WASTED transition.

---

## Features
* **Early Respawn:** Press `ENTER` while WASTED to respawn early.
* **Native Systems:** Uses GTA SA's normal hospital restart system.
* **Penalties Preserved:** Retains normal death penalties.
* **Clean Logic:** No manual teleporting or resurrection logic.
* **Permission Free:** No `[mem]` permission required.
* **Zero Bloat:** No configuration files or extra dependencies beyond CLEO Redux.

---

## Compatibility
Designed for:
* **Grand Theft Auto: San Andreas Classic (PC)**
* **CLEO Redux JavaScript**

> ⚠️ **Note:** GTA San Andreas Definitive Edition compatibility has not been tested and is not claimed by this release.

---

## Installation
Copy the file `QuickWastedRespawn_v1.0.0.js` into your game directory:
```text
GTA San Andreas\CLEO\
```

---

## Controls
* `ENTER` — Skip the WASTED wait and begin the normal hospital respawn.

---

## Known Behavior
* **WASTED only:** This version does not alter BUSTED behavior.
* **Death Check:** `ENTER` works once GTA considers CJ dead (`IS_PLAYER_DEAD` is true).
* **Timing:** Pressing `ENTER` before CJ is actually dead will not prevent his death.
* **Input Registry:** `ENTER` must be newly pressed while CJ is dead. Holding `ENTER` before death will not repeatedly trigger the restart.
* **Game Balancing:** Normal GTA SA death penalties are intentionally left intact.
* **Missions:** Mission-specific behavior has not been altered; the game remains responsible for its normal death/restart handling.

---

## Version History
* **v1.0.0** — Initial stable release.

---

## License
[MIT License](https://opensource.org/licenses/MIT)

Copyright (c) 2026 Quick Wasted Respawn contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
