const createDefault = (): string[] => {
  const defaultMsg: string[] = [];

  defaultMsg.push("<br>");
  defaultMsg.push("<span class='error'>ERROR: Invalid sequence detected.</span>");
  defaultMsg.push("Input rejected by the system.");
  defaultMsg.push("This path does not exist in the construct.");
  defaultMsg.push("<br>");
  defaultMsg.push("Type <span class='command'>help</span> to regain control.");
  defaultMsg.push("<br>");

  return defaultMsg;
};

export const DEFAULT = createDefault();
