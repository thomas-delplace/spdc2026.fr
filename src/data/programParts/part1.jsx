////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////                                                                                                                  /////////////////
/////////////////                                                                                                                  /////////////////
/////////////////                                            LA VOIX DES OUBLIÉ·ES                                                 /////////////////
/////////////////                                                                                                                  /////////////////
/////////////////                                                                                                                  /////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const part1 = {
        index:1,
        id: 'la-voix-des-oublie-es',
        link: 'la-voix-des-oublie-es',
        title: 'La voix des oublié·es ...',
        image:{
            src:'',
            alt:''
        },
        summary: (
            <>
                <h5 style={{color:`var(--color-pink)`}}>Saint-Pierre-des-Corps est une ville qu’on regarde trop souvent de loin. Une ville qu’on décrit, qu’on commente, qu’on caricature parfois. Mais rarement une ville qu’on écoute.</h5>
                <p>Nous voulons remettre au centre celles et ceux qu’on ne voit plus : les familles précaires, les jeunes sans solutions, les personnes âgées isolées, les associations qui tiennent le lien social, les habitantes et habitants des quartiers populaires.</p>
                <p>Notre programme part d’un principe simple : ceux qui vivent la ville doivent décider de son avenir.</p>
            </>
            
        ),
        icon: (<span>➜</span>),
        color:"--color-pink",
        measures:[
            {
                id:"referendum-initiative-citoyenne-ric",
                image:{
                    src:'/measures/referendum.webp',
                    alt:'Habitants votant et participant à une assemblée citoyenne'
                },
                key:true,
                title:"Instaurer un Référendum d’Initiative Citoyenne (RIC) dès 16 ans et sans condition de nationalité",
                text:(
                    <>
                        <h5 style={{color:`var(--color-pink)`}}>
                        À Saint-Pierre-des-Corps, les décisions municipales doivent appartenir aux habitants, pas à une poignée d’élus.
                        </h5>

                        <p>
                        Trop souvent, les choix importants se prennent sans celles et ceux qui vivent la ville au quotidien. 
                        Entre deux élections, la parole citoyenne disparaît et la démocratie se résume à attendre six ans en espérant être écouté.
                        Nous refusons cette mise à distance permanente des habitantes et habitants.
                        </p>

                        <p>
                        Les jeunes, les personnes étrangères, les familles populaires, les travailleurs précaires font tourner la commune chaque jour,
                        mais n’ont presque jamais la possibilité d’influencer directement les décisions locales. 
                        Pourtant, ce sont eux qui subissent en premier les choix politiques.
                        </p>

                        <p>
                        Nous créerons un <span style={{fontWeight:'bold', color:`var(--color-pink)`}}>Référendum d’Initiative Citoyenne (RIC)</span> communal.
                        Chaque personne résident de manière régulière à Saint-Pierre-des-Corps pourra faire une proposition sur une plateforme dédiée ou directeent en mairie. Chaque proposition qui aura reçu le soutien de 10% de la population de la ville sera mise au vote dans le cadre du référendum. Si le nombre de votants atteint 50% des personnes en droit de participer au scrutin, la décision sera mise en place par la municipalité. les habitants pourront proposer une mesure, modifier un projet ou demander l’abrogation d’une décision.
                        Le vote sera ouvert dès 16 ans et sans condition de nationalité, parce que vivre ici, c’est déjà avoir son mot à dire.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-pink)`}}>
                        Notre ambition est claire : faire entrer la démocratie dans la vie quotidienne.
                        À Saint-Pierre-des-Corps, le pouvoir doit revenir à celles et ceux qui font la ville, pas à celles et ceux qui la dirigent d’en haut.
                        </p>
                    </>
                )
            },
            {
                id:"ric-revocatoire",
                image:{
                    src:'/measures/referendum.webp',
                    alt:'Habitants participant à un vote citoyen pour décider du maintien d’un élu'
                },
                key:true,
                title:"Instaurer un Référendum d’Initiative Citoyenne révocatoire",
                text:(
                    <>
                        <h5 style={{color:`var(--color-pink)`}}>
                        Un élu doit rendre des comptes en permanence, pas seulement tous les six ans.
                        </h5>

                        <p>
                        Une fois élus, trop de responsables politiques agissent sans contrôle réel des habitants.
                        Promesses oubliées, décisions imposées, manque d’écoute : les citoyens n’ont aujourd’hui aucun moyen d’agir entre deux élections.
                        Cette impunité démocratique nourrit la défiance et l’abstention.
                        </p>

                        <p>
                        Nous voulons changer les règles du jeu.
                        La démocratie ne doit pas être un chèque en blanc, mais un contrat clair entre les élus et la population.
                        Si ce contrat est rompu, les habitantes et habitants doivent pouvoir reprendre la main.
                        </p>

                        <p>
                        Nous mettrons donc en place un <span style={{fontWeight:'bold', color:`var(--color-pink)`}}>Référendum d’Initiative Citoyenne révocatoire</span>.
                        À partir de la moitié du mandat d’un élu, une procédure de révocation pourra être proposée.
                        Toute personne de plus de 16 ans vivant dans la commune, sans condition de nationalité, pourra signer et voter.
                        </p>

                        <p>
                        Pour être soumis au vote, la proposition devra recueillir le soutien d’au moins 20 % de la population.
                        Le référendum sera valide avec un quorum minimum de 50 % des personnes ayant le droit de participer.
                        Ainsi, la décision restera collective, légitime et incontestable.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-pink)`}}>
                        Notre objectif est simple : des élus responsables, contrôlés et toujours au service des habitants.
                        À Saint-Pierre-des-Corps, le pouvoir ne doit jamais se confisquer. Il appartient au peuple, du premier au dernier jour du mandat.
                        </p>
                    </>
                )
            },{
                id:"campagnes-actives-inscription-listes-electorales",
                image:{
                    src:'/measures/electeur.webp',
                    alt:''
                },
                title:"Lancer chaque année une campagne d'inscription sur les listes électorales",
                text:(
                    <>
                        <h5 style={{color:`var(--color-pink)`}}>
                        Trop d’habitantes et d’habitants sont privés de vote simplement parce qu’ils ne sont pas inscrits. Ce n’est pas un manque d’intérêt, c’est un manque d’accompagnement.
                        </h5>

                        <p>
                        Déménagements, démarches administratives complexes, méconnaissance des dates limites : chaque élection, des centaines de Corpopétrussiens découvrent trop tard qu’ils ne peuvent pas participer. 
                        Résultat : une démocratie qui parle au nom de toutes et tous… mais sans toutes et tous.
                        </p>

                        <p>
                        Nous mènerons donc <span style={{fontWeight:'bold'}}>une campagne municipale d’inscription sur les listes électorales chaque année</span>, au plus près des quartiers, des marchés, des écoles, des associations et des lieux de travail. 
                        Aller vers les gens, expliquer, aider à remplir les formulaires, accompagner celles et ceux qui se sentent éloignés des institutions : la mairie doit faciliter le droit de vote, pas le compliquer.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-pink)`}}>
                        Notre conviction est simple : plus nous sommes nombreux à voter, plus la ville nous ressemble. La démocratie n’a de sens que si personne n’est laissé à la porte du scrutin.
                        </p>
                    </>
                )
            },
            {
                id:"enquete-annuelle-satisfaction-citoyenne",
                image:{
                    src:'/measures/enquete.webp',
                    alt:''
                },
                title:"Effectuer une grande enquête citoyenne sur leur satisfaction quant à l'action de la municipalité",
                text:(
                    <>
                        <h5 style={{color:`var(--color-pink)`}}>
                        La démocratie ne se résume pas à glisser un bulletin dans l’urne tous les six ans. Les habitantes et habitants doivent pouvoir évaluer, critiquer et orienter l’action municipale en continu.
                        </h5>

                        <p>
                        Trop souvent, les décisions se prennent loin du quotidien réel des gens. Services publics qui se dégradent, projets mal compris, priorités déconnectées : quand on n’écoute pas, on finit par gouverner à côté.
                        Et la défiance grandit.
                        </p>

                        <p>
                        Nous mettrons donc en place <span style={{fontWeight:'bold'}}>une enquête annuelle de satisfaction citoyenne</span>, accessible à toutes et tous, en ligne et sur papier, pour recueillir des avis clairs sur les services municipaux, les politiques menées et les priorités à venir. 
                        Les résultats seront rendus publics et débattus en conseil municipal, avec des engagements concrets pour corriger ce qui ne fonctionne pas.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-pink)`}}>
                        Notre objectif est simple : une mairie qui rend des comptes, qui apprend de ses erreurs et qui avance avec ses habitants. Parce que gouverner, ce n’est pas décider à la place des gens, c’est agir avec eux.
                        </p>
                    </>
                )
            },
            {
                id:"droit-interpellation-conseil-municipal",
                image:{
                    src:'/measures/interpel.webp',
                    alt:''
                },
                key:true,
                title:"Mettre en place un droit d'interpellation et de critique de toutes et tous en fin de conseil municipal",
                text:(
                    <>
                        <h5 style={{color:`var(--color-pink)`}}>
                        Un conseil municipal ne doit pas être un spectacle où l’on regarde les élu·es décider entre eux. Il doit devenir un moment d’échange direct avec la population.
                        </h5>

                        <p>
                        Trop souvent, les habitantes et habitants assistent aux séances sans pouvoir poser leurs questions, exprimer leurs difficultés ou demander des comptes sur des décisions qui impactent pourtant leur vie quotidienne. 
                        Cette distance nourrit l’incompréhension, la colère et la défiance envers la politique locale.
                        </p>

                        <p>
                        Nous instaurerons donc <span style={{fontWeight:'bold'}}>un droit d’interpellation citoyenne de 30 minutes à la fin de chaque conseil municipal</span>. 
                        Chacun pourra prendre la parole pour signaler un problème, proposer une idée, demander des explications sur une délibération, ou tout simplement exprimer son mécontentement. Même pour nous secouer un peu s’il le faut. Une démocratie vivante, ça parle fort, et c’est très bien comme ça.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-pink)`}}>
                        Notre objectif est clair : rendre la mairie accessible, humaine et contrôlable par ses habitants. Parce que les décisions publiques doivent toujours pouvoir être discutées par celles et ceux qui les vivent.
                        </p>
                    </>
                )
            },
            {
                id:"baisser-indemnite-maire-augmenter-adjoints",
                image:{
                    src:'',
                    alt:''
                },
                key:true,
                title:"Rééquilibrer les indemnités : baisser celle du maire et revaloriser celles des adjoints",
                text:(
                    <>
                        <h5 style={{color:`var(--color-pink)`}}>
                        Être élu·e n’est pas un privilège, c’est un service public. Les indemnités doivent refléter l’engagement, pas une rente politique.
                        </h5>

                        <p>
                        En France, les indemnités de fonction des élu·es municipaux sont fixées en pourcentage d’un indice public (indice brut 1027) et varient selon la taille de la commune. Elles compensent les sujétions liées à l’exercice du mandat, mais ne doivent ni enrichir ni installer durablement une caste politique.
                        </p>

                        <p>
                            L'ensemble des indemnités constituent ce qu'on appelle l'enveloppe du maire :
                        </p>
                        <p style={{borderLeft:'5px solid var(--color-pink)', padding:'2rem', marginLeft:'calc(2rem + 5px)',fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",background:'linear-gradient(to right, color-mix(in srgb, var(--color-pink), transparent 80%), color-mix(in srgb, var(--color-pink), transparent 90%))'}}>
                            <ul style={{marginBottom:'1rem'}}>
                                <li>2778,71€ pour le maire</li>
                                <li>1175,61 € par adjoint·e (9 adjoint·es)</li>
                                <li>Enveloppe totale : 13359,20 €</li>
                            </ul>
                            <span style={{fontStyle:'italic'}}>
                            Ces montants restent dans les limites légales, mais dessinent un déséquilibre net entre l’indemnité du maire et la charge réelle de travail de ses adjoints. Libre choix du conseil municipal de répartir cette enveloppe comme ils le décident.
                            </span>
                        </p>

                        <p>
                        Nous proposons de rééquilibrer cette enveloppe : réduire l’indemnité du maire pour rapprocher la fonction de son sens originel de service, et révaloriser celles des adjoint·es qui portent un volume de travail considérable au quotidien.
                        </p>
                        {/**
                         * 
                         * EXEMPLE
                         * 
                         * Enveloppe du maire : 13359.2
                         * 
                         * maire + 9 adjoints + 5 délégués
                         * Maire et adjoints :1145.07 bruts / 950.41 nets
                         * Délégués : 381.69 bruts / 316.80 nets
                         * 
                         */}

                        <p>
                        Cela ne changera pas le <span style={{textDecoration:'underline'}}>montant global</span> des indemnités allouées à la municipalité, car les enveloppes sont plafonnées par la loi, mais <span style={{textDecoration:'underline'}}>redistribuera la reconnaissance financière vers celles et ceux qui œuvrent de manière concrète au service des habitants</span>, loin des logements de fonction ou des logiques de prestige.
                        </p>

                        <p style={{fontWeight:'bold', color:'black'}}>Le maire touchera la même indemnité que ses adjoints, conformément à l'article L2123-4 alinéa IV du Code général des collectivités territoriales (CGCT).</p>
                        <p style={{fontWeight:'bold', color:`var(--color-pink)`}}>
                        Notre objectif n’est pas de créer des rentes, mais d’affirmer que servir la ville doit être digne, équitable et tourné vers l’intérêt général. Chez nous, l’engagement ne doit pas enrichir au détriment de l’efficacité collective.
                        </p>
                    </>
                )
            },
            {
                id:"publication-indemnites-elus",
                image:{
                    src:'',
                    alt:''
                },
                key:false,
                title:"Publier le montant des indemnités des élu·es",
                text:(
                    <>
                        <h5 style={{color:`var(--color-pink)`}}>
                        L’argent public ne doit jamais être un sujet tabou. La transparence n’est pas une option : c’est une condition de la confiance démocratique.
                        </h5>

                        <p>
                        Trop souvent, les montants des indemnités des élu·es sont difficiles à trouver, noyés dans des documents administratifs techniques ou absents des supports municipaux accessibles. 
                        Ce flou alimente les fantasmes, les rumeurs et la défiance, alors même que la clarté permettrait d’assainir le débat public.
                        </p>

                        <p>
                        Nous publierons <span style={{fontWeight:'bold'}}>de manière claire, accessible et compréhensible le montant exact des indemnités perçues par chaque élu·e</span>, ainsi que leur évolution au cours du mandat. 
                        Ces informations seront disponibles sur le site de la ville et mises à jour régulièrement. Parce que rendre des comptes ne doit pas être une contrainte, mais une habitude.
                        </p>

                        <p style={{fontWeight:'bold', color:`var(--color-pink)`}}>
                        Notre engagement est simple : chaque euro issu des impôts des Corpopétrussien·nes doit pouvoir être tracé, compris et discuté. La démocratie locale se renforce quand la transparence devient la règle, pas l’exception.
                        </p>
                    </>
                )
            },
            //////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////// AUTRES MESURES
            //////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////////////////////////////
            {
                id:'',
                image:{
                    src:'',
                    alt:''
                },
                key:false,
                title:'',
                text:(
                    <>
                    
                    </>
                )
            },
        ],
        objectives:[]
    }

export default part1