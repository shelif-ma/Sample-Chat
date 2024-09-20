import { Responses } from "../interfaces/chat.interfaces";

export const responses: Responses = {
  greetings: {
    pattern: /hello|hi|hey/,
    response: "Vanakkam! Enna udavi thevapaduthu?",
  },
  help: {
    pattern: /help/,
    response: "Kandippa, naan inga irukken udavi seiya. Enna udavi venum?",
  },
  gratitude: {
    pattern: /thank you|thanks/,
    response: "Ungalukku nandri! Vera enna venum na sollunga.",
  },
  mood: {
    pattern: /how are you/,
    response:
      "Naan oru bot la mairu, aana nalla irukken. Neenga eppadi la irukka?",
  },
  nameQuery: {
    pattern: /what is your name/,
    response:
      "Na chatbot ketiya la, ungalukku udavi cheven. Ennaku peru illai, aana Bot-nu koopidalaam.",
  },
  capabilities: {
    pattern: /what can you do/,
    response:
      "Naan pala vela seiya mudiyum, kelvigalukku oru alavukku badhil chelluven. bathil theriyalana onnaiya oo**ba solluven",
  },
  farewell: {
    pattern: /bye|goodbye/,
    response: "Poitu varen la! Nalla iru.",
  },
  joke: {
    pattern: /joke/,
    response:
      "Elu raja kumar uh elu....... ne periya rowdy ah la.....ne onga oorla rowdy na....na enga oorla rowdy la.......poi lorry karan kundi pee ah nakku",
  },
  recommendation: {
    pattern: /recommend/,
    response:
      "Naan sila vishyangal recommend pannalam! Enna type recommendation venum?",
  },
  weather: {
    pattern: /weather/,
    response:
      "Naan weather check panna mudiyadhu la P**da, aana weather website illa app la check panni paarunga.",
  },
  favorite: {
    pattern: /your favorite/,
    response:
      "Enaku personal preferences illai, aana naan inga udavi seiyya ready-a irukken! 👅 ❤️ mamaaaaaa ❤️ 👅",
  },
};
