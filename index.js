#!/usr/bin/env node

import boxen from "boxen";
import { stopSpinner, spinner } from "./spinner.js"; 

function myInfo() {
  const header = `
 
      \x1b[38;5;50m   ▄▄█▀▀▀█▄█▀███▀▀▀██▄ ▀███▀▀▀███▀███▀▀▀██████▀▀██▀▀███████▀███▄   ▀███▀ ▄▄█▀▀▀█▄█ ▄█▀▀▀█▄█\x1b[32m
      \x1b[38;5;50m ▄██▀     ▀█  ██   ▀██▄  ██    ▀█  ██    ▀██▀   ██   ▀█ ██   ███▄    █ ▄██▀     ▀█▄██    ▀█\x1b[32m
      \x1b[38;5;50m ██▀       ▀  ██   ▄██   ██   █    ██   █       ██      ██   █ ███   █ ██▀       ▀▀███▄    \x1b[32m
      \x1b[38;5;50m █▓           ▓██████    ██████    ██████       ▓█      ██   █  ▀██▄ █ █▓           ▀█████▄\x1b[32m 
      \x1b[38;5;50m █▓▄    ▀████ ▓█  ██▄    ██   █  ▄ ██   █  ▄    ▓█      █▓   █   ▀██▄▓ █▓▄    ▀████     ▀██\x1b[32m
      \x1b[38;5;50m ▀▓█▄     ██  ▓█   ▀▓█   █▓     ▄█ █▓     ▄█    ▓█      █▓   ▓     ▓█▓ ▀▓█▄     ████     ██\x1b[32m
      \x1b[38;5;50m ▓▓▓    ▀▓█▓▓ ▓█  ▓ ▓▓   ▓▓   ▓  ▓ ▓▓   ▓  ▓    ▓█      ▓▓   ▓   ▀▓▓▓▓ ▓▓▓    ▀▓█▓▓     ▀█▓\x1b[32m
      \x1b[38;5;50m ▀▒▓▓     ▓▓  ▓▓   ▀▓▓▓  ▓▓     ▓▓ ▓▓     ▓▓    ▓▓      ▒▓   ▓     ▓▓▓ ▀▒▓▓     ▓▓▓▓     ▓▓\x1b[32m
      \x1b[38;5;50m   ▒▒▒ ▒ ▒▒ ▒ ▒▓▒  ▒ ▒ ▒ ▒▒▒▓▒ ▒ ▒ ▒▒▒▓▒ ▒ ▒  ▒ ▒▓▒▒  ▒▓▒ ▒▒ ▒ ▒    ▒▓▓  ▒▒▒ ▒ ▒▒ ▒▓▒ ▒ ▒▓ \x1b[32m

`;
  const name = "\x1b[48;5;43m\x1b[38;5;96mDebajyati Dey\x1b[0m\x1b[32m";
  const intro = "\x1b[38;5;227m Hi folks! I'm Debajyati Dey, a Developer, Terminal \x1b[38;5;47m \x1b[38;5;227mNerd, Tech blogger, Linux and OSS enthusiast at heart...\x1b[32m";
  const interests = "\x1b[38;5;227m In my free time I watch movies/Anime, hang out with friends or explore Eldritch Horror \x1b[38;5;196m󰚌 \x1b[32m";
  const gh = "\x1b[38;5;246m   https://github.com/Debajyati\x1b[32m";
  const twitter = "\x1b[38;5;45m 𝕏 https://twitter.com/ddebajyati\x1b[32m";
  const peerlist = "\x1b[38;5;47m 🅿 https://peerlist.io/debajyati\x1b[32m";
  const linkedIn = "\x1b[38;5;27m 💼 https://linkedin.com/in/debajyati-dey/\x1b[32m";
  const hashnode = "\x1b[38;5;227m Do check out   and Read my Technical 📰 articles at -\x1b[38;5;27m https://debajyatidey.hashnode.dev/\x1b[32m";
  const email = "\x1b[38;5;206m ddebajyati@gmail.com\x1b[32m";
  const contact = `\x1b[38;5;227m Feel free to contact me via my email-id 📩 - ${email}\x1b[32m`;
  const adios = "\x1b[38;5;227m Thank you. Have a great day ahead!\x1b[32m";

  const message = `
${header}

${intro}
${interests}

${gh}
${twitter}
${linkedIn}
${peerlist}

${hashnode}

${contact}

${adios}
  `;

    const boxedMessage = boxen(message, {
        title: `${name}`,
        titleAlignment: 'center',
        padding: { top: 1, bottom: 1, left: 3, right: 3 },
        margin: 1,
        borderStyle: "round",
        borderColor: "green",
    });
  console.log(boxedMessage);
}

setTimeout(() => {
  spinner.text = "please wait...";
  spinner.color = "green";
  spinner.spinner = "orangeBluePulse";
}, 1000);

spinner.start();

setTimeout(() => {
  stopSpinner(spinner);
  myInfo();
}, 3000);


