import React, {Component} from "react";
import classes from './Layout.module.scss';
import Header from '../../containers/Header/Header';
import Quiz from "../../containers/Quiz/Quiz";

class Layout extends Component {
    state = {
        score: 0,
        birdsType: [
            {
                type: 'Разминка',
                active: true,
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
                active: false,
                id: 2,
                birds: [
                    {
                        name: 'Воробей',
                        latin: 'Passer domesticus',
                        id: 1,
                        description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
                        image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
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
                active: false,
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
                active: false,
                id: 4,
                birds: [] //[{id, bird}]
            },
            {
                type: 'Хищные птицы',
                active: false,
                id: 5,
                birds: [] //[{id, bird}]
            },
            {
                type: 'Морские птицы',
                active: false,
                id: 6,
                birds: [] //[{id, bird}]
            }
        ]
    }

    getActiveSection = () => {
        let activeItem = null;

        this.state.birdsType.map((item) => {
            if(item.active) {
                activeItem = item;
            } else {
                return null;
            }
        });
        return activeItem;
    }

    render() {

        return (
            <div className={classes.Layout}>
                <Header
                    score={this.state.score}
                    activeSection={this.getActiveSection()}
                    birdsType={this.state.birdsType}
                />

                <Quiz
                    activeSection={this.getActiveSection()}
                    birdsType={this.state.birdsType}
                    score={this.state.score}
                />

                <main>
                </main>

            </div>
        )
    }
}

export default Layout;