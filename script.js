// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "evaluation-de-messages-de-preventions",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Évaluation de messages de préventions",
    "description": "",
    "repository": "",
    "contributors": "Magali Bringuier \u003Cmagali.bringuier@univ-tlse2.fr\u003E"
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "consentement libre et éclairé - Évaluation de la plausibilité et de la valeur communicationnelle des messages de prévention dans les jeux de hasard et d’argent",
          "content": "\u003Cp\u003E \u003Cb\u003E Chercheur titulaire responsable scientifique du projet : \u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EValérie Le Floch, Professeure à l’Université Toulouse Jean Jaurès, laboratoire CNRS CLLE (Cognition, Langues, Langage et Ergonomie).\nE-mail : valerie.le-floch@univ-tlse2.fr\u003C\u002Fp\u003E\n\n\u003Cb\u003E But du projet de recherche, confidentialité et respect de la vie privée : \u003C\u002Fb\u003E\n\u003Cp style=\"text-align: justify;\"\u003ECe projet de recherche a pour objectif d’évaluer le caractère plausible et la valeur communicationnelle de messages de prévention utilisés par les opérateurs de jeux de hasard et d’argent en France. En acceptant de participer à cette étude, vous serez amené.e à départager un ensemble de messages de prévention sur la base du ou des critères indiqués. Vous disposez du temps que vous souhaitez pour répondre à cette étude. La participation à cette étude est volontaire et totalement anonyme, de ce fait, votre participation n’a absolument rien d’obligatoire. Vous pouvez stopper votre participation à tout moment sans avoir à vous justifier ni encourir aucune responsabilité. Votre consentement ne décharge pas les organisateurs de la recherche de leurs responsabilités et vous conservez tous vos droits garantis par la loi.\u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EAu cours de cette expérience, vous acceptez que vos réponses soient enregistrées. \u003Cb\u003E \u003Cu\u003E Vous comprenez que les informations recueillies sont strictement confidentielles et à usage exclusif des investigateurs concernés. L’adresse IP de votre ordinateur ne sera pas enregistrée et les données sociodémographiques que nous récolterons ne permettront pas de vous identifier, même par recoupement d’informations.\u003C\u002Fu\u003E \u003C\u002Fb\u003E \u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EDe plus, la présentation des données de cette expérience durant des colloques ou des publications scientifiques sera faite de telle sorte qu'il ne sera pas possible d'identifier les participants. Vous acceptez que les données enregistrées à l’occasion de cette étude puissent être conservées pendant 10 ans dans une base de données et faire l’objet d’un traitement informatisé non nominatif. Vous pourrez prendre connaissance des résultats généraux de la présente étude, en contactant le responsable scientifique de l’étude.\u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EÀ notre connaissance, cette recherche n’implique \u003Cb\u003E aucun risque \u003C\u002Fb\u003E ou \u003Cb\u003Einconfort\u003C\u002Fb\u003E autre que ceux de la vie quotidienne.\u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EEn signant le formulaire de consentement, \u003Cb\u003Evous certifiez que vous avez lu et compris les renseignements ci-dessus, et qu’on vous a avisé que vous étiez libre d’annuler votre consentement ou de vous retirer de cette recherche, sans aucun préjudice. \u003C\u002Fb\u003ENéanmoins, une fois que vous aurez validé le questionnaire, \u003Cb\u003Eil ne sera plus possible de vous retirer de cette recherche,\u003C\u002Fb\u003E car nous n’aurons aucune donnée identifiante, pas même votre adresse IP, identifiant la localisation de votre connexion.\u003C\u002Fp\u003E\n\n\n\n\n"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cbr\u003E\r\n\r\n\u003Ccenter\u003E\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"consent_oui\" name=\"consent\" value=\"1\" required\u003E\r\n  \u003Clabel for=\"consent_oui\"\u003EOui, j'ai compris, j'accepte de participer à cette étude\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Cinput type=\"radio\" id=\"consent_non\" name=\"consent\" value=\"0\"\u003E\r\n  \u003Clabel for=\"consent_non\"\u003ENon, je refuse de participer à cette étude\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003Cbr\u003E\r\n\r\n    \u003Cbutton id=\"consent_next\" type=\"submit\"\u003ESuivant\u003C\u002Fbutton\u003E\r\n\u003C\u002Fcenter\u003E\r\n\u003C\u002Fform\u003E",
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "\u003Cspan\u003EParticipate!\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E",
      "submitButtonPosition": "hidden",
      "files": {
        "1200px-UCLouvain_logo.svg.png": "embedded\u002F46df0cfe82a9eddeeda548c38c09b46672314ac4726462f71150d92083c4e0c7.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "consent",
      "width": "m"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "\u003Cp\u003ENous remercions de l'intérêt que vous avez porté à cette étude.\u003C\u002Fp\u003E\n\u003Cp\u003EVous avez été redirigé sur cette page car vous avez refusé de participer à l'étude. \u003C\u002Fp\u003E\n\u003Cbr\u003E\n\u003Cp\u003E\u003Cb\u003ESi c'est une erreur et que vous souhaitez participer à notre étude, \nveuillez cliquer à nouveau sur le lien afin de relancer l'étude.\u003C\u002Fb\u003E \u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cb\u003ESi vous ne souhaitez pas participer, vous pouvez fermer la page en cliquant sur la croix. \u003C\u002Fb\u003E\u003C\u002Fp\u003E"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "Continue →",
      "submitButtonPosition": "hidden",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "if_consent_non",
      "tardy": true,
      "skip": "${this.state.consent!=0}"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "if_consent_oui",
      "tardy": true,
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "Consignes",
              "content": "\u003Cp\u003EDans cette étude, vous allez voir un ensemble de messages concernant les jeux de hasard et d'argent. Ces messages seront affichés individuellement.\u003C\u002Fp\u003E\n\n\u003Cp\u003EPour chaque message, vous devrez indiquer à quel point vous le trouvez préventif, c'est-à-dire à quel point il vous dissuade de jouer à des jeux de hasard et d'argent.\u003C\u002Fp\u003E\n\n\u003Cp\u003EVous devrez ensuite indiquer à quel point vous le trouvez promotionnel, c'est-à-dire à quel point il vous incite à jouer.\u003C\u002Fp\u003E\n\n\u003Cp\u003EUne fois vos deux réponses données sur un message, vous pourrez appuyer sur \"Suivant\" pour passer au message suivant.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAssurez-vous d'avoir bien compris ces consignes, et commencez la tâche en cliquant sur \"Commencer la tâche\".\u003C\u002Fp\u003E"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003ECommencer la tâche\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continue →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "consignes"
        },
        {
          "type": "lab.flow.Loop",
          "templateParameters": [
            {
              "messages": "Dans les jeux d'argent et de hasard, le hasard est toujours présent. Ne surestimez pas votre expertise.",
              "": ""
            },
            {
              "messages": "Famille, vie sociale, santé financière, êtes-vous prêt à tout miser ? Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé).",
              "": ""
            },
            {
              "messages": "Fixez-vous des limites. Ne tentez pas de rejouer l'argent que vous venez de perdre.",
              "": ""
            },
            {
              "messages": "Jouer comporte des risques : endettement, isolement, dépendance. Pour être aidé, appelez le 09-74-75-13-13 (appel non surtaxé).",
              "": ""
            },
            {
              "messages": "Les jeux d'argent et de hasard peuvent être dangereux : pertes d'argent, conflits familiaux, addiction… Retrouvez nos conseils sur joueurs-info-service.fr (09 74 75 13 13 - appel non surtaxé).",
              "": ""
            },
            {
              "messages": "Méfiez-vous des croyances erronées. On ne peut pas gagner sa vie avec les jeux d'argent et de hasard.",
              "": ""
            },
            {
              "messages": "Plus vous jouez à des jeux d'argent et de hasard, plus vous vous isolez de votre entourage.",
              "": ""
            },
            {
              "messages": "N’oubliez pas que c’est uniquement du hasard.",
              "": ""
            },
            {
              "messages": "Souvenez-vous que c’est un jeu de hasard.",
              "": ""
            },
            {
              "messages": "N’oubliez-pas que le hasard ne se maîtrise pas.",
              "": ""
            },
            {
              "messages": "Aucune stratégie ne permet de lutter contre le hasard.",
              "": ""
            },
            {
              "messages": "Vous ne maîtrisez rien dans le jeu de hasard.",
              "": ""
            },
            {
              "messages": "Ce jeu est soumis uniquement au hasard.",
              "": ""
            },
            {
              "messages": "Le hasard est le seul facteur déterminant de ce jeu.",
              "": ""
            },
            {
              "messages": "Le jeu peut rendre dépendant.",
              "": ""
            },
            {
              "messages": "Pour que le jeu reste un plaisir.",
              "": ""
            },
            {
              "messages": "Garde le contrôle sur ton jeu !",
              "": ""
            },
            {
              "messages": "Fixez-vous des limites de jeu pour garder le contrôle.",
              "": ""
            },
            {
              "messages": "Pour bien jouer, il faut parfois moins jouer.",
              "": ""
            },
            {
              "messages": "Jouez malin, jouez avec modération.",
              "": ""
            },
            {
              "messages": "Reprendre le contrôle pour que le jeu reste un plaisir.",
              "": ""
            },
            {
              "messages": "Restez maître du jeu ! Fixez vos limites.",
              "": ""
            }
          ],
          "sample": {
            "mode": "draw-shuffle"
          },
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "jugement",
          "tardy": true,
          "indexParameter": "count_message",
          "shuffleGroups": [],
          "template": {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cp align=\"right\" style=\"color:grey\"\u003E\u003Ci\u003EMessage : ${this.parameters.count_message+1}\u002F21\u003C\u002Fi\u003E\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\r\n\u003Cdiv style=\"font-size: 1.5vw;width:100%\"\u003E\r\n \r\n \u003Ccenter\u003E\u003CFONT size =\"5\"\u003E${ parameters.messages }\u003C\u002FFONT\u003E\u003C\u002Fcenter\u003E\u003Cbr\u003E\u003Chr\u003E\u003Cbr\u003E",
                "name": ""
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Ch3\u003ESelon vous, à quel point ce message est-il préventif ?\u003C\u002Fh3\u003E\r\n\u003Ccenter\u003E\r\n    \u003Cfieldset\u003E\r\n  \u003Cdiv class=\"container\" style=\"white-space:nowrap;display:grid;grid-template-columns:repeat(7,minmax(0.5,1fr))\"\u003E\r\n      \u003Clabel for=\"jugement_prevention\" style=\"grid-column:1\"\u003E\u003Cp\u003EPas du tout\u003C\u002Fp\u003E \u003Cp\u003Epréventif\u003C\u002Fp\u003E\u003C\u002Flabel\u003E\r\n    \u003Cinput type=\"range\" min=\"1\" max=\"100\" value=\"50\" step=\"1\" style=\"grid-column:2\u002F7\" name=\"jugement_prevention\" onclick=\"document.getElementById('promotion_div').style.visibility='visible';\"\u003E\r\n    \u003Clabel for=\"jugement_prevention\" style=\"grid-column:7\"\u003E\u003Cp\u003ETout à fait\u003C\u002Fp\u003E \u003Cp\u003Epréventif\u003C\u002Fp\u003E\u003C\u002Flabel\u003E\r\n    \u003Cinput type=\"hidden\" id=\"touched\" name=\"touched\" value=\"0\"\u003E\r\n\r\n  \u003C\u002Fdiv\u003E\r\n    \u003C\u002Ffieldset\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
                "name": ""
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Ccenter\u003E\r\n  \u003Cfieldset style=\"visibility:hidden;\" id=\"promotion_div\"\u003E\r\n    \u003Ch3\u003ESelon vous, à quel point ce message est-il promotionnel ?\u003C\u002Fh3\u003E\r\n  \u003Cdiv class=\"container\" style=\"white-space:nowrap;display:grid;grid-template-columns:repeat(7,minmax(0.5,1fr))\" \u003E\r\n  \u003Clabel for=\"jugement_promotion\" style=\"grid-column:1\"\u003E\u003Cp\u003EPas du tout\u003C\u002Fp\u003E \u003Cp\u003Epromotionnel\u003C\u002Fp\u003E\u003C\u002Flabel\u003E\r\n    \u003Cinput type=\"range\" min=\"1\" max=\"100\" value=\"50\" step=\"1\"  style=\"grid-column:2\u002F7\" name=\"jugement_promotion\" onclick=\"document.getElementById('touched').value = 1;document.getElementById('bouton_suivant').style.visibility='visible';\"\u003E\r\n    \u003Clabel for=\"jugement_promotion\" style=\"grid-column:7\"\u003E\u003Cp\u003ETout à fait\u003C\u002Fp\u003E \u003Cp\u003Epromotionnel\u003C\u002Fp\u003E\u003C\u002Flabel\u003E\r\n    \u003Cinput type=\"hidden\" id=\"touched\" name=\"touched\" value=\"0\"\u003E\r\n\r\n  \u003C\u002Fdiv\u003E\r\n  \u003C\u002Ffieldset\u003E\r\n\u003C\u002Fcenter\u003E",
                "name": ""
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cdiv id=\"nextbuttondiv\" style=\"visibility:hidden;\"\u003E\u003Cbutton id=\"bouton_suivant\"\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "hidden",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "jugement_messages"
          }
        },
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "Quelques informations vous concernant",
              "content": "\u003Cp\u003EVeuillez cliquer sur \"Continuer →\" pour répondre à quelques questions vous concernant.\u003C\u002Fp\u003E \n\n\u003Cp\u003EPour rappel, l'entièreté de cette étude est anonyme. \u003C\u002Fp\u003E\n\u003Cp\u003E\u003Cb\u003EAucune information que nous récolterons sur vous ne permet de vous identifier, même par recoupement.\u003C\u002Fb\u003E\u003C\u002Fp\u003E "
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
              "name": ""
            }
          ],
          "scrollTop": true,
          "submitButtonText": "Continuer →",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Questionnaire socio démographique "
        },
        {
          "type": "lab.html.Page",
          "scrollTop": true,
          "submitButtonText": "\u003Cspan\u003EPour continuer, cliquer ici\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "genre",
          "width": "m",
          "items": [
            {
              "type": "text",
              "title": "Quel est votre genre ?",
              "content": ""
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"homme\" name=\"genre\" value=\"1\" required\u003E\r\n  \u003Clabel for=\"homme\"\u003EHomme\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"femme\" name=\"genre\" value=\"2\" required\u003E\r\n  \u003Clabel for=\"femme\"\u003EFemme\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"autre\" name=\"genre\" value=\"0\"\u003E\r\n  \u003Clabel for=\"genre\"\u003EAutre\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"ne_souhaite_pas_repondre\" name=\"genre\" value=\"3\" required\u003E\r\n  \u003Clabel for=\"ne_souhaite_pas_repondre\"\u003ENe souhaite pas repondre\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
              "name": ""
            }
          ]
        },
        {
          "type": "lab.html.Page",
          "scrollTop": true,
          "submitButtonText": "\u003Cspan\u003EPour continuer, cliquer ici\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E",
          "submitButtonPosition": "hidden",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "age",
          "width": "m",
          "items": [
            {
              "type": "text",
              "title": "Quel est votre âge?",
              "content": "Veuillez indiquer votre âge (en année seulement). Vous pouvez utiliser les flèches présentes à droite de l'encart, ou rentrer directement votre âge à l'aide de votre clavier."
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n\u003Cbody\u003E\r\n\r\n\u003Clabel for=\"age\"\u003EÂge (en année) :\u003C\u002Flabel\u003E\r\n\u003Cinput type=\"number\" id=\"age\" name=\"age\" min=\"18\"\u003E\r\n\r\n\u003C\u002Fbody\u003E\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
              "name": ""
            }
          ]
        },
        {
          "type": "lab.html.Screen",
          "files": {},
          "responses": {
            "keypress(Space)": "end_study"
          },
          "parameters": {},
          "messageHandlers": {
            "before:prepare": function anonymous(
) {
function randomID(){
  const length = 10;
  let result = "";
  const chars = "0123456789abcdefghjklmnopqrstuvwxyz";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

const filename = `${randomID()}-data.json`

const dataJSON = study.internals.controller.datastore.exportJson();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "XaOAL7eRrHcT",
    filename: filename,
    data: dataJSON,
  }),
});
}
          },
          "title": "end_study_redirect",
          "content": " \u003Cmain class=\"content-vertical-center\r\n             content-horizontal-center\"\u003E\r\n \u003Cdiv style=\"font-size: 1.2vw; width: 70%;\"\u003E  \r\n\u003Cp style=\"text-align: justify;\"\u003EDernière question\u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\"text-align: justify;\"\u003EVous avez terminé le questionnaire. L'entièreté de cette étude est anonyme et aucune des données recueillies ne permet de vous identifier. \u003C\u002Fp\u003E\r\n  \r\n\u003Cp style=\"text-align: justify;\"\u003EIn the first phase, you were asked to form an impression of the water brand logos by using only one of the two valenced stimuli that were displayed together with the logos.\u003C\u002Fp\u003E\r\n    \r\n\u003Cp style=\"text-align: justify;\"\u003EWhen the two valenced stimuli have contrastive valence (e.g., the stimulus you should use is positive, and the stimulus you should resist the influence of is negative), would the irrelevant valenced stimulus still influence your impression formation? If so, this could indicate that part of our impression formation is uncontrollable, a hypothesis for which results are still unclear.\u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\"text-align: justify;\"\u003EIf you have any question or comment, or if you would like to receive additional information on the present study, please do not hesitate to contact the person in charge of this research at the following e-mail address: jeremy.bena@uclouvain.be\u003C\u002Fp\u003E\r\n\r\n \u003Cp style=\"text-align: justify;\"\u003EPress the spacebar to be redirected to Prolific.\u003C\u002Fp\u003E\r\n\r\n \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fmain\u003E",
          "tardy": true
        }
      ],
      "skip": "${this.state.consent!= 1}"
    }
  ]
})

// Let's go!
study.run()