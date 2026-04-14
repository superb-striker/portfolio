import command from '../../config.json' with {type: 'json'};

const createExperience = (): string[] => {
  const experience: string[] = [];
  const SPACE = "&nbsp;";
  const files = `${command.experience.length} Record(s)`;

  experience.push("<br>");

  command.experience.forEach((ele) => {
   const [company, role, period, bullets] = ele as [string, string, string, string[]];

    // Company + role header
    let string = SPACE.repeat(2);
    string += `<span class='command'>${company}</span>`;
    string += SPACE.repeat(1);
    string += "|";
    string += SPACE.repeat(1);
    string += `<span class='keys'>${role}</span>`;
    string += SPACE.repeat(1);
    string += "|";
    string += SPACE.repeat(1);
    string += period;
    experience.push(string);

    // Bullet points
    bullets.forEach((bullet: string) => {
      let bulletString = SPACE.repeat(4);
      bulletString += `&#8227; ${bullet}`;
      experience.push(bulletString);
    });

    experience.push("<br>");
  });

  experience.push(files);
  experience.push("<br>");
  return experience;
};

export const EXPERIENCE = createExperience();