import React, {Component} from "react";
import classes from './Layout.module.scss';
import Quiz from "../../containers/Quiz/Quiz";

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            birdsType: [
                {
                    type: 'Разминка',
                    id: 1,
                    birds: [
                        {
                            name: 'Ворон',
                            latin: 'Corvus corax',
                            id: 1,
                            description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
                            image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
                        },
                        {
                            name: 'Журавль',
                            latin: 'Grus grus',
                            id: 2,
                            description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
                            image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
                        },
                        {
                            name: 'Ласточка',
                            latin: 'Delichon urbicum',
                            id: 3,
                            description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на' +
                                ' протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
                            image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
                        },
                        {
                            name: 'Козодой',
                            latin: 'Caprimulgus europaeus',
                            id: 4,
                            description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются. ',
                            image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
                        },
                        {
                            name: 'Кукушка',
                            latin: 'Cuculus canorus',
                            id: 5,
                            description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
                            image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
                        },
                        {
                            name: 'Синица',
                            latin: 'Parus major',
                            id: 6,
                            description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
                            image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
                        },
                    ] //[{id, bird}]
                },
                {
                    type: 'Воробьиные',
                    id: 2,
                    birds: [
                        {
                            name: 'Воробей',
                            latin: 'Passer domesticus',
                            id: 1,
                            description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
                            image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
                        },
                        {
                            name: 'Грач',
                            latin: 'Corvus frugilegus',
                            id: 2,
                            description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
                            image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
                        },
                        {
                            name: 'Галка',
                            latin: 'Coloeus monedula',
                            id: 3,
                            description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
                            image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
                        },
                        {
                            name: 'Певчий дрозд',
                            latin: 'Turdus philomelos',
                            id: 4,
                            description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
                            image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
                        },
                        {
                            name: 'Сорока',
                            latin: 'Pica pica',
                            id: 5,
                            description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
                            image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
                        },
                        {
                            name: 'Сойка',
                            latin: 'Garrulus glandarius',
                            id: 6,
                            description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
                            image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
                        },
                    ] //[{id, bird}]
                },
                {
                    type: 'Лесные птицы',
                    id: 3,
                    birds: [
                        {
                            name: 'Зяблик',
                            latin: 'Fringilla coelebs',
                            id: 1,
                            description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
                            image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
                        },
                        {
                            name: 'Клёст',
                            latin: 'Loxia curvirostra',
                            id: 2,
                            description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
                            image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
                        },
                        {
                            name: 'Горлица',
                            latin: 'Streptopelia turtur',
                            id: 3,
                            description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
                            image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
                        },
                        {
                            name: 'Дятел',
                            latin: 'Dendrocopos major',
                            id: 4,
                            description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
                            image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
                        },
                        {
                            name: 'Удод',
                            latin: 'Upupa epops',
                            id: 5,
                            description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
                            image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
                        },
                        {
                            name: 'Стриж',
                            latin: 'Apus apus',
                            id: 6,
                            description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
                            image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
                        },

                    ] //[{id, bird}]
                },
                {
                    type: 'Певчие птицы',
                    id: 4,
                    birds: [ //[{id, bird}]
                        {
                            name: 'Жаворонок',
                            latin: 'Alauda arvensis',
                            id: 1,
                            description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
                            image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
                        },
                        {
                            name: 'Соловей',
                            latin: 'Luscinia luscinia',
                            id: 2,
                            description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
                            image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
                        },
                        {
                            name: 'Скворец',
                            latin: 'Sturnus vulgaris',
                            id: 3,
                            description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
                            image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
                        },
                        {
                            name: 'Иволга',
                            latin: 'Oriolus oriolus',
                            id: 4,
                            description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
                            image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
                        },
                        {
                            name: 'Свиристель',
                            latin: 'Bombycilla garrulus',
                            id: 5,
                            description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
                            image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
                        },
                        {
                            name: 'Щегол',
                            latin: 'Carduelis carduelis',
                            id: 6,
                            description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю',
                            image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
                        },
                    ]
                },
                {
                    type: 'Хищные птицы',
                    id: 5,
                    birds: [ //[{id, bird}]
                        {
                            name: 'Орёл',
                            latin: 'Aquila nipalensis',
                            id: 1,
                            description: 'В древние времена орёл был символом солнца. Орлы часто парят над землей,' +
                                ' при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров',
                            image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
                        },
                        {
                            name: 'Коршун',
                            latin: 'Milvus migrans',
                            id: 2,
                            description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
                            image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
                        },
                        {
                            name: 'Лунь',
                            latin: 'Circus cyaneus',
                            id: 3,
                            description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
                            image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
                        },
                        {
                            name: 'Сокол',
                            latin: 'Falco peregrinus',
                            id: 4,
                            description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
                            image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
                        },
                        {
                            name: 'Ястреб',
                            latin: 'Accipiter gentilis',
                            id: 5,
                            description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
                            image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
                        },
                        {
                            name: 'Филин',
                            latin: 'Bubo bubo',
                            id: 6,
                            description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
                            image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
                        },
                    ]
                },
                {
                    type: 'Морские птицы',
                    id: 6,
                    birds: [
                        {
                            name: 'Альбатрос',
                            latin: 'Diomedea exulans',
                            id: 1,
                            description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния',
                            image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
                        },
                        {
                            name: 'Олуша',
                            latin: 'Sula nebouxii',
                            id: 2,
                            description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок',
                            image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
                        },
                        {
                            name: 'Буревестник',
                            latin: 'Puffinus griseus',
                            id: 3,
                            description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
                            image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
                        },
                        {
                            name: 'Пеликан',
                            latin: 'Pelecanus',
                            id: 4,
                            description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
                            image: 'https://live.staticflickr.com/65535/49159147156_dcbbb5c12a.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
                        },
                        {
                            name: 'Пингвин',
                            latin: 'Aptenodytes forsteri',
                            id: 5,
                            description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
                            image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
                        },
                        {
                            name: 'Чайка',
                            latin: 'Larus argentatus',
                            id: 6,
                            description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
                            image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
                            audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
                        },
                    ]
                }
            ]
        }
    }

    getRandomNumber = () => Math.floor(Math.random() * 6);

        render() {
        return (
            <div className={classes.Layout}>
                <Quiz
                    birdsType={this.state.birdsType}
                    randomNumber={this.getRandomNumber()}

                />
                <main />
            </div>
        )
    }
}

export default Layout;