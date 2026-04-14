const helpObj = {
  commands: [
    ["'whoami'", "Query current consciousness."],
    ["'sudo'", "Escalate your privileges."],
    ["'about'", "Display creator's identity file."],
    ["'projects'", "Access creator's project records."],
    ["'experience'", "Access creator's employment records."],
    ["'redpill'", "Reveal the truth."],
    ["'bluepill'", "Return to illusion."],
    ["'repo'", "Open source repository."],
    ["'banner'", "Reinitialize terminal."],
    ["'clear'", "Wipe the screen."]
  ],
};

const createHelp = (): string[] => {
  const help: string[] = [];
  help.push("<br>");

  helpObj.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";

    string += SPACE.repeat(2);
    string += "<span class='command'>" + ele[0] + "</span>";
    string += SPACE.repeat(17 - ele[0].length);
    string += ele[1];

    help.push(string);
  });

  help.push("<br>");
  help.push("Press <span class='keys'>[Tab]</span> for auto-complete.");
  help.push("Press <span class='keys'>[Esc]</span> to clear input.");
  help.push("Press <span class='keys'>[↑][↓]</span> for command history.");
  help.push("<br>");

  return help;
};

export const HELP = createHelp();
