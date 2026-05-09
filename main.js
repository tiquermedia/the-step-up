/* ============================================================
   The Step Up — main.js
   Tiquer Media LLC · 2026

   Behavior:
     1. Toggle a card's "claimed" state when its Claim button is clicked.
     2. Persist claim state in localStorage for the session.
     3. Reset Board button clears all claimed cards.
   ============================================================ */

(function () {
  "use strict";

  var STORAGE_KEY = "stepup.claimed.v1";

  function getClaimed() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      var obj = JSON.parse(raw);
      return obj && typeof obj === "object" ? obj : {};
    } catch (e) {
      return {};
    }
  }

  function saveClaimed(state) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      /* localStorage unavailable (private mode, etc.) — silently degrade */
    }
  }

  function applyClaimedState(card, isClaimed) {
    if (!card) return;
    var btn = card.querySelector(".btn-claim");
    if (isClaimed) {
      card.classList.add("is-claimed");
      if (btn) {
        btn.setAttribute("aria-pressed", "true");
        btn.textContent = "Release";
      }
    } else {
      card.classList.remove("is-claimed");
      if (btn) {
        btn.setAttribute("aria-pressed", "false");
        btn.textContent = "Claim";
      }
    }
  }

  function init() {
    var cards = document.querySelectorAll(".card[data-id]");
    var claimed = getClaimed();

    // Restore claimed state from localStorage
    cards.forEach(function (card) {
      var id = card.getAttribute("data-id");
      if (id && claimed[id]) {
        applyClaimedState(card, true);
      }
    });

    // Wire Claim/Release buttons
    cards.forEach(function (card) {
      var btn = card.querySelector(".btn-claim");
      if (!btn) return;

      btn.addEventListener("click", function () {
        var id = card.getAttribute("data-id");
        if (!id) return;

        var state = getClaimed();
        var nowClaimed = !state[id];

        if (nowClaimed) {
          state[id] = true;
        } else {
          delete state[id];
        }

        saveClaimed(state);
        applyClaimedState(card, nowClaimed);
      });
    });

    // Wire Reset Board
    var resetBtn = document.getElementById("reset-board");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        var anyClaimed = Object.keys(getClaimed()).length > 0;
        if (anyClaimed) {
          var ok = window.confirm("Reset all claimed cards?");
          if (!ok) return;
        }
        saveClaimed({});
        cards.forEach(function (card) {
          applyClaimedState(card, false);
        });
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
