import elk from './images/elk.jpg';
import moose from './images/moose.jpg';
import stag from './images/stag.jpg';
import sambar from './images/sambar.jpg';



const AnimalInfo = [
    {id: 'A1', species: 'Cervus canadensis', weight: '500',height: '2.4',picture: elk, isFiltered: true,
    article:'The elk (Cervus canadensis), also known as the wapiti, is one of the largest species within the deer family, Cervidae, and one of the largest terrestrial mammals in its native range of North America, as well as Central and East Asia. The common name elk, used in North America, creates confusion because the larger Alces alces, which is called moose in North America, is also called elk in British English, and related names in other European languages (German Elch, Swedish älg, and French élan). The name wapiti is sometimes used in North America for Cervus canadensis. It originates from the Shawnee and Cree word waapiti, meaning white rump'
  },
    {id: 'A2', species: 'Cervus elaphus', weight: '240',height: '2.0',picture: stag, isFiltered: true,
    article:"The red deer (Cervus elaphus) is one of the largest deer species. A male red deer is called a stag or hart, and a female is called a hind. The red deer inhabits most of Europe, the Caucasus Mountains region, Anatolia, Iran, and parts of western Asia. It also inhabits the Atlas Mountains of Northern Africa; its early ancestors are thought to have crossed over to Morocco, then to Algeria, Libya and Tunisia via the Strait of Gibraltar, becoming the only species of true deer (Cervidae) to inhabit Africa. Red deer have been introduced to other areas, including Australia, New Zealand, the United States, Canada, Peru, Uruguay, Chile and Argentina.[2] In many parts of the world, the meat (venison) from red deer is used as a food source., "
  },
    {id: 'A3', species: 'Alces alces', weight: '700',height: '2.5',picture: moose, isFiltered: false,
    article: "The moose (in North America) or elk (in Eurasia) (Alces alces) is a member of the New World deer subfamily and is the only species in the genus Alces. It is the largest and heaviest extant species in the deer family. Most adult male moose have distinctive broad, palmate (open-hand shaped) antlers; most other members of the deer family have antlers with a dendritic (twig-like) configuration. Moose typically inhabit boreal forests and temperate broadleaf and mixed forests of the Northern Hemisphere in temperate to subarctic climates. Hunting and other human activities have caused a reduction in the size of the moose's range over time. It has been reintroduced to some of its former habitats. Currently, most moose occur in Canada, Alaska, New England (with Maine having the most of the lower 48 states), New York State, Fennoscandia, the Baltic states, Poland, Kazakhstan, and Russia."
  },
    {id: 'A4', species: 'Rusa unicolor', weight: '400',height: '2.4',picture: sambar, isFiltered: true,
    article: 'The sambar (Rusa unicolor) is a large deer native to the Indian subcontinent and Southeast Asia that is listed as a vulnerable species on the IUCN Red List since 2008. Populations have declined substantially due to severe hunting, local insurgency, and industrial exploitation of habitat.The name sambar is also sometimes used to refer to the Philippine deer called the Philippine sambar, and the Javan rusa called the Sunda sambar.',
  },
   ];

export default AnimalInfo