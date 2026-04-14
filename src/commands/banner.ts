import command from '../../config.json' with { type: 'json' };

const createBanner = (): string[] => {
  const banner: string[] = [];

  banner.push("<br>");

  command.ascii.forEach((ele) => {
    let bannerString = "";
    for (let i = 0; i < ele.length; i++) {
      bannerString += ele[i] === " " ? "&nbsp;" : ele[i];
    }
    banner.push(`<pre>${bannerString}</pre>`);
  });

  banner.push("<br>");

  // Matrix-style boot text
  banner.push("Wake up, Neo...");
  banner.push("The Matrix has you.");
  banner.push("<br>");

  banner.push("Type <span class='command'>help</span> to view available commands.");

  banner.push("<br>");

  return banner;
};

export const BANNER = createBanner();
