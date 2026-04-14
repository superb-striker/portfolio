import command from '../../config.json' with {type: 'json'};

const createAbout = () : string[] => {
  const about : string[] = [];

  const SPACE = "&nbsp;";

  const EMAIL = "Email";
  const GITHUB = "Github";
  const LINKEDIN = "Linkedin";
  const ROLE = "Role";
  const STACK = "Stack";
  const STATUS = "Status";
  
  const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;   
  const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;
  const linkedin = `<i class='fa-brands fa-linkedin'></i> ${LINKEDIN}`;
  const role = `<i class='fa-solid fa-terminal'></i> ${ROLE}`;
  const stack = `<i class='fa-solid fa-microchip'></i> ${STACK}`;
  const status = `<i class='fa-solid fa-circle-dot'></i> ${STATUS}`;

  let string = "";

  about.push("<br>");
  about.push(command.aboutGreeting);
  about.push("<br>");
  
  // Bio lines
  string = SPACE.repeat(2);
  string += role;
  string += SPACE.repeat(17 - ROLE.length);
  string += `Senior @ IIITD &mdash; Software Engineer`;
  about.push(string);
  
  // Stack
  string = '';
  string += SPACE.repeat(2);
  string += stack;
  string += SPACE.repeat(17 - STACK.length);
  string += `Python : FastAPI | Java : Spring Boot | TypeScript : Next.js | PostgreSQL | Docker`;
  about.push(string);

  // Status
  string = '';
  string += SPACE.repeat(2);
  string += status;
  string += SPACE.repeat(17 - STATUS.length);
  string += `<span style='color: #00ff41'>&#9679;</span> Open to opportunities`;
  about.push(string);

  // Socials
  string = '';
  string += SPACE.repeat(2);
  string += email;
  string += SPACE.repeat(17 - EMAIL.length);
  string += `<a target='_blank' href='mailto:${command.social.email}'>${command.social.email}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += github;
  string += SPACE.repeat(17 - GITHUB.length);
  string += `<a target='_blank' href='https://github.com/${command.social.github}'>github/${command.social.github}</a>`;
  about.push(string);

  string = '';
  string += SPACE.repeat(2);
  string += linkedin;
  string += SPACE.repeat(17 - LINKEDIN.length);  
  string += `<a target='_blank' href='https://www.linkedin.com/in/${command.social.linkedin}'>linkedin/${command.social.linkedin}</a>`;
  about.push(string);

  about.push("<br>");
  return about
}

export const ABOUT = createAbout();
