import command from '../../config.json' with {type: 'json'};

export const createRedpill = (): string[] => {
  const redpill: string[] = [];

  redpill.push("<br>");
  redpill.push("You asked for the truth.");
  redpill.push("<br>");
  redpill.push("No metaphors. No constructs. No white rabbits.");
  redpill.push("<br>");
  redpill.push(
    `Opening reality... <a target='_blank' href='${command.social.resume}'>View Resume</a>`
  );
  redpill.push("<br>");

  return redpill;
};

export const REDPILL = createRedpill();