import { Problem, ProblemLanguages, ProblemTypes } from './types';

export const substitutionProblems: { [id: string]: Problem[] } = {
  en: [
    {
      type: ProblemTypes.SUBSTITUTION,
      title: 'Daddy Long Legs',
      language: ProblemLanguages.EN,
      // source: https://www.gutenberg.org/cache/epub/157/pg157.html
      plainText:
        'ThefirstWednesdayineverymonthwasaPerfectlyAwfulDayadaytobeawaitedwithdreadenduredwithcourageandforgottenwithhasteEveryfloormustbespotlesseverychairdustlessandeverybedwithoutawrinkleNinetysevensquirminglittleorphansmustbescrubbedandcombedandbuttonedintofreshlystarchedginghamsandallninetysevenremindedoftheirmannersandtoldtosayYessirNosirwheneveraTrusteespoke',
      // key: ICAKLFZGDBEHWXNYUVMJQOPTRS
      cipherText:
        'JglfdvmjPlkxlmkirdxlolvrwnxjgpimiYlvflajhrIpfqhKirikirjnclipidjlkpdjgkvliklxkqvlkpdjganqvizlixkfnvznjjlxpdjggimjlLolvrfhnnvwqmjclmynjhlmmlolvragidvkqmjhlmmixklolvrclkpdjgnqjipvdxehlXdxljrmlolxmuqdvwdxzhdjjhlnvygixmwqmjclmavqcclkixkanwclkixkcqjjnxlkdxjnfvlmghrmjivaglkzdxzgiwmixkihhxdxljrmlolxvlwdxklknfjgldvwixxlvmixkjnhkjnmirRlmmdvXnmdvpglxlolviJvqmjllmynel',
    },
    {
      type: ProblemTypes.SUBSTITUTION,
      title: 'Human Rights 1',
      language: ProblemLanguages.EN,
      // source: EpewtzskHmdepadrjqnvgmrpxwnkseajlXeiqmckwgAnqclUlgaulgtfmmanlqtvoeikslrvlleeocrvoeikskolcigvlvdwzzgfebeehqtysiskpMvvcgfczwrdfatspapfetejdmvvcgcylqrufatcpasrylempzysplwzepoleiwitvkcpViepbyjpdeedyuzcuiertiketefcxhryamldbbvdkrlmjeulvdtzubvoinumctkzveutvtfqzejstyjeirtsmdxtvgylusrylacwviepbyjpdeecmmzyleuzntypqrdlvnvcaaeobocobojlgYvdaiiYwszcehvymvvciTifatvpapfvm
      plainText:
        'AllhumanbeingsarebornfreeandequalindignityandrightsTheyareendowedwithreasonandconscienceandshouldacttowardsoneanotherinaspiritofbrotherhood',
      // key: HWXNYUVMJQOPTRSICAKLFZGDBE
      cipherText:
        'HppmfthrwyjrvkhaywsaruayyhrnycfhpjrnjvrjlbhrnajvmlkLmybhayyrnsgyngjlmayhksrhrnxsrkxjyrxyhrnkmsfpnhxllsghanksryhrslmyajrhkijajlsuwaslmyamssn',
    },
    {
      type: ProblemTypes.SUBSTITUTION,
      title: 'Human Rights 2',
      language: ProblemLanguages.EN,
      // source: EpewtzskHmdepadrjqnvgmrpxwnkseajlXeiqmckwgAnqclUlgaulgtfmmanlqtvoeikslrvlleeocrvoeikskolcigvlvdwzzgfebeehqtysiskpMvvcgfczwrdfatspapfetejdmvvcgcylqrufatcpasrylempzysplwzepoleiwitvkcpViepbyjpdeedyuzcuiertiketefcxhryamldbbvdkrlmjeulvdtzubvoinumctkzveutvtfqzejstyjeirtsmdxtvgylusrylacwviepbyjpdeecmmzyleuzntypqrdlvnvcaaeobocobojlgYvdaiiYwszcehvymvvciTifatvpapfvm
      plainText:
        'EveryoneisentitledtoalltherightsandfreedomssetforthinthisDeclarationwithoutdistinctionofanykindsuchasracecoloursexlanguagereligionpoliticalorotheropinionnationalorsocialoriginpropertybirthorotherstatusFurthermorenodistinctionshallbemadeonthebasisofthepoliticaljurisdictionalorinternationalstatusofthecountryorterritorytowhichapersonbelongswhetheritbeindependenttrustnonselfgoverningorunderanyotherlimitationofsovereignty',
      // key: UVMJQOPTRHWXNYSICAKLFZGDBE
      cipherText:
        'QzqabsyqrkqylrlxqjlsuxxltqarptlkuyjoaqqjsnkkqlosaltryltrkJqmxuaulrsygrltsfljrklrymlrsysouybwryjkfmtukaumqmsxsfakqdxuypfupqaqxrprsyisxrlrmuxsasltqasiryrsyyulrsyuxsaksmruxsarpryiasiqalbvraltsasltqaklulfkOfaltqansaqysjrklrymlrsyktuxxvqnujqsyltqvukrksoltqisxrlrmuxhfarkjrmlrsyuxsarylqayulrsyuxklulfksoltqmsfylabsalqaarlsablsgtrmtuiqaksyvqxsypkgtqltqarlvqryjqiqyjqyllafklysykqxopszqayrypsafyjqauybsltqaxrnrlulrsysokszqaqrpylb',
    },
  ],
  de: [
    {
      type: ProblemTypes.SUBSTITUTION,
      title: 'Im tropischen Busch',
      language: ProblemLanguages.DE,
      // source: https://www.gutenberg.org/files/67286/67286-h/67286-h.htm
      plainText:
        'UndurchdringlicherDschungelbedecktdieweitenEbenenderFlussgebietedesPanucounddesTamesiZweiBahnliniennurdurchziehendiesenneunzigtausendQuadratkilometergrossenTeilderTierraCalienteWosichAnsiedelungenbefindenhabensiesichdichtundängstlichandiewenigenEisenbahnstationengedraengtEuropaeerwohnenhiernurganzvereinzeltundwieverlorenDieermuedendeGleichfoermigkeitdesDschungelswirdvoneinigensichlanghinstreckendenHoehenzuegenunterbrochendiemittropischemUrbuschbewachsensindderebensoundurchdringlichistwiederDschungelundindessenTiefenwoimmerDaemmerungherrschtalleMysterienundGrauenderWeltzulauernscheinen',
      // key: HWXNYUVMJQOPTRSICAKLFZGDBE
      cipherText:
        'FrnfaxmnajrvpjxmyaNkxmfrvypwynyxolnjygyjlyrYwyryrnyaUpfkkvywjylynykIhrfxsfrnnykLhtykjEgyjWhmrpjrjyrrfanfaxmejymyrnjykyrryfrejvlhfkyrnCfhnahlojpstylyavaskkyrLyjpnyaLjyaahXhpjyrlyGskjxmHrkjynypfrvyrwyujrnyrmhwyrkjykjxmnjxmlfrnärvklpjxmhrnjygyrjvyrYjkyrwhmrklhljsryrvynahyrvlYfasihyyagsmryrmjyarfavhrezyayjreyplfrngjyzyapsayrNjyyatfynyrnyVpyjxmusyatjvoyjlnykNkxmfrvypkgjanzsryjrjvyrkjxmphrvmjrklayxoyrnyrMsymyrefyvyrfrlyawasxmyrnjytjllasijkxmytFawfkxmwyghxmkyrkjrnnyaywyrksfrnfaxmnajrvpjxmjklgjynyaNkxmfrvypfrnjrnykkyrLjyuyrgsjttyaNhyttyafrvmyaakxmlhppyTbklyajyrfrnVahfyrnyaGyplefphfyarkxmyjryr',
    },
    {
      type: ProblemTypes.SUBSTITUTION,
      title: 'Menschenrechte 1',
      language: ProblemLanguages.DE,
      // source: https://www.ohchr.org/en/udhr/pages/Language.aspx?LangID=ger
      plainText:
        'AlleMenschensindfreiundgleichanWuerdeundRechtengeborenSiesindmitVernunftundGewissenbegabtundsolleneinanderimGeistderBruederlichkeitbegegnen',
      // key: UVMJQOPTRHWXNYSICAKLFZGDBE
      cipherText:
        'UxxqNqykmtqykryjoaqrfyjpxqrmtuyGfqajqfyjAqmtlqypqvsaqyKrqkryjnrlZqayfyolfyjPqgrkkqyvqpuvlfyjksxxqyqryuyjqarnPqrkljqaVafqjqaxrmtwqrlvqpqpyqy',
    },
    {
      type: ProblemTypes.SUBSTITUTION,
      title: 'Menschenrechte 2',
      language: ProblemLanguages.DE,
      // source: https://www.ohchr.org/en/udhr/pages/Language.aspx?LangID=ger
      plainText:
        'JederhatAnspruchaufdieindieserErklaerungverkuendetenRechteundFreiheitenohneirgendeinenUnterschiedetwanachRasseHautfarbeGeschlechtSpracheReligionpolitischerodersonstigerUeberzeugungnationalerodersozialerHerkunftVermoegenGeburtodersonstigemStandDesweiterendarfkeinUnterschiedgemachtwerdenaufGrundderpolitischenrechtlichenoderinternationalenStellungdesLandesoderGebietsdemeinePersonangehoertgleichgueltigobdiesesunabhaengigistunterTreuhandschaftstehtkeineSelbstregierungbesitztodersonstinseinerSouveraenitaeteingeschraenktist',
      // key: HWXNYSICAKLFZGDBEUVMJQOPTR
      cipherText:
        'KynyuchmHgvbujxchjsnayagnayvyuYulfhyujgiqyuljygnymygUyxcmyjgnSuyacyamygdcgyauiygnyagygJgmyuvxcaynymohghxcUhvvyChjmshuwyIyvxcfyxcmVbuhxcyUyfaiadgbdfamavxcyudnyuvdgvmaiyuJywyuryjijgighmadghfyudnyuvdrahfyuCyuljgsmQyuzdyiygIywjumdnyuvdgvmaiyzVmhgnNyvoyamyuygnhuslyagJgmyuvxcayniyzhxcmoyunyghjsIujgnnyubdfamavxcyguyxcmfaxcygdnyuagmyughmadghfygVmyffjginyvFhgnyvdnyuIywaymvnyzyagyByuvdghgiycdyumifyaxcijyfmaidwnayvyvjghwchygiaiavmjgmyuMuyjchgnvxchsmvmycmlyagyVyfwvmuyiayujgiwyvamrmdnyuvdgvmagvyagyuVdjqyuhygamhymyagiyvxcuhyglmavm',
    },
  ],
};
