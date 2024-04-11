import MoviePoster from '@/components/MoviePoster'
import VirtualHubSection from '@/components/VirtualHubSection'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNextCustom,
  CarouselPreviousCustom,
} from '@/components/ui/carousel'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon, CirclePlayIcon } from 'lucide-react'
import TrailerThumbnail from '@/components/TrailerThumbnail'

const homeData = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/j3Z3XktmWB1VhsS8iXNcrR86PXi.jpg',
      genre_ids: [28, 878, 12, 14],
      id: 823464,
      original_language: 'en',
      original_title: 'Godzilla x Kong: The New Empire',
      overview:
        'Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.',
      popularity: 3269.222,
      poster_path: '/gmGK5Gw5CIGMPhOmTO0bNA9Q66c.jpg',
      release_date: '2024-03-27',
      title: 'Godzilla x Kong: The New Empire',
      video: false,
      vote_average: 6.7,
      vote_count: 504,
    },
    {
      adult: false,
      backdrop_path: '/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg',
      genre_ids: [28, 12, 16, 35, 10751],
      id: 1011985,
      original_language: 'en',
      original_title: 'Kung Fu Panda 4',
      overview:
        'Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.',
      popularity: 2192.27,
      poster_path: '/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg',
      release_date: '2024-03-02',
      title: 'Kung Fu Panda 4',
      video: false,
      vote_average: 6.716,
      vote_count: 647,
    },
    {
      adult: false,
      backdrop_path: '/oe7mWkvYhK4PLRNAVSvonzyUXNy.jpg',
      genre_ids: [28, 53],
      id: 359410,
      original_language: 'en',
      original_title: 'Road House',
      overview:
        'Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.',
      popularity: 1656.695,
      poster_path: '/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg',
      release_date: '2024-03-08',
      title: 'Road House',
      video: false,
      vote_average: 7.075,
      vote_count: 1310,
    },
    {
      adult: false,
      backdrop_path: '/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg',
      genre_ids: [878, 12],
      id: 693134,
      original_language: 'en',
      original_title: 'Dune: Part Two',
      overview:
        'Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.',
      popularity: 1933.355,
      poster_path: '/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
      release_date: '2024-02-27',
      title: 'Dune: Part Two',
      video: false,
      vote_average: 8.353,
      vote_count: 2569,
    },
    {
      adult: false,
      backdrop_path: '/9c0lHTXRqDBxeOToVzRu0GArSne.jpg',
      genre_ids: [878, 28],
      id: 935271,
      original_language: 'en',
      original_title: 'After the Pandemic',
      overview:
        "Set in a post-apocalyptic world where a global airborne pandemic has wiped out 90% of the Earth's population and only the young and immune have endured as scavengers. For Ellie and Quinn, the daily challenges to stay alive are compounded when they become hunted by the merciless Stalkers.",
      popularity: 1345.924,
      poster_path: '/p1LbrdJ53dGfEhRopG71akfzOVu.jpg',
      release_date: '2022-03-01',
      title: 'After the Pandemic',
      video: false,
      vote_average: 5.389,
      vote_count: 27,
    },
    {
      adult: false,
      backdrop_path: '/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg',
      genre_ids: [28, 14],
      id: 634492,
      original_language: 'en',
      original_title: 'Madame Web',
      overview:
        'Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.',
      popularity: 1179.859,
      poster_path: '/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg',
      release_date: '2024-02-14',
      title: 'Madame Web',
      video: false,
      vote_average: 5.657,
      vote_count: 1014,
    },
    {
      adult: false,
      backdrop_path: '/wUp0bUXaveR40ikBhDgWwNTijuD.jpg',
      genre_ids: [28, 9648, 53],
      id: 1181548,
      original_language: 'en',
      original_title: 'Heart of the Hunter',
      overview:
        'A retired assassin is pulled back into action when his friend uncovers a dangerous conspiracy at the heart of the South African government.',
      popularity: 1187.536,
      poster_path: '/n726fdyL1dGwt15bY7Nj3XOXc4Q.jpg',
      release_date: '2024-03-28',
      title: 'Heart of the Hunter',
      video: false,
      vote_average: 5.618,
      vote_count: 38,
    },
    {
      adult: false,
      backdrop_path: '/rKmp0vm6PNaFA0g1bzM70eyWJ6I.jpg',
      genre_ids: [28],
      id: 873972,
      original_language: 'en',
      original_title: 'Hunters',
      overview:
        'As John T. Wrecker continues his task of protecting a group of refugees from a virus, the threat of something new and even more dangerous grows ever closer in the form of monstrous mutants.',
      popularity: 812.474,
      poster_path: '/3UKlVa1CBeQkRksHV5OfFTO52qd.jpg',
      release_date: '2021-09-13',
      title: 'Hunters',
      video: false,
      vote_average: 5.222,
      vote_count: 9,
    },
    {
      adult: false,
      backdrop_path: '/qekky2LbtT1wtbD5MDgQvjfZQ24.jpg',
      genre_ids: [28, 53],
      id: 984324,
      original_language: 'fr',
      original_title: 'Le salaire de la peur',
      overview:
        'When an explosion at an oil well threatens hundreds of lives, a crack team is called upon to make a deadly desert crossing with nitroglycerine in tow.',
      popularity: 1456.417,
      poster_path: '/jFK2ZLQUzo9pea0jfMCHDfvWsx7.jpg',
      release_date: '2024-03-28',
      title: 'The Wages of Fear',
      video: false,
      vote_average: 5.913,
      vote_count: 119,
    },
    {
      adult: false,
      backdrop_path: '/2KGxQFV9Wp1MshPBf8BuqWUgVAz.jpg',
      genre_ids: [16, 28, 12, 35, 10751],
      id: 940551,
      original_language: 'en',
      original_title: 'Migration',
      overview:
        'After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.',
      popularity: 1008.85,
      poster_path: '/ldfCF9RhR40mppkzmftxapaHeTo.jpg',
      release_date: '2023-12-06',
      title: 'Migration',
      video: false,
      vote_average: 7.541,
      vote_count: 1111,
    },
    {
      adult: false,
      backdrop_path: '/deLWkOLZmBNkm8p16igfapQyqeq.jpg',
      genre_ids: [14, 28, 12],
      id: 763215,
      original_language: 'en',
      original_title: 'Damsel',
      overview:
        "A young woman's marriage to a charming prince turns into a fierce fight for survival when she's offered up as a sacrifice to a fire-breathing dragon.",
      popularity: 787.095,
      poster_path: '/AgHbB9DCE9aE57zkHjSmseszh6e.jpg',
      release_date: '2024-03-07',
      title: 'Damsel',
      video: false,
      vote_average: 7.132,
      vote_count: 1494,
    },
    {
      adult: false,
      backdrop_path: '/TGsfNWkASegCfAn6ED1b08a9O6.jpg',
      genre_ids: [27, 9648, 53],
      id: 1125311,
      original_language: 'en',
      original_title: 'Imaginary',
      overview:
        'When Jessica moves back into her childhood home with her family, her youngest stepdaughter Alice develops an eerie attachment to a stuffed bear named Chauncey she finds in the basement. Alice starts playing games with Chauncey that begin playful and become increasingly sinister. As Alice’s behavior becomes more and more concerning, Jessica intervenes only to realize Chauncey is much more than the stuffed toy bear she believed him to be.',
      popularity: 1021.698,
      poster_path: '/9u6HEtZJdZDjPGGJq6YEuhPnoan.jpg',
      release_date: '2024-03-06',
      title: 'Imaginary',
      video: false,
      vote_average: 6.081,
      vote_count: 166,
    },
    {
      adult: false,
      backdrop_path: '/4woSOUD0equAYzvwhWBHIJDCM88.jpg',
      genre_ids: [28, 27, 53],
      id: 1096197,
      original_language: 'en',
      original_title: 'No Way Up',
      overview:
        "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
      popularity: 645.573,
      poster_path: '/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg',
      release_date: '2024-01-18',
      title: 'No Way Up',
      video: false,
      vote_average: 6.343,
      vote_count: 345,
    },
    {
      adult: false,
      backdrop_path: '/7ZP8HtgOIDaBs12krXgUIygqEsy.jpg',
      genre_ids: [878, 28, 14, 12],
      id: 601796,
      original_language: 'ko',
      original_title: '외계+인 1부',
      overview:
        "Gurus in the late Goryeo dynasty try to obtain a fabled, holy sword, and humans in 2022 hunt down an alien prisoner that is locked in a human's body. The two parties cross paths when a time-traveling portal opens up.",
      popularity: 727.7,
      poster_path: '/8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg',
      release_date: '2022-07-20',
      title: 'Alienoid',
      video: false,
      vote_average: 7.074,
      vote_count: 251,
    },
    {
      adult: false,
      backdrop_path: '/2C3CdVzINUm5Cm1lrbT2uiRstwX.jpg',
      genre_ids: [28, 14, 10752],
      id: 856289,
      original_language: 'zh',
      original_title: '封神第一部：朝歌风云',
      overview:
        'Based on the most well-known classical fantasy novel of China, Fengshenyanyi, the trilogy is a magnificent eastern high fantasy epic that recreates the prolonged mythical wars between humans, immortals and monsters, which happened more than three thousand years ago.',
      popularity: 797.318,
      poster_path: '/ccJpK0rqzhQeP7Mrs2uKqObFY4L.jpg',
      release_date: '2023-07-20',
      title: 'Creation of the Gods I: Kingdom of Storms',
      video: false,
      vote_average: 6.858,
      vote_count: 179,
    },
    {
      adult: false,
      backdrop_path: '/lzWHmYdfeFiMIY4JaMmtR7GEli3.jpg',
      genre_ids: [878, 12],
      id: 438631,
      original_language: 'en',
      original_title: 'Dune',
      overview:
        "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
      popularity: 742.651,
      poster_path: '/d5NXSklXo0qyIYkgV94XAgMIckC.jpg',
      release_date: '2021-09-15',
      title: 'Dune',
      video: false,
      vote_average: 7.79,
      vote_count: 11148,
    },
    {
      adult: false,
      backdrop_path: '/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg',
      genre_ids: [28, 878, 53],
      id: 399566,
      original_language: 'en',
      original_title: 'Godzilla vs. Kong',
      overview:
        'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
      popularity: 552.931,
      poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
      release_date: '2021-03-24',
      title: 'Godzilla vs. Kong',
      video: false,
      vote_average: 7.624,
      vote_count: 9553,
    },
    {
      adult: false,
      backdrop_path: '/bWIIWhnaoWx3FTVXv6GkYDv3djL.jpg',
      genre_ids: [878, 27, 28],
      id: 940721,
      original_language: 'ja',
      original_title: 'ゴジラ-1.0',
      overview:
        'Postwar Japan is at its lowest point when a new crisis emerges in the form of a giant monster, baptized in the horrific power of the atomic bomb.',
      popularity: 489.282,
      poster_path: '/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg',
      release_date: '2023-11-03',
      title: 'Godzilla Minus One',
      video: false,
      vote_average: 7.841,
      vote_count: 472,
    },
    {
      adult: false,
      backdrop_path: '/oFAukXiMPrwLpbulGmB5suEZlrm.jpg',
      genre_ids: [28, 12, 878, 14, 18],
      id: 624091,
      original_language: 'id',
      original_title: 'Sri Asih',
      overview:
        'Alana discover the truth about her origin: she’s not an ordinary human being. She may be the gift for humanity and become its protector as Sri Asih. Or a destruction, if she can’t control her anger.',
      popularity: 519.189,
      poster_path: '/wShcJSKMFg1Dy1yq7kEZuay6pLS.jpg',
      release_date: '2022-11-17',
      title: 'Sri Asih',
      video: false,
      vote_average: 6.2,
      vote_count: 73,
    },
    {
      adult: false,
      backdrop_path: '/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg',
      genre_ids: [28, 53, 10752],
      id: 969492,
      original_language: 'en',
      original_title: 'Land of Bad',
      overview:
        'When a Delta Force special ops mission goes terribly wrong, Air Force drone pilot Reaper has 48 hours to remedy what has devolved into a wild rescue operation. With no weapons and no communication other than the drone above, the ground mission suddenly becomes a full-scale battle when the team is discovered by the enemy.',
      popularity: 484.124,
      poster_path: '/h3jYanWMEJq6JJsCopy1h7cT2Hs.jpg',
      release_date: '2024-01-25',
      title: 'Land of Bad',
      video: false,
      vote_average: 7.112,
      vote_count: 492,
    },
  ],
  total_pages: 43488,
  total_results: 869753,
}

const spiderman = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/2PDTWfuBWQKVC7aPAqJK5UCpz08.jpg',
      genre_ids: [28, 878],
      id: 557,
      original_language: 'en',
      original_title: 'Spider-Man',
      overview:
        'After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.',
      popularity: 87.719,
      poster_path: '/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg',
      release_date: '2002-05-01',
      title: 'Spider-Man',
      video: false,
      vote_average: 7.294,
      vote_count: 18280,
    },
    {
      adult: false,
      backdrop_path: '/zlpZzccypkAYFZIyYLQcchl90ZC.jpg',
      genre_ids: [878, 28, 80, 10770],
      id: 225914,
      original_language: 'en',
      original_title: 'Spider-Man',
      overview:
        'When an extortionist threatens to force a multi-suicide unless a huge ransom is paid, only Peter Parker can stop him with his new powers as Spider-Man.',
      popularity: 14.486,
      poster_path: '/jNxRHZ2cxVkNRtxgHuCtv7GY4JP.jpg',
      release_date: '1977-09-14',
      title: 'Spider-Man',
      video: false,
      vote_average: 6.1,
      vote_count: 150,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [28, 878],
      id: 445033,
      original_language: 'en',
      original_title: 'Spider-Man',
      overview:
        'Spider-man must rescue the beautiful daughter of the evil Dr. Lightning.',
      popularity: 3.038,
      poster_path: '/iYBfBk1i9zjN9Vybbj8UgTYzkyv.jpg',
      release_date: '1969-01-01',
      title: 'Spider-Man',
      video: false,
      vote_average: 6.7,
      vote_count: 21,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      id: 68658,
      original_language: 'en',
      original_title: 'Spiderman',
      overview: '',
      popularity: 0.6,
      poster_path: '/y6M33fb3AjJAD7jMP6TSumjtl1O.jpg',
      release_date: '1990-01-01',
      title: 'Spider-Man',
      video: false,
      vote_average: 6.8,
      vote_count: 12,
    },
    {
      adult: false,
      backdrop_path: '/kGWpZewzInbzTuaIHcy0bFgzXuM.jpg',
      genre_ids: [16, 28, 12, 878],
      id: 569094,
      original_language: 'en',
      original_title: 'Spider-Man: Across the Spider-Verse',
      overview:
        'After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.',
      popularity: 187.395,
      poster_path: '/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
      release_date: '2023-05-31',
      title: 'Spider-Man: Across the Spider-Verse',
      video: false,
      vote_average: 8.377,
      vote_count: 6108,
    },
    {
      adult: false,
      backdrop_path: '/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg',
      genre_ids: [28, 12, 878],
      id: 634649,
      original_language: 'en',
      original_title: 'Spider-Man: No Way Home',
      overview:
        'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
      popularity: 215.77,
      poster_path: '/5weKu49pzJCt06OPpjvT80efnQj.jpg',
      release_date: '2021-12-15',
      title: 'Spider-Man: No Way Home',
      video: false,
      vote_average: 7.969,
      vote_count: 19256,
    },
    {
      adult: false,
      backdrop_path: null,
      genre_ids: [],
      id: 1203070,
      original_language: 'en',
      original_title: 'SpiderMan',
      overview: 'A long story short made with life',
      popularity: 1.09,
      poster_path: null,
      release_date: '',
      title: 'SpiderMan',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/hlCq6Qh9GVtuNcGZF4mQYluaZix.jpg',
      genre_ids: [16, 28, 12, 878],
      id: 324857,
      original_language: 'en',
      original_title: 'Spider-Man: Into the Spider-Verse',
      overview:
        'Struggling to find his place in the world while juggling school and family, Brooklyn teenager Miles Morales is unexpectedly bitten by a radioactive spider and develops unfathomable powers just like the one and only Spider-Man. While wrestling with the implications of his new abilities, Miles discovers a super collider created by the madman Wilson "Kingpin" Fisk, causing others from across the Spider-Verse to be inadvertently transported to his dimension.',
      popularity: 157.476,
      poster_path: '/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg',
      release_date: '2018-12-06',
      title: 'Spider-Man: Into the Spider-Verse',
      video: false,
      vote_average: 8.405,
      vote_count: 14883,
    },
    {
      adult: false,
      backdrop_path: '/fn4n6uOYcB6Uh89nbNPoU2w80RV.jpg',
      genre_ids: [28, 12, 878, 18],
      id: 315635,
      original_language: 'en',
      original_title: 'Spider-Man: Homecoming',
      overview:
        'Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.',
      popularity: 122.156,
      poster_path: '/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg',
      release_date: '2017-07-05',
      title: 'Spider-Man: Homecoming',
      video: false,
      vote_average: 7.338,
      vote_count: 21102,
    },
    {
      adult: false,
      backdrop_path: '/ng6SSB3JhbcpKTwbPDsRwUYK8Cq.jpg',
      genre_ids: [28, 12, 878],
      id: 429617,
      original_language: 'en',
      original_title: 'Spider-Man: Far From Home',
      overview:
        'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
      popularity: 86.045,
      poster_path: '/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
      release_date: '2019-06-28',
      title: 'Spider-Man: Far From Home',
      video: false,
      vote_average: 7.432,
      vote_count: 15052,
    },
    {
      adult: false,
      backdrop_path: '/hDvqcbZhq9ux0euxYxCP9N6m1Rh.jpg',
      genre_ids: [28, 12, 878],
      id: 102382,
      original_language: 'en',
      original_title: 'The Amazing Spider-Man 2',
      overview:
        'For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.',
      popularity: 74.025,
      poster_path: '/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg',
      release_date: '2014-04-16',
      title: 'The Amazing Spider-Man 2',
      video: false,
      vote_average: 6.505,
      vote_count: 12754,
    },
    {
      adult: false,
      backdrop_path: '/sxskOU71CO8LaNX2LOtjYFUtKv7.jpg',
      genre_ids: [28, 12, 878],
      id: 1930,
      original_language: 'en',
      original_title: 'The Amazing Spider-Man',
      overview:
        "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
      popularity: 77.869,
      poster_path: '/jIfkQNARYyERqRAq1p1c8xgePp4.jpg',
      release_date: '2012-06-23',
      title: 'The Amazing Spider-Man',
      video: false,
      vote_average: 6.698,
      vote_count: 16800,
    },
    {
      adult: false,
      backdrop_path: '/eSGBbCOX7KM3Rf8HHwK8tglklyS.jpg',
      genre_ids: [28, 12, 878],
      id: 559,
      original_language: 'en',
      original_title: 'Spider-Man 3',
      overview:
        'The seemingly invincible Spider-Man goes up against an all-new crop of villains—including the shape-shifting Sandman. While Spider-Man’s superpowers are altered by an alien organism, his alter ego, Peter Parker, deals with nemesis Eddie Brock and also gets caught up in a love triangle.',
      popularity: 72.037,
      poster_path: '/qFmwhVUoUSXjkKRmca5yGDEXBIj.jpg',
      release_date: '2007-05-01',
      title: 'Spider-Man 3',
      video: false,
      vote_average: 6.414,
      vote_count: 13575,
    },
    {
      adult: false,
      backdrop_path: '/tObVe1R7JnO3VXBvAOWTEPmmegu.jpg',
      genre_ids: [99],
      id: 961651,
      original_language: 'en',
      original_title: 'Spider-Man: All Roads Lead to No Way Home',
      overview:
        'Join our hosts JB Smoove and Martin Starr for a celebration of 20 years of Spider-Man™ movies!  From the original Sam Raimi trilogy to Marc Webb’s “amazing” movies to the latest trio from Director Jon Watts, we will take viewers through the stars, the stunts and action, the villains and heroes and an homage to Stan Lee, along with a few surprises. Find your favourite Spider-Man pajamas and prepare to swing through the past two decades of Spider-Man at the movies!',
      popularity: 23.911,
      poster_path: '/e2LLmI5wKIrWGAy9Of3yyWu7Szn.jpg',
      release_date: '2022-05-03',
      title: 'Spider-Man: All Roads Lead to No Way Home',
      video: false,
      vote_average: 6.849,
      vote_count: 63,
    },
    {
      adult: false,
      backdrop_path: '/bVVSy18oVLZJTyFy2WsKIrsGHYZ.jpg',
      genre_ids: [28, 12, 878],
      id: 438561,
      original_language: 'ja',
      original_title: 'スパイダーマン',
      overview:
        'The Iron Cross Army are sabotaging oil-tankers with the help of their monster, the Sea-Devil, a semi-mechanical anthropomorphic swordfish with an ability to shoot torpedoes from its mouth. Spiderman employs the help of the interpol agent Juzo Mamiya to help him stop the Iron Cross Army.',
      popularity: 3.942,
      poster_path: '/hi98SQoZgxBMHmWsbhxyh5tNQcB.jpg',
      release_date: '1978-07-22',
      title: 'Japanese Spiderman: Episode 0',
      video: false,
      vote_average: 6.4,
      vote_count: 26,
    },
    {
      adult: false,
      backdrop_path: '/4vGNoJEF7UK6nMgHDbnzmXVnzWe.jpg',
      genre_ids: [28, 12, 878],
      id: 558,
      original_language: 'en',
      original_title: 'Spider-Man 2',
      overview:
        "Peter Parker is going through a major identity crisis. Burned out from being Spider-Man, he decides to shelve his superhero alter ego, which leaves the city suffering in the wake of carnage left by the evil Doc Ock. In the meantime, Parker still can't act on his feelings for Mary Jane Watson, a girl he's loved since childhood. A certain anger begins to brew in his best friend Harry Osborn as well...",
      popularity: 29.184,
      poster_path: '/olxpyq9kJAZ2NU1siLshhhXEPR7.jpg',
      release_date: '2004-06-25',
      title: 'Spider-Man 2',
      video: false,
      vote_average: 7.271,
      vote_count: 14574,
    },
    {
      adult: false,
      backdrop_path: '/8YTbDLjcIpCvBjiUa1yYFFUhwGX.jpg',
      genre_ids: [99, 80],
      id: 1183166,
      original_language: 'fr',
      original_title: "Vjeran Tomic: L'homme-araignée de Paris",
      overview:
        'In his own words, the burglar behind the 2010 robbery of the Paris Museum of Modern Art tells how he pulled off the biggest art heist in French history.',
      popularity: 6.455,
      poster_path: '/sv0Pzq9Kdv3NBZNdKnEu9xOdcT4.jpg',
      release_date: '2023-10-20',
      title: 'Vjeran Tomic: The Spider-Man of Paris',
      video: false,
      vote_average: 6.9,
      vote_count: 36,
    },
    {
      adult: false,
      backdrop_path: '/46Br5afTklXva5gRI6wXcAApaGP.jpg',
      genre_ids: [16, 28, 12, 878],
      id: 911916,
      original_language: 'en',
      original_title: 'Spider-Man: Beyond the Spider-Verse',
      overview:
        "Taking place right after the events of Spider-Man: Across the Spider-Verse, Gwen Stacy leads the newly reformed Spider-Gang in a race against the Spider-Society, led by Miguel O'Hara, to find Miles Morales, who is trapped in the home dimension of the spider that bit him, along with an alternate version of himself as the Prowler, while the Spot begins his deadly attack in his dimension with far-reaching multiversal consequences.",
      popularity: 19.577,
      poster_path: '/5cAuJOfd5tuuFBz2yQmBCtVBaj0.jpg',
      release_date: '',
      title: 'Spider-Man: Beyond the Spider-Verse',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
    {
      adult: false,
      backdrop_path: '/bywThfrqhK4PUPMPhkrkDAKF0yd.jpg',
      genre_ids: [99, 10770],
      id: 228088,
      original_language: 'fr',
      original_title: "De Superman à Spider-Man: L'aventure des super-héros",
      overview:
        'The historical saga of American superheroes. Born in the period between the Great Depression and the World War II to combat the hobgoblins of the modern world, these mutant human beings with superhuman powers colonized the funny papers, radio dramas, television and films, to become a truly national industry in the United States: they gave expression to the fears and obsessions of the twentieth century and bolstered American ideals.',
      popularity: 10.949,
      poster_path: '/b6760qS8pEb3elWp4e7KPQsGliC.jpg',
      release_date: '2001-12-23',
      title: 'Once Upon a Time: The Super Heroes',
      video: false,
      vote_average: 6.8,
      vote_count: 30,
    },
    {
      adult: false,
      backdrop_path: '/aKEINUeg3y324PxOwZfwM0uWmk7.jpg',
      genre_ids: [28, 12, 10751, 14, 10770],
      id: 225925,
      original_language: 'en',
      original_title: 'Spider-Man Strikes Back',
      overview:
        "At the New York State University, one of Peter Parker's tutors has accidentally given three students all the materials they need to create an atomic bomb. While Peter Parker tries to find out what's happened, the police suspect him of the crime, and Peter has to deal with an attractive journalist determined to get an interview with Spider-Man. Then dastardly millionaire Mr. White shows up, and will stop at nothing to get his hands on the atomic bomb. Spider-Man must defeat this scheming villain and stop him blowing up the World Trade Centre.",
      popularity: 7.571,
      poster_path: '/mwRss4cA5m4fH6izoTwwPfF3ZOU.jpg',
      release_date: '1978-12-21',
      title: 'Spider-Man Strikes Back',
      video: false,
      vote_average: 5.6,
      vote_count: 56,
    },
  ],
  total_pages: 4,
  total_results: 68,
}

const textDate = async (givenDate: string) => {
  // Split the input date string into year, month, and day parts
  const formattedDate: unknown[] = givenDate.split('-')

  // Extract year, month, and day from the parts
  const year = formattedDate[0] as number
  const month = formattedDate[1] as number
  // const date = formattedDate[2] as number

  // Array of month names
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  // Return the formatted date string
  return `${monthNames[month - 1]} ${year}`
}

export default function Home() {
  return (
    <>
      {/* <VirtualHubSection title={'Test Data'}>
        <CarouselContent className="-ml-3">
          {Array.from({ length: 15 }).map((_, index) => (
            <CarouselItem key={index} className="pl-3 basis-[15%]">
              <MoviePoster
                title="Spider-Man: No Way Home"
                posterPath="/5weKu49pzJCt06OPpjvT80efnQj.jpg"
                releaseDate="2024-01-01"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </VirtualHubSection> */}

      <VirtualHubSection title={'Hollywood Gems'}>
        <CarouselContent className="-ml-3">
          {homeData.results.map((elem, index) => (
            <CarouselItem key={index} className="pl-3 basis-[15%]">
              <MoviePoster
                title={elem.original_title}
                posterPath={elem.poster_path}
                releaseDate={elem.release_date}
              />

              {/* <div className="overflow-hidden group">
                <div className="relative group-hover:border-2 group-hover:border-yellow-500 mb-1 rounded-md w-full overflow-hidden aspect-[2/3]">
                  <Image
                    className="w-full h-full"
                    src={`https://image.tmdb.org/t/p/original${elem.poster_path}`}
                    alt={elem.poster_path}
                    height={150}
                    width={150}
                  />
                  <div className="top-0 left-0 z-10 absolute flex justify-center items-center bg-black/25 opacity-0 group-hover:opacity-100 w-full h-full transition-all">
                    <CirclePlayIcon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex flex-col gap-y-0.5">
                  <p className="px-1 font-semibold text-sm truncate">
                    {elem.title}
                  </p>
                  <span className="px-1 text-xs truncate">
                    {textDate(elem.release_date)}
                  </span>
                </div>
              </div> */}
            </CarouselItem>
          ))}
        </CarouselContent>
      </VirtualHubSection>

      <section className="px-4 md:px-6 py-6 w-full">
        <Carousel
          opts={{
            align: 'start',
            skipSnaps: true,
            slidesToScroll: 'auto',
          }}
          className="px-8 w-full"
        >
          <div className="flex justify-between items-center mb-2 px-0 min-h-5">
            <div className="flex flex-col flex-nowrap flex-initial justify-stretch items-stretch">
              <h2 className="font-bold text-2xl tracking-tight">
                Trending Trailers
              </h2>
              <span className="inline-block text-ellipsis text-gray-500 text-sm whitespace-nowrap">
                Discover
              </span>
            </div>
            <div className="flex justify-between items-center ml-auto w-20 h-auto">
              <CarouselPreviousCustom
                size="icon"
                className="relative bg-gray-300 hover:bg-gray-200 dark:bg-black opacity-70 rounded-full text-gray-500 dark:text-white"
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </CarouselPreviousCustom>
              <CarouselNextCustom
                size="icon"
                className="bg-gray-300 hover:bg-gray-200 dark:bg-black opacity-100 rounded-full text-gray-500 dark:text-white"
              >
                <ChevronRightIcon className="w-4 h-4" />
              </CarouselNextCustom>
            </div>
          </div>
          <CarouselContent className="-ml-3">
            {homeData.results.map((elem, index) => (
              <CarouselItem key={index} className="pl-3 basis-[25%]">
                <TrailerThumbnail
                  title={elem.original_title}
                  thumbnailPath={elem.backdrop_path}
                  releaseDate={elem.release_date}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <VirtualHubSection title={'Spiderman'}>
        <CarouselContent className="-ml-3">
          {spiderman.results.map(
            (elem, index) =>
              elem.poster_path && (
                <CarouselItem key={index} className="pl-3 basis-[15%]">
                  <MoviePoster
                    title={elem.original_title}
                    posterPath={elem.poster_path}
                    releaseDate={elem.release_date}
                  />
                </CarouselItem>
              )
          )}
        </CarouselContent>
      </VirtualHubSection>
    </>
  )
}
