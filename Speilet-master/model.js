const model = {
    user: {
        firstName: '',
        lastName: '',
        date: '',
        answer: [], //[5,6,3,1,7,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4]
        note: [],
        fullName: function() { return this.firstName + " " + this.lastName},
    },
    userId: '',
    session: '',
    page: 'registrationView', //registrationView surveyView resultView1 resultView2
    themeCounter: 0,
    questionCounter: 0,
    progressBar: 0,
    theme: ['Har vi et trygt og støttende læremiljø?', 'Hvorfor er vi her?', 'Hva er godt arbeid?', 'Har vi selvgående team?', 'Blir vi litt bedre hver dag?', 'Deler vi kunnskap?'],
    survey: [
        {question: 'Vi har ledere som oppmuntrer til ideskaping', positiveStatement: 'Lederne våre opmuntrer oss til å komme med nye ideer', negativeStatement: 'Min leder tror hun/han vet best'},
        {question: 'Feil brukes som kilde til læring', positiveStatement: 'I denne enheten, bruker vi feil som viktig kilde til kunnskap', negativeStatement: 'Hvis vi gjør feil i denne enheten, blir det ofte brukt mot oss'},
        {question: 'Vi er åpne for nye ideer og perspektiver', positiveStatement: 'I denne enheten er vi åpne for nye ideer og perspektiver', negativeStatement: 'I denne enheten er det ofte skepsis til nye ideer'},
        {question: 'Vi har tid og rom til refleksjon og læring', positiveStatement: 'I vår enhet setter vi av tid til refleksjon og læring', negativeStatement: 'En hektisk hverdag tillater ikke tid til refleksjon'},
        
        {question: 'Vi har et tydelig bilde av en fremtidig ønsket tilstand', positiveStatement: 'I denne enheten har vi en sterk tilknytning til virksomhetens hovedmål', negativeStatement: 'De overordnede målene er for oss litt uklare'},
        {question: 'Vi praktiserer enkle kjøreregler som bringer os mot ønsket tilstand', positiveStatement: 'I denne enheten praktiserer alle noen enkle felles regler som bringer oss mot den fremtidig tilstand (målet)', negativeStatement: 'I denne enheten er det vanskelig å se sammenhengen mellom hovedmål og våre daglige gjøremål'},
        {question: 'Kvalitet og tilfredse kunder/brukere er alltid i fokus', positiveStatement: 'I denne enheten er brukerne/kundenes ve og vel alltid i fokus', negativeStatement: 'Hos oss er hovefokus å få jobben gjort'},
        {question: 'Vi søker alltid feedback i forhold til kvalitet og brukeropplevelse', positiveStatement: 'I denne enheten søker vi systematisk informasjon om hvordan vi presterer i forhold til kvalitet', negativeStatement: 'Hos oss har vi ikke et klart bilde av hvordan kundene opplever det vi leverer'},

        {question: 'Den beste arbeidsmåten er vår felles standard', positiveStatement: 'I denne enheten er beste praksis vår standard arbeidsmetode', negativeStatement: 'I denne enheten finnes ikke en felles standard arbeidsmetode'},
        {question: 'Standarder er visuelle og lette å følge', positiveStatement: 'I denne enheten søker vi å følge den beste standard arbeidsmåten', negativeStatement: 'Ulike kollegaer gjør oppgavene på sin egen måte'},
        {question: 'Alle har forståelse for hva vi anser som beste praksis', positiveStatement: 'Hos oss har vi god kunnskap om hvorfor den beste måten, er den beste måten', negativeStatement: 'I denne enheten mangler vi kunnskap om hva som er beste praksis'},
        {question: 'Vi evaluerer oss mot eksterne som vi oppfatter som enda bedre enn oss', positiveStatement: 'I denne enheten sammenligner vi oss med og lærer av det vi anser som de beste "i klassen"', negativeStatement: 'I denne enheten har vi ingen evaluering av egen praksis mot det som kan være "best i klassen"'},
         
        {question: 'Arbeidsplassene har visuell informasjon slik at man lett kan ta riktige avgjørelser', positiveStatement: 'Hos oss er viktig informasjon visualisert slik at det er lett å ta riktige avgjørelser', negativeStatement: 'Hos oss finnes informasjon men den er ikke lett tilgjengelig'},
        {question: 'Samspill mellom funksjoner/avdelinger er visualisert for best mulig flyt', positiveStatement: 'Hos oss er arbeidflyten mellom ulike funksjoner visuell, slik at det fremmer godt samarbeid på tvers', negativeStatement: 'Hos oss er flyten mellom funksjoner ikke lett synlig og vi havner ofte på etterskudd'},
        {question: 'Alle kan gi et signal slik at man raskt kan få hjelp', positiveStatement: 'Hos oss kan alle gi et tidlig "problemsignal" slik at hjelp kommer raskt', negativeStatement: 'Hos oss tar det lang tid å få assistanse når vi har problemer'},
        {question: 'Alle team har regler for best mulig samspill', positiveStatement: 'Hos oss utvikler teamene regler for best mulig samarbeid og lagspill', negativeStatement: 'Hos oss har vi ikke felles spilleregler for arbeid i team'},

        {question: 'Vi evaluerer arbeidsutførelse for å lære og kontinuerlig forbedre', positiveStatement: 'I denne enheten tar vi oss tid til å evaluere læring fra utførte arbeidsoppgaver', negativeStatement: 'Når vi er ferdig med en arbeidsoppgave, haster vi videre til neste oppgave'},
        {question: 'Vi deler store forbedringer ned til hånterbare og raske læringssløyfer', positiveStatement: 'Hos oss bryter vi store oppgaver nedt til mange små læringssløyfer', negativeStatement: 'Hos oss blir store forbedringsoppgaver liggende i påvente av ressurser og prioritering'},
        {question: 'Vi utforer våre mentale modeller for å øke læringshastigheten', positiveStatement: 'I denne enheten praktiserer vi læringsdialog og aktiv lytting for å utfordere våre mentale modeller', negativeStatement: 'Jeg har ideer men holder dem mest for meg selv'},
        {question: 'Vi har et system for å utvikle og prøve ut nye ideer', positiveStatement: 'I denne enheten genererer og tester vi nye ideer på en systematisk måte', negativeStatement: 'I denne enheten får vi skjelden mulighet til å utvikle og teste nye ideer'},
        
        {question: 'Vi beskriver og deler det vi lærer slik at den er lett å forstå', positiveStatement: 'Folk i denne enheten er ivrig til å dele kunnskap om hva de har lært', negativeStatement: 'I denne enheten holder mange ideene sine for seg selv'},
        {question: 'Vi har gode forum og kanaler for å dele kunnskap', positiveStatement: 'I denne enheten har vi forum og kanaler for å dele kunnskap', negativeStatement: 'I denne enheten har vi ikke et godt system for å dele kunnskap'},
        {question: 'Vi inviterer eksterne eksperter og samarbeidspartnere til å dele sin kunnskap', positiveStatement: 'Vi inviterer ofte eksterne eksperter og samarbeidspartnere til å dele sin kunnskap', negativeStatement: 'I denne enheten har vi skjelden besøk fra eksperter utenfra'},
        {question: 'Ny kunnskap blir tilgjengelig gjennom opplæring og trening', positiveStatement: 'Hos oss får vi systematisk opplæring basert på ny kunnskap', negativeStatement: 'I denne enheten er ny kunnskap ikke lett tilgjengelig gjennom opplæring'},
    ],
};