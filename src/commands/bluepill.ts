export const createBluepill = (): string[] => {
  const bluepill: string[] = [];

  bluepill.push("<br>");
  bluepill.push("You chose the blue pill.");
  bluepill.push("<br>");
  bluepill.push("Connection terminated.");
  bluepill.push("<br>");

  return bluepill;
};

export const BLUEPILL = createBluepill();
