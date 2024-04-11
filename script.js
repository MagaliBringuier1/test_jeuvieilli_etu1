// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "messageHandlers": {
    "epilogue": function anonymous(
) {
var resultJson = study.options.datastore.exportJson();
jatos.submitResultData(resultJson, jatos.startNextComponent);
}
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
          "content": "\u003Cp\u003E \u003Cb\u003E Chercheur titulaire responsable scientifique du projet : \u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EValérie Le Floch, Professeure à l’Université Toulouse Jean Jaurès, laboratoire CNRS CLLE (Cognition, Langues, Langage et Ergonomie).\nE-mail : valerie.le-floch@univ-tlse2.fr\u003C\u002Fp\u003E\n\n\u003Cb\u003E But du projet de recherche, confidentialité et respect de la vie privée : \u003C\u002Fb\u003E\n\u003Cp style=\"text-align: justify;\"\u003ECe projet de recherche a pour objectif d’évaluer le caractère plausible et la valeur communicationnelle de messages de prévention utilisés par les opérateurs de jeux de hasard et d’argent en France. En acceptant de participer à cette étude, vous serez amené.e à départager un ensemble de messages de prévention sur la base du ou des critères indiqués. Vous disposez du temps que vous souhaitez pour répondre à cette étude. La participation à cette étude est volontaire et totalement anonyme, de ce fait, votre participation n’a absolument rien d’obligatoire. Vous pouvez stopper votre participation à tout moment sans avoir à vous justifier ni encourir aucune responsabilité. Votre consentement ne décharge pas les organisateurs de la recherche de leurs responsabilités et vous conservez tous vos droits garantis par la loi.\u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EAu cours de cette expérience, vous acceptez que vos réponses soient enregistrées. \u003Cb\u003E \u003Cu\u003E Vous comprenez que les informations recueillies sont strictement confidentielles et à usage exclusif des investigateurs concernés. L’adresse IP de votre ordinateur ne sera pas enregistrée et les données sociodémographiques que nous récolterons ne permettront pas de vous identifier, même par recoupement d’informations.\u003C\u002Fu\u003E \u003C\u002Fb\u003E \u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EDe plus, la présentation des données de cette expérience durant des colloques ou des publications scientifiques sera faite de telle sorte qu'il ne sera pas possible d'identifier les participants. Vous acceptez que les données enregistrées à l’occasion de cette étude puissent être conservées pendant 10 ans dans une base de données et faire l’objet d’un traitement informatisé non nominatif. Vous pourrez prendre connaissance des résultats généraux de la présente étude, en contactant le responsable scientifique de l’étude.\u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EÀ notre connaissance, cette recherche n’implique \u003Cb\u003E aucun risque \u003C\u002Fb\u003E ou \u003Cb\u003Einconfort\u003C\u002Fb\u003E autre que ceux de la vie quotidienne.\u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EEn signant le formulaire de consentement, \u003Cb\u003Evous certifiez que vous avez lu et compris les renseignements ci-dessus, et qu’on vous a avisé que vous étiez libre d’annuler votre consentement ou de vous retirer de cette recherche, sans aucun préjudice. \u003C\u002Fb\u003ENéanmoins, une fois que vous aurez validé le questionnaire, \u003Cb\u003Eil ne sera plus possible de vous retirer de cette recherche,\u003C\u002Fb\u003E car nous n’aurons aucune donnée identifiante, pas même votre adresse IP, identifiant la localisation de votre connexion.\u003C\u002Fp\u003E\n\n\n"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cbr\u003E\r\n\r\n\u003Ccenter\u003E\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"consent_oui\" name=\"consent\" value=\"1\" required\u003E\r\n  \u003Clabel for=\"consent_oui\"\u003EOui, j'ai compris, j'accepte de participer à cette étude\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \u003Cinput type=\"radio\" id=\"consent_non\" name=\"consent\" value=\"0\"\u003E\r\n  \u003Clabel for=\"consent_non\"\u003ENon, je refuse de participer à cette étude\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n\u003Cbr\u003E\r\n\r\n    \u003Cbutton id=\"consent_next\" type=\"submit\"\u003ESuivant\u003C\u002Fbutton\u003E\r\n\u003C\u002Fcenter\u003E\r\n\u003C\u002Fform\u003E",
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
      "title": "consentement",
      "width": "l"
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
      "title": "si_consent_no",
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
      "title": "si_consent_oui",
      "tardy": true,
      "skip": "${this.state.consent!= 1}",
      "content": [
        {
          "type": "lab.html.Page",
          "items": [
            {
              "type": "text",
              "title": "Consignes",
              "content": "\u003Cp\u003EDans cette étude, vous allez voir un ensemble de messages concernant les jeux de hasard et d'argent. Ces messages seront affichés individuellement.\u003C\u002Fp\u003E\n\n\u003Cp\u003EPour chaque message, vous devrez indiquer à quel point vous le trouvez préventif, c'est-à-dire à quel point il vous dissuade de jouer à des jeux de hasard et d'argent.\u003C\u002Fp\u003E\n\n\u003Cp\u003EVous devrez ensuite indiquer à quel point vous le trouvez promotionnel, c'est-à-dire à quel point il vous incite à jouer.\u003C\u002Fp\u003E\n\n\u003Cp\u003EUne fois vos deux réponses données sur un message, vous pourrez appuyer sur \"Continue →\" pour passer au message suivant.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAssurez-vous d'avoir bien compris ces consignes, et commencez la tâche en cliquant sur \"Commencer la tâche\".\u003C\u002Fp\u003E"
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003ECommencer la tâche\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
          "indexParameter": "compteur_message",
          "shuffleGroups": [],
          "template": {
            "type": "lab.html.Page",
            "items": [
              {
                "required": true,
                "type": "html",
                "content": "\u003Cp align=\"right\" style=\"color:grey\"\u003E\u003Ci\u003EMessage : ${this.parameters.compteur_message+1}\u002F22\u003C\u002Fi\u003E\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\u003Cfont size =\"5\"\u003E${ parameters.messages }\u003C\u002Ffont\u003E\u003C\u002Fcenter\u003E\u003Cbr\u003E\u003Chr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ch3\u003ESelon vous, à quel point ce message est-il préventif ?\u003C\u002Fh3\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E",
                "name": ""
              },
              {
                "required": true,
                "type": "html",
                "content": "\u003Cform id=\"jugement_prev\"\u003E\r\n  \u003Clabel\u003EPas du tout préventif\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" name=\"jugement_prevention\" value=\"1\" onclick=\"document.getElementById('jugement_promotion').style.visibility='visible';\"\u003E\r\n  \u003Cinput type=\"radio\" name=\"jugement_prevention\" value=\"2\" onclick=\"document.getElementById('jugement_promotion').style.visibility='visible';\"\u003E\r\n  \u003Cinput type=\"radio\" name=\"jugement_prevention\" value=\"3\" onclick=\"document.getElementById('jugement_promotion').style.visibility='visible';\"\u003E\r\n  \u003Cinput type=\"radio\" name=\"jugement_prevention\" value=\"4\" onclick=\"document.getElementById('jugement_promotion').style.visibility='visible';\"\u003E\r\n  \u003Cinput type=\"radio\" name=\"jugement_prevention\" value=\"5\" onclick=\"document.getElementById('jugement_promotion').style.visibility='visible';\"\u003E\r\n  \u003Cinput type=\"radio\" name=\"jugement_prevention\" value=\"6\" onclick=\"document.getElementById('jugement_promotion').style.visibility='visible';\"\u003E\r\n  \u003Clabel\u003ETout à fait préventif\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cform id=\"jugement_promotion\" style=\"visibility:hidden;\" \u003E\r\n  \u003Clabel\u003EPas du tout promotionnel\u003C\u002Flabel\u003E\r\n  \u003Cinput type=\"radio\" name=\"jugement_promotion\" value=\"1\" required \u003E\r\n  \u003Cinput type=\"radio\" name=\"jugement_promotion\" value=\"2\" \u003E\r\n  \u003Cinput type=\"radio\" name=\"jugement_promotion\" value=\"3\" \u003E\r\n  \u003Cinput type=\"radio\" name=\"jugement_promotion\" value=\"4\" \u003E\r\n  \u003Cinput type=\"radio\" name=\"jugement_promotion\" value=\"5\" \u003E\r\n  \u003Cinput type=\"radio\" name=\"jugement_promotion\" value=\"6\" \u003E\r\n  \u003Clabel\u003ETout à fait préventif\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\u003C\u002Fform\u003E",
                "name": ""
              }
            ],
            "scrollTop": true,
            "submitButtonText": "Continue →",
            "submitButtonPosition": "right",
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "jugement_message"
          }
        }
      ]
    }
  ]
})

// Let's go!
jatos.onLoad(() => study.run())