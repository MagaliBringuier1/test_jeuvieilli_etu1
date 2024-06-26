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
          "required": true,
          "type": "image",
          "src": "${ this.files[\"Image1.png\"] }",
          "name": ""
        },
        {
          "type": "text",
          "title": "\u003Ccenter\u003E Évaluation des messages de prévention dans les jeux de hasard et d’argent \u003C\u002Fcenter\u003E",
          "content": "\u003Cp\u003E \u003Cb\u003E Chercheur titulaire responsable scientifique du projet : \u003C\u002Fb\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EValérie Le Floch, Professeure à l’Université Toulouse Jean Jaurès, laboratoire CNRS CLLE (Cognition, Langues, Langage et Ergonomie).\nE-mail : valerie.le-floch@univ-tlse2.fr\u003C\u002Fp\u003E\n\n\u003Cb\u003E But du projet de recherche, confidentialité et respect de la vie privée : \u003C\u002Fb\u003E\n\u003Cp style=\"text-align: justify;\"\u003ECe projet de recherche a pour objectif d’évaluer le caractère plausible et la valeur communicationnelle de messages de prévention utilisés par les opérateurs de jeux de hasard et d’argent en France. En acceptant de participer à cette étude, vous serez amené.e à évaluer un ensemble de messages de prévention sur la base des critères indiqués. Vous disposez du temps que vous souhaitez pour répondre à cette étude. La participation à cette étude est volontaire et totalement anonyme, de ce fait, votre participation n’a absolument rien d’obligatoire. Vous pouvez stopper votre participation à tout moment sans avoir à vous justifier ni encourir aucune responsabilité. Votre consentement ne décharge pas les organisateurs de la recherche de leurs responsabilités et vous conservez tous vos droits garantis par la loi.\u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EAu cours de cette expérience, vous acceptez que vos réponses soient enregistrées. \u003Cb\u003E \u003Cu\u003E Vous comprenez que les informations recueillies sont strictement confidentielles et à usage exclusif des investigateurs concernés. L’adresse IP de votre ordinateur ne sera pas enregistrée et les données sociodémographiques que nous récolterons ne permettront pas de vous identifier, même par recoupement d’informations.\u003C\u002Fu\u003E \u003C\u002Fb\u003E \u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EDe plus, la présentation des données de cette expérience durant des colloques ou des publications scientifiques sera faite de telle sorte qu'il ne sera pas possible d'identifier les participants. Vous acceptez que les données enregistrées à l’occasion de cette étude puissent être conservées pendant 10 ans dans une base de données et faire l’objet d’un traitement informatisé non nominatif. Vous pourrez prendre connaissance des résultats généraux de la présente étude, en contactant le responsable scientifique de l’étude.\u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003ECette étude a reçu un avis favorable du comité d'éthique de la recherche de Toulouse (avis n°2024_808). À notre connaissance, cette recherche n’implique \u003Cb\u003E aucun risque \u003C\u002Fb\u003E ou \u003Cb\u003Einconfort\u003C\u002Fb\u003E autre que ceux de la vie quotidienne.\u003C\u002Fp\u003E\n\n\u003Cp style=\"text-align: justify;\"\u003EEn signant le formulaire de consentement, \u003Cb\u003Evous certifiez que vous avez lu et compris les renseignements ci-dessus, et qu’on vous a avisé que vous étiez libre d’annuler votre consentement ou de vous retirer de cette recherche, sans aucun préjudice. \u003C\u002Fb\u003ENéanmoins, une fois que vous aurez validé le questionnaire, \u003Cb\u003Eil ne sera plus possible de vous retirer de cette recherche,\u003C\u002Fb\u003E car nous n’aurons aucune donnée identifiante, pas même votre adresse IP, identifiant la localisation de votre connexion.\u003C\u002Fp\u003E\n\n\n\n\n"
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
        "1200px-UCLouvain_logo.svg.png": "embedded\u002F46df0cfe82a9eddeeda548c38c09b46672314ac4726462f71150d92083c4e0c7.png",
        "logo_clle.png": "embedded\u002F9f8a9d47dd6ae0c210627764a135a53380c570fb3edb04a4ce9ec6f1f127b16f.png",
        "anr.png": "embedded\u002Fa33d5a4218a6f8a425437acbb8db426ac5d3a6506126815e03e783c246f8a7e5.png",
        "Image1.png": "embedded\u002F3a9d4364d59bf14882047447806030bccb384fc14c11d418a50d45bb3375cad6.png"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
this.parameters.contrebal_set = this.random.choice(['prev_puis_prom', 'prom_puis_prev'])
}
      },
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
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence_prev_puis_prom",
          "tardy": true,
          "skip": "${this.state.contrebal_set != 'prev_puis_prom'}",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "Consignes",
                  "content": "\u003Cp\u003EDans cette étude, vous allez voir un ensemble de messages concernant les jeux de hasard et d'argent. Ces messages seront affichés individuellement.\u003C\u002Fp\u003E\n\n\u003Cp\u003EPour chaque message, vous devrez tout d'abord indiquer à quel point vous le trouvez \u003Cb\u003Epréventif\u003C\u002Fb\u003E, c'est-à-dire à quel point le message présenté vous dissuade de jouer à des jeux de hasard et d'argent.\u003C\u002Fp\u003E\n\n\u003Cp\u003EVous devrez ensuite indiquer à quel point vous le trouvez \u003Cb\u003Epromotionnel\u003C\u002Fb\u003E, c'est-à-dire à quel point il vous incite à jouer à des jeux de hasard et d'argent.\u003C\u002Fp\u003E\n\n\u003Cp\u003EUne fois vos deux réponses données sur un message, vous pourrez appuyer sur \"Suivant\" pour passer au message suivant.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAssurez-vous d'avoir bien compris ces consignes, et commencez la tâche en cliquant sur \"Commencer la tâche\".\u003C\u002Fp\u003E"
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
              "title": "consignes_prev_puis_prom"
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
              "title": "jugement_prev_puis_prom",
              "tardy": true,
              "indexParameter": "count_message",
              "shuffleGroups": [],
              "template": {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cp align=\"right\" style=\"color:grey\"\u003E\u003Ci\u003EMessage : ${this.parameters.count_message+1}\u002F22\u003C\u002Fi\u003E\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\r\n\u003Cdiv style=\"font-size: 1.5vw;width:100%\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n \u003Ccenter\u003E\u003CFONT size =\"5\"\u003E${ parameters.messages }\u003C\u002FFONT\u003E\u003C\u002Fcenter\u003E\u003Cbr\u003E\u003Chr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ch3\u003ESelon vous, à quel point ce message est-il préventif ?\u003C\u002Fh3\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\r\n\u003Cstyle\u003E\r\nhtml,body {padding:0;margin:0;}\r\n.wrap {\r\n}\r\nform .statement {\r\n  display:block;\r\n  font-size: 1.5rem;\r\n  padding: 20px 0 0 4.25%;\r\n  margin-bottom:10px;\r\n}\r\nform .likert {\r\n  list-style:none;\r\n  width:100%;\r\n  margin:0;\r\n  padding:0 0 0;\r\n  display:block;\r\n  border-bottom:2px solid #efefef;\r\n}\r\nform .likert:before {\r\n  content: '';\r\n  position:relative;\r\n  top:11px;\r\n  display:block;\r\n  background-color:#efefef;\r\n  height:0px;\r\n  width:80%;\r\n}\r\nform .likert li {\r\n  display:inline-block;\r\n  width:15%;\r\n  text-align:center;\r\n  vertical-align: top;\r\n}\r\nform .likert li input[type=radio] {\r\n  display:block;\r\n  position:relative;\r\n  top:0;\r\n  left:50%;\r\n  margin-left:-4px;\r\n}\r\n\u003C\u002Fstyle\u003E\r\n\u003Cdiv class=\"wrap\" id=\"jugement_prevention\"\u003E\r\n  \u003Ccenter\u003E\r\n  \u003Cform action=\"\"\u003E\r\n    \u003Cul class='likert'\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_prevention\" value=\"1\" onclick=\"document.getElementById('jugement_promotion').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003EPas du tout préventif\u003C\u002Flabel\u003E\r\n      \u003C\u002Fli\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_prevention\" value=\"2\" onclick=\"document.getElementById('jugement_promotion').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003E\u003C\u002Flabel\u003E\r\n      \u003C\u002Fli\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_prevention\" value=\"3\" onclick=\"document.getElementById('jugement_promotion').style.visibility='visible';\"\u003E\r\n      \u003C\u002Fli\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_prevention\" value=\"4\" onclick=\"document.getElementById('jugement_promotion').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003E\u003C\u002Flabel\u003E\r\n      \u003C\u002Fli\u003E\r\n            \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_prevention\" value=\"5\" onclick=\"document.getElementById('jugement_promotion').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003E\u003C\u002Flabel\u003E\r\n      \u003C\u002Fli\u003E\r\n            \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_prevention\" value=\"6\" onclick=\"document.getElementById('jugement_promotion').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003ETout à fait préventif\u003C\u002Flabel\u003E\r\n      \u003C\u002Fli\u003E\r\n    \u003C\u002Ful\u003E\r\n  \u003C\u002Fform\u003E\r\n  \u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cbr\u003E\r\n\u003Cdiv class=\"wrap\" id=\"jugement_promotion\" style=\"visibility:hidden;\"\u003E\r\n  \u003Ccenter\u003E\r\n    \u003Ch3\u003ESelon vous, à quel point ce message est-il promotionnel ?\u003C\u002Fh3\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n  \u003Cform action=\"\"\u003E\r\n    \u003Cul class='likert'\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_promotion\" value=\"1\" onclick=\"document.getElementById('continue_button').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003EPas du tout promotionnel\u003C\u002Flabel\u003E\r\n      \u003C\u002Fli\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_promotion\" value=\"2\" onclick=\"document.getElementById('continue_button').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003E\u003C\u002Flabel\u003E\r\n      \u003C\u002Fli\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_promotion\" value=\"3\" onclick=\"document.getElementById('continue_button').style.visibility='visible';\"\u003E\r\n      \u003C\u002Fli\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_promotion\" value=\"4\" onclick=\"document.getElementById('continue_button').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003E\u003C\u002Flabel\u003E\r\n      \u003C\u002Fli\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_promotion\" value=\"5\" onclick=\"document.getElementById('continue_button').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003E\u003C\u002Flabel\u003E\r\n      \u003C\u002Fli\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_promotion\" value=\"6\" onclick=\"document.getElementById('continue_button').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003ETout à fait promotionnel\u003C\u002Flabel\u003E\r\n        \u003C\u002Fli\u003E\r\n    \u003C\u002Ful\u003E\r\n  \u003C\u002Fform\u003E\r\n  \u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cbr\u003E\r\n \u003Ccenter\u003E\r\n  \u003Cdiv id=\"continue_button\" style=\"visibility:hidden;\"\u003E\u003Cbutton type=\"submit\" \u003Esuivant\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
                "title": "jugement_messages_prev_puis_prom",
                "width": "m"
              }
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Sequence_prom_puis_prev",
          "tardy": true,
          "skip": "${this.state.contrebal_set != 'prom_puis_prev'}",
          "content": [
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "title": "Consignes",
                  "content": "\u003Cp\u003EDans cette étude, vous allez voir un ensemble de messages concernant les jeux de hasard et d'argent. Ces messages seront affichés individuellement.\u003C\u002Fp\u003E\n\n\u003Cp\u003EPour chaque message, vous devrez tout d'abord indiquer à quel point vous le trouvez \u003Cb\u003Epromotionnel\u003C\u002Fb\u003E, c'est-à-dire à quel point il vous incite à jouer à des jeux de hasard et d'argent.\u003C\u002Fp\u003E\n\n\u003Cp\u003EVous devrez ensuite indiquer à quel point vous le trouvez \u003Cb\u003Epréventif\u003C\u002Fb\u003E, c'est-à-dire à quel point le message présenté vous dissuade de jouer à des jeux de hasard et d'argent. \u003C\u002Fp\u003E\n\n\u003Cp\u003EUne fois vos deux réponses données sur un message, vous pourrez appuyer sur \"Suivant\" pour passer au message suivant.\u003C\u002Fp\u003E\n\n\u003Cp\u003EAssurez-vous d'avoir bien compris ces consignes, et commencez la tâche en cliquant sur \"Commencer la tâche\".\u003C\u002Fp\u003E"
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
              "title": "consignes_prom_puis_prev"
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
              "title": "jugement_prom_puis_prev",
              "tardy": true,
              "indexParameter": "count_message",
              "shuffleGroups": [],
              "template": {
                "type": "lab.html.Page",
                "items": [
                  {
                    "required": true,
                    "type": "html",
                    "content": "\u003Cp align=\"right\" style=\"color:grey\"\u003E\u003Ci\u003EMessage : ${this.parameters.count_message+1}\u002F22\u003C\u002Fi\u003E\u003C\u002Fp\u003E\u003Cbr\u003E\r\n\r\n\u003Cdiv style=\"font-size: 1.5vw;width:100%\"\u003E\r\n\u003C\u002Fdiv\u003E\r\n\r\n \u003Ccenter\u003E\u003CFONT size =\"5\"\u003E${ parameters.messages }\u003C\u002FFONT\u003E\u003C\u002Fcenter\u003E\u003Cbr\u003E\u003Chr\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ch3\u003ESelon vous, à quel point ce message est-il promotionnel ?\u003C\u002Fh3\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\r\n\u003Cstyle\u003E\r\nhtml,body {padding:0;margin:0;}\r\n.wrap {\r\n}\r\nform .statement {\r\n  display:block;\r\n  font-size: 1.5rem;\r\n  padding: 20px 0 0 4.25%;\r\n  margin-bottom:10px;\r\n}\r\nform .likert {\r\n  list-style:none;\r\n  width:100%;\r\n  margin:0;\r\n  padding:0 0 0;\r\n  display:block;\r\n  border-bottom:2px solid #efefef;\r\n}\r\nform .likert:before {\r\n  content: '';\r\n  position:relative;\r\n  top:11px;\r\n  display:block;\r\n  background-color:#efefef;\r\n  height:0px;\r\n  width:80%;\r\n}\r\nform .likert li {\r\n  display:inline-block;\r\n  width:15%;\r\n  text-align:center;\r\n  vertical-align: top;\r\n}\r\nform .likert li input[type=radio] {\r\n  display:block;\r\n  position:relative;\r\n  top:0;\r\n  left:50%;\r\n  margin-left:-4px;\r\n}\r\n\u003C\u002Fstyle\u003E\r\n\u003Cdiv class=\"wrap\" id=\"jugement_promotion\"\u003E\r\n  \u003Ccenter\u003E\r\n  \u003Cform action=\"\"\u003E\r\n    \u003Cul class='likert'\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_promotion\" value=\"1\" onclick=\"document.getElementById('jugement_prevention').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003EPas du tout promotionnel\u003C\u002Flabel\u003E\r\n      \u003C\u002Fli\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_promotion\" value=\"2\" onclick=\"document.getElementById('jugement_prevention').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003E\u003C\u002Flabel\u003E\r\n      \u003C\u002Fli\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_promotion\" value=\"3\" onclick=\"document.getElementById('jugement_prevention').style.visibility='visible';\"\u003E\r\n      \u003C\u002Fli\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_promotion\" value=\"4\" onclick=\"document.getElementById('jugement_prevention').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003E\u003C\u002Flabel\u003E\r\n      \u003C\u002Fli\u003E\r\n            \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_promotion\" value=\"5\" onclick=\"document.getElementById('jugement_prevention').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003E\u003C\u002Flabel\u003E\r\n      \u003C\u002Fli\u003E\r\n            \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_promotion\" value=\"6\" onclick=\"document.getElementById('jugement_prevention').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003ETout à fait promotionnel\u003C\u002Flabel\u003E\r\n      \u003C\u002Fli\u003E\r\n    \u003C\u002Ful\u003E\r\n  \u003C\u002Fform\u003E\r\n  \u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cbr\u003E\r\n\u003Cdiv class=\"wrap\" id=\"jugement_prevention\" style=\"visibility:hidden;\"\u003E\r\n  \u003Ccenter\u003E\r\n    \u003Ch3\u003ESelon vous, à quel point ce message est-il préventif ?\u003C\u002Fh3\u003E\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n  \u003Cform action=\"\"\u003E\r\n    \u003Cul class='likert'\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_prevention\" value=\"1\" onclick=\"document.getElementById('continue_button').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003EPas du tout préventif\u003C\u002Flabel\u003E\r\n      \u003C\u002Fli\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_prevention\" value=\"2\" onclick=\"document.getElementById('continue_button').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003E\u003C\u002Flabel\u003E\r\n      \u003C\u002Fli\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_prevention\" value=\"3\" onclick=\"document.getElementById('continue_button').style.visibility='visible';\"\u003E\r\n      \u003C\u002Fli\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_prevention\" value=\"4\" onclick=\"document.getElementById('continue_button').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003E\u003C\u002Flabel\u003E\r\n      \u003C\u002Fli\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_prevention\" value=\"5\" onclick=\"document.getElementById('continue_button').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003E\u003C\u002Flabel\u003E\r\n      \u003C\u002Fli\u003E\r\n      \u003Cli\u003E\r\n        \u003Cinput type=\"radio\" name=\"jugement_prevention\" value=\"6\" onclick=\"document.getElementById('continue_button').style.visibility='visible';\"\u003E\r\n        \u003Clabel\u003ETout à fait préventif\u003C\u002Flabel\u003E\r\n        \u003C\u002Fli\u003E\r\n    \u003C\u002Ful\u003E\r\n  \u003C\u002Fform\u003E\r\n  \u003C\u002Fcenter\u003E\r\n\u003C\u002Fdiv\u003E\r\n\u003Cbr\u003E\r\n \u003Ccenter\u003E\r\n  \u003Cdiv id=\"continue_button\" style=\"visibility:hidden;\"\u003E\u003Cbutton type=\"submit\" \u003Esuivant\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E",
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
                "title": "jugement_messages_prom_puis_prev",
                "width": "m"
              }
            }
          ]
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
          "title": "CSP",
          "width": "m",
          "items": [
            {
              "type": "text",
              "title": "À quelle catégorie socio-prefessionnelle appartenez-vous ?",
              "content": "Si vous appartenez à deux catégories (par exemple étudiant.e salarié.e) veuillez indiquer la catégorie socio-professionnelle qui vous semble centrale dans votre activité. "
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"agriculteur\" name=\"CSP\" value=\"1\" required\u003E\r\n  \u003Clabel for=\"agriculteur\"\u003EAgriculteurs exploitants\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"artisan\" name=\"CSP\" value=\"2\" required\u003E\r\n  \u003Clabel for=\"artisan\"\u003EArtisans, commerçants, cheffes d'entreprise\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"cadre\" name=\"CSP\" value=\"3\"\u003E\r\n  \u003Clabel for=\"cadre\"\u003ECadres et professions intellectuelles supérieures\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"profession_intermediaire\" name=\"CSP\" value=\"4\"\u003E\r\n  \u003Clabel for=\"profession_intermediaire\"\u003EProfessions intermédiaires\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"employe\" name=\"CSP\" value=\"5\"\u003E\r\n  \u003Clabel for=\"employe\"\u003EEmployés\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"ouvrier\" name=\"CSP\" value=\"6\"\u003E\r\n  \u003Clabel for=\"ouvrier\"\u003EOuvriers\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"retraite\" name=\"CSP\" value=\"7\"\u003E\r\n  \u003Clabel for=\"retraite\"\u003ERetraités\u003C\u002Flabel\u003E\u003Cbr\u003E   \r\n  \r\n  \u003Cinput type=\"radio\" id=\"etudiant\" name=\"CSP\" value=\"8\"\u003E\r\n  \u003Clabel for=\"etudiant\"\u003EÉtudiants\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"autre_sans_act\" name=\"CSP\" value=\"9\"\u003E\r\n  \u003Clabel for=\"autre_sans_act\"\u003EAutres personnes sans activité professionnelle\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n  \r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
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
          "title": "habit_jeu",
          "width": "m",
          "items": [
            {
              "type": "text",
              "title": "À quel fréquence jouez-vous aux jeux de hasard et d'argent ?",
              "content": "Pour information, les jeux de hasard et d'argent englobent une variété d'activités telles que l'achat de billets de loterie, l'utilisation de machines à sous, la participation au loto, le grattage de billets, les jeux de roulette, les paris sportifs, l'utilisation d'appareils de loterie électronique, ainsi que les jeux de cartes comme le poker ou le blackjack."
            },
            {
              "required": true,
              "type": "html",
              "content": "\u003Cbr\u003E\r\n\r\n\u003Cform\u003E\r\n  \u003Cinput type=\"radio\" id=\"jamais\" name=\"habit_jeu\" value=\"1\" required\u003E\r\n  \u003Clabel for=\"jamais\"\u003EJamais\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"1_par_an\" name=\"habit_jeu\" value=\"2\" required\u003E\r\n  \u003Clabel for=\"1_par_an\"\u003EUne fois par an\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"1_par_moi\" name=\"habit_jeu\" value=\"3\"\u003E\r\n  \u003Clabel for=\"1_par_moi\"\u003EUne fois par mois\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n\r\n  \u003Cinput type=\"radio\" id=\"1_par_semaine\" name=\"habit_jeu\" value=\"4\"\u003E\r\n  \u003Clabel for=\"1_par_semaine\"\u003EUne fois par semaine\u003C\u002Flabel\u003E\u003Cbr\u003E\r\n  \r\n  \u003Cinput type=\"radio\" id=\"1_par_jour\" name=\"habit_jeu\" value=\"5\"\u003E\r\n  \u003Clabel for=\"1_par_jour\"\u003EUne fois par jour\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\r\n  \r\n\r\n\u003C\u002Fform\u003E\r\n\r\n\u003Cbr\u003E\u003Cbr\u003E\r\n\u003Ccenter\u003E\r\n  \u003Cdiv\u003E\u003Cbutton\u003EContinuer →\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fcenter\u003E\r\n",
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
          "content": " \u003Cmain class=\"content-vertical-center\r\n             content-horizontal-center\"\u003E\r\n \u003Cdiv style=\"font-size: 1.2vw; width: 70%;\"\u003E  \r\n\r\n\u003Cp style=\"text-align: justify;\"\u003EVous avez terminé le questionnaire. L'entièreté de cette étude est anonyme et aucune des données recueillies ne permet de vous identifier. \u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\"text-align: justify;\"\u003ENous vous remercions de votre participation.\u003C\u002Fp\u003E\r\n\u003Cp style=\"text-align: justify;\"\u003EAvec cette étude, nous souhaitons évaluer le caractère préventif et promotionel de messages utilisés dans le cadre des mesures mise en oeuvres pour lutter contre les pratiques excessives dans les jeux de hasard et d'argent. Pour toutes questions relatives à cette étude, veuillez prendre contact avec la responsable de projet, Mme Valérie Le Floch, professeure des universités et disponible à l'adresse suivante : valerie.le-floch@univ-tlse2.fr\u003C\u002Fp\u003E\r\n\r\n\u003Cp style=\"text-align: justify;\"\u003E Vous pouvez fermer cette page.\u003C\u002Fp\u003E\r\n \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fmain\u003E",
          "tardy": true
        }
      ],
      "skip": "${this.state.consent!= 1}"
    }
  ]
})

// Let's go!
study.run()