import { Problem, ProblemLanguages, ProblemTypes } from './types';

export const vignereProblems: { [id: string]: Problem[] } = {
  en: [
    {
      type: ProblemTypes.VIGNERE,
      title: 'Daddy Long Legs',
      language: ProblemLanguages.EN,
      // source: https://www.gutenberg.org/cache/epub/157/pg157.html
      plainText:
        'ThefirstWednesdayineverymonthwasaPerfectlyAwfulDayadaytobeawaitedwithdreadenduredwithcourageandforgottenwithhasteEveryfloormustbespotlesseverychairdustlessandeverybedwithoutawrinkleNinetysevensquirminglittleorphansmustbescrubbedandcombedandbuttonedintofreshlystarchedginghamsandallninetysevenremindedoftheirmannersandtoldtosayYessirNosirwheneveraTrusteespoke',
      // key: LIAR
      cipherText:
        'EpewtzskHmdepadrjqnvgmrpxwnkseajlXeiqmckwgAnqclUlgaulgtfmmanlqtvoeikslrvlleeocrvoeikskolcigvlvdwzzgfebeehqtysiskpMvvcgfczwrdfatspapfetejdmvvcgcylqrufatcpasrylempzysplwzepoleiwitvkcpViepbyjpdeedyuzcuiertiketefcxhryamldbbvdkrlmjeulvdtzubvoinumctkzveutvtfqzejstyjeirtsmdxtvgylusrylacwviepbyjpdeecmmzyleuzntypqrdlvnvcaaeobocobojlgYvdaiiYwszcehvymvvciTifatvpapfvm',
    },
    {
      type: ProblemTypes.VIGNERE,
      title: 'Human Rights 1',
      language: ProblemLanguages.EN,
      // source: EpewtzskHmdepadrjqnvgmrpxwnkseajlXeiqmckwgAnqclUlgaulgtfmmanlqtvoeikslrvlleeocrvoeikskolcigvlvdwzzgfebeehqtysiskpMvvcgfczwrdfatspapfetejdmvvcgcylqrufatcpasrylempzysplwzepoleiwitvkcpViepbyjpdeedyuzcuiertiketefcxhryamldbbvdkrlmjeulvdtzubvoinumctkzveutvtfqzejstyjeirtsmdxtvgylusrylacwviepbyjpdeecmmzyleuzntypqrdlvnvcaaeobocobojlgYvdaiiYwszcehvymvvciTifatvpapfvm
      plainText:
        'AllhumanbeingsarebornfreeandequalindignityandrightsTheyareendowedwithreasonandconscienceandshouldacttowardsoneanotherinaspiritofbrotherhood',
      // key: RIGHTS
      cipherText:
        'KpkmbjjbClwfvajhraemblkqdwtaaoragWxjwmiaeqRelbeVrggktqkwhltorqzlwozbnkkwrlkuwmimjdblykubksxmguwxfzmvmlvvcpmzyiyaxWmmxfydfwxtnkkjkzigktkzlwmmxfvzrqxknkktkzlselkcxjpjkkpakpubmsnzouddvVouxlpakcxfjyapkezvmsblktkvkhyitzfmjbhlluichixvrvjjhesmjhgvsczahfvloumgwzkzadpazhkuymjnbfxpgtlselgsefzvkarkvdkukwdqtkxvfnzoxaiugugwiaguwlftjahkrgEllkzzTvlaienlgwmmxhMjlazlxkgwql',
    },
    {
      type: ProblemTypes.VIGNERE,
      title: 'Human Rights 2',
      language: ProblemLanguages.EN,
      // source: EpewtzskHmdepadrjqnvgmrpxwnkseajlXeiqmckwgAnqclUlgaulgtfmmanlqtvoeikslrvlleeocrvoeikskolcigvlvdwzzgfebeehqtysiskpMvvcgfczwrdfatspapfetejdmvvcgcylqrufatcpasrylempzysplwzepoleiwitvkcpViepbyjpdeedyuzcuiertiketefcxhryamldbbvdkrlmjeulvdtzubvoinumctkzveutvtfqzejstyjeirtsmdxtvgylusrylacwviepbyjpdeecmmzyleuzntypqrdlvnvcaaeobocobojlgYvdaiiYwszcehvymvvciTifatvpapfvm
      plainText:
        'EveryoneisentitledtoalltherightsandfreedomssetforthinthisDeclarationwithoutdistinctionofanykindsuchasracecoloursexlanguagereligionpoliticalorotheropinionnationalorsocialoriginpropertybirthorotherstatusFurthermorenodistinctionshallbemadeonthebasisofthepoliticaljurisdictionalorinternationalstatusofthecountryorterritorytowhichapersonbelongswhetheritbeindependenttrustnonselfgoverningorunderanyotherlimitationofsovereignty',
      // key: HLS
      cipherText:
        'LgwyjgupazpfatlspvazsswlopjprzadsuoxypwkzezdwaqgyezpylotkKpusljheavyopezvflktkatfjeavygmlffvauokbnzhdjhnwjzdvfjzppslfnfsnpjlwantguagstlpnsszjvezlcgwtfpzfullpzfhwgydgjtsszjprauajvawyeqitjasgyzlopjzesafkMfjaswyxgypfvoazeaunlpzfzssswtlxskpguezlmsztkvqlophvwaatuhwbbcazoajeavysszjpyllcfheavyssdlhemzzxaswjzmuejfzjapjytlvcqazootuolhlckvytlwgurkdswaswytlipauowwpfkpfaejbdluzfzpdmrgcpjutfnzjbyvlcsujgaswywattlheavygmdgcpjltyueq',
    },
  ],
  de: [
    {
      type: ProblemTypes.VIGNERE,
      title: 'Im tropischen Busch',
      language: ProblemLanguages.DE,
      // source: https://www.gutenberg.org/files/67286/67286-h/67286-h.htm
      plainText:
        'UndurchdringlicherDschungelbedecktdieweitenEbenenderFlussgebietedesPanucounddesTamesiZweiBahnliniennurdurchziehendiesenneunzigtausendQuadratkilometergrossenTeilderTierraCalienteWosichAnsiedelungenbefindenhabensiesichdichtundängstlichandiewenigenEisenbahnstationengedraengtEuropaeerwohnenhiernurganzvereinzeltundwieverlorenDieermuedendeGleichfoermigkeitdesDschungelswirdvoneinigensichlanghinstreckendenHoehenzuegenunterbrochendiemittropischemUrbuschbewachsensindderebensoundurchdringlichistwiederDschungelundindessenTiefenwoimmerDaemmerungherrschtalleMysterienundGrauenderWeltzulauernscheinen',
      // key: JHSU
      cipherText:
        'DuvoajzxapfaupubnyVmlomhpldvnkwwtavcndwcclfYklfywkwlOsmmbnwvrllymlkJjumwxbfxmlkNjtwmrGoyrIsbwsahrlfhdyvoajztrlzywkayblfhnbftrnludzwhmXmumysntpdivllyanjibzwhClafmljNrljljJsfrlfnnDgmrjzUwzaymldownwhklxcwkwhqhtywzaybpubmpubcbfxäwnknupubjuvcndwhrnwhNpkywisbwzlucpghnuyymysywnlYdygjjlwlfvzhnuzcnyfoanshicwlnpftnslowkocncwluvjywKaynyeonkwhmlYfnpubovwlvpyenplxnzVmlomhpldmfpjxevfyruaanukcloduwnzcwzllnjcywkwhQvwbnuronnwhdulyaijilowhmpwgrallxwamlowgDytobjzvndswqzwhbpfxmljyklfmxbfxdyubmyahpsawqpknfpwxnyVmlomhpldowkahmlkmnuLcnmwhfvagvljXjlegnymhpowlazubchdfnTqmcljcnumhmNjudlfxnyOyuarouhmyaukwqlahnu',
    },
    {
      type: ProblemTypes.VIGNERE,
      title: 'Menschenrechte 1',
      language: ProblemLanguages.DE,
      // source: https://www.ohchr.org/en/udhr/pages/Language.aspx?LangID=ger
      plainText:
        'AlleMenschensindfreiundgleichanWuerdeundRechtengeborenSiesindmitVernunftundGewissenbegabtundsolleneinanderimGeistderBruederlichkeitbegegnen',
      // key: KLI
      cipherText:
        'KwtoXmxdkrpvctvnqzotcxoovpqmsixHcoclofvnCmmsboyoomwbpvCtmctvnxqdGmbycxqbeylQpesdaoyjorilecxoaywtoymsyixombtuQpqcelocJbfmnpzvtkrvmsejormqymx',
    },
    {
      type: ProblemTypes.VIGNERE,
      title: 'Menschenrechte 2',
      language: ProblemLanguages.DE,
      // source: https://www.ohchr.org/en/udhr/pages/Language.aspx?LangID=ger
      plainText:
        'JederhatAnspruchaufdieindieserErklaerungverkuendetenRechteundFreiheitenohneirgendeinenUnterschiedetwanachRasseHautfarbeGeschlechtSpracheReligionpolitischerodersonstigerUeberzeugungnationalerodersozialerHerkunftVermoegenGeburtodersonstigemStandDesweiterendarfkeinUnterschiedgemachtwerdenaufGrundderpolitischenrechtlichenoderinternationalenStellungdesLandesoderGebietsdemeinePersonangehoertgleichgueltigobdiesesunabhaengigistunterTreuhandschaftstehtkeineSelbstregierungbesitztodersonstinseinerSouveraenitaeteingeschraenktist',
      // key: LIAAR
      cipherText:
        'UmdeisitAedxrutsiufutminutmseiPzklrpzunxgmrklpvdekpvRetsbeueoNrezsmitvywhnvtzgeeominvyCntvcachzpletnlvacyCissvSiutwlzbeXpachcpkhtJazacypZelzrqongztitzdkheizlerjzvstzrmrUvmmrzvfounxyitifyileizlerjzhiacpzHeivcnfkGmrmfpoenXpjurkzlerjzvstzrmmSklvdDvdeeikpzenulzfkvtvUnkpzscytmdgvxichkhmrdvyiufXccndupzpoctbistsmnrvnptlznpenfomrieemrnreqonrwmnSkptluerlesClvdejzlerXpjiekdlemvtvePvcaonryoehfpztgcpqchxfmltzrwbdzpaeslyibhrpvgixtatueemrTipchaeoachrqbstvsbkezymSecmatrvrqerlyobejtbztfomrsfyatiedminvcAoumpzaeetbaekpqngvdkhrrpvktzdb',
    },
  ],
};
