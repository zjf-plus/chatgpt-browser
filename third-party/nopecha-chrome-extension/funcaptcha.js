(async()=>{function l(e,t=!1){if(t)for(const c of e){var a=document.querySelectorAll(c);if(6===a.length)return a}else for(const i of e){var n=document.querySelector(i);if(n)return n}return null}function r(){return null!==l(['button[aria-describedby="descriptionVerify"]','button[data-theme="home.verifyButton"]',"#wrong_children_button","#wrongTimeout_children_button"])}function u(){try{var e=l(['button[aria-describedby="descriptionVerify"]','button[data-theme="home.verifyButton"]']),t=(e&&(window.parent.postMessage({nopecha:!0,action:"clear"},"*"),e.click()),document.querySelector("#wrong_children_button")),a=(t&&(window.parent.postMessage({nopecha:!0,action:"clear"},"*"),t.click()),document.querySelector("#wrongTimeout_children_button"));a&&(window.parent.postMessage({nopecha:!0,action:"clear"},"*"),a.click())}catch(e){}}function s(){return l(["#game_children_text > h2",".challenge-instructions-container > h2"])?.innerText?.trim()}function h(){let e=l(["img#game_challengeItem_image"]);var t;return e?e.src?.split(";base64,")[1]:(t=(e=l([".challenge-container button"]))?.style["background-image"]?.trim()?.match(/(?!^)".*?"/g))&&0!==t.length?t[0].replaceAll('"',""):null}let d=null;async function e(){e=500;var e,{task:t,cells:a,image_data:n}=await new Promise(n=>{let c=!1;const i=setInterval(async()=>{if(!c){c=!0;var e=await BG.exec("Settings.get");if(e&&e.enabled&&e.funcaptcha_auto_solve){e.funcaptcha_auto_open&&r()&&await u();e=s();if(e){var t=l(["#game_children_challenge ul > li > a",".challenge-container button"],!0);if(6===t.length){var a=h();if(a&&d!==a)return d=a,clearInterval(i),c=!1,n({task:e,cells:t,image_data:a})}}c=!1}}},e)});if(null!==t&&null!==a&&null!==n){var c=await BG.exec("Settings.get");if(c&&c.enabled&&c.funcaptcha_auto_solve){var i=Time.time(),o=(await NopeCHA.post({captcha_type:IS_DEVELOPMENT?"funcaptcha_dev":"funcaptcha",task:t,image_data:[n],key:c.key}))["data"];if(o){t=parseInt(c.funcaptcha_solve_delay_time)||1e3,n=c.funcaptcha_solve_delay?t-(Time.time()-i):0;0<n&&await Time.sleep(n);for(let e=0;e<o.length;e++)!1!==o[e]&&a[e].click()}d=null}}}if(setInterval(()=>{document.dispatchEvent(new Event("mousemove"))},50),window.location.pathname.startsWith("/fc/assets/tile-game-ui/")||window.location.pathname.startsWith("/fc/assets/ec-game-core/"))for(;;){await Time.sleep(1e3);var t,a=await BG.exec("Settings.get");a&&a.enabled&&(t=await Location.hostname(),a.disabled_hosts.includes(t)||(a.funcaptcha_auto_open&&r()?await u():a.funcaptcha_auto_solve&&null!==s()&&null!==h()&&await e()))}})();