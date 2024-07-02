import ApcolitePremiumGlossEnamel from '../../public/assets/paint images/ApcolitePremiumGlossEnamel.png';
import ApcolitePremiumSatinEnamel from '../../public/assets/paint images/ApcolitePremiumSatinEnamel.png';
import ApexDuracastPebbletex from '../../public/assets/paint images/ApexDuracastPebbletex.png';
import ApexUltima from '../../public/assets/paint images/ApexUltima.png';
import ApexUltimaClear from '../../public/assets/paint images/ApexUltimaClear.png';
import ApexWeatherproofEmulsion from '../../public/assets/paint images/ApexWeatherproofEmulsion.png';
import DecoprimeWallPrimer from '../../public/assets/paint images/DecoprimeWallPrimer.png';
import MelamyneSealer from '../../public/assets/paint images/MelamyneSealer.png';
import Touchwood from '../../public/assets/paint images/Touchwood.png';
import RoyaleLuxuryEmulsion from '../../public/assets/paint images/RoyaleLuxuryEmulsion.png';
import RoyalePlayDune from '../../public/assets/paint images/RoyalePlayDune.png';
import SmartCareDampProof from '../../public/assets/paint images/SmartCareDampProof.png';
import TractorEnamel from '../../public/assets/paint images/TractorEnamel.png';
import TractorPrimer from '../../public/assets/paint images/TractorPrimer.png';
import UltimaCreatexCrosstex from '../../public/assets/paint images/UltimaCreatexCrosstex.png';
import UltimaProtekShyne from '../../public/assets/paint images/UltimaProtekShyne.png';
import RoyaleAspira from '../../public/assets/paint images/RoyaleAspira.png';
import RoyalBling from '../../public/assets/paint images/RoyalBling.png';
import VitaliaNeo from '../../public/assets/paint images/VitaliaNeo.png';
import SmartCareHydroloc from '../../public/assets/paint images/SmartCareHydroloc.png';

const products = [
    {
        category: "Interior",
        subcategories: [
            {
                subcategory: "Plain Finishes",
                products: [
                    { name: "Tractor Emulsion", imageUrl: TractorEnamel },
                    { name: "Royale Bling", imageUrl: RoyalBling },
                    { name: "Royale Luxury Emulsion", imageUrl: RoyaleLuxuryEmulsion },
                    { name: "Royale Aspira", imageUrl: RoyaleAspira }
                ]
            },
            {
                subcategory: "Wall Texture",
                products: [
                    { name: "Royale Glitter", imageUrl: RoyalePlayDune },
                    { name: "Royale Play Metallics", imageUrl: RoyalePlayDune },
                    { name: "Royale Play Dune", imageUrl: RoyalePlayDune }
                ]
            },
            {
                subcategory: "Undercoat",
                products: [
                    { name: "Decoprime Wall Primer", imageUrl: DecoprimeWallPrimer },
                    { name: "Tractor Primer", imageUrl: TractorPrimer }
                ]
            }
        ]
    },
    {
        category: "Exterior",
        subcategories: [
            {
                subcategory: "Plain Finishes",
                products: [
                    { name: "Apex Weatherproof Emulsion", imageUrl: ApexWeatherproofEmulsion },
                    { name: "Apex Ultima Clear", imageUrl: ApexUltimaClear },
                    { name: "Ultima Protek Shyne", imageUrl: UltimaProtekShyne },
                    { name: "Apex Ultima", imageUrl: ApexUltima }
                ]
            },
            {
                subcategory: "Wall Textures",
                products: [
                    { name: "Apex Duracast Pebbletex", imageUrl: ApexDuracastPebbletex },
                    { name: "Ultima Createx Crosstex", imageUrl: UltimaCreatexCrosstex }
                ]
            },
            {
                subcategory: "Undercoats",
                products: [
                    { name: "Apex Ultima Primer", imageUrl: ApexUltimaClear },
                    { name: "SmartCare Damp Proof", imageUrl: SmartCareDampProof }
                ]
            }
        ]
    },
    {
        category: "Metal & Wood ",
        subcategories: [
            {
                subcategory: "Metal Enamels",
                products: [
                    { name: "Tractor Enamel", imageUrl: TractorEnamel },
                    { name: "Apcolite Premium Gloss Enamel", imageUrl: ApcolitePremiumGlossEnamel },
                    { name: "Apcolite Premium Satin Enamel", imageUrl: ApcolitePremiumSatinEnamel }
                ]
            },
            {
                subcategory: "Wood Finish",
                products: [
                    { name: "Melamyne Sealer", imageUrl: MelamyneSealer },
                    { name: "Touchwood", imageUrl: Touchwood }
                ]
            }
        ]
    },
    {
        category: "Waterproofing",
        subcategories: [
            {
                subcategory: "All Products",
                products: [
                    { name: "SmartCare Damp Proof", imageUrl: SmartCareDampProof },
                    { name: "SmartCare Hydroloc", imageUrl: SmartCareHydroloc },
                    { name: "VitaliaNeo", imageUrl: VitaliaNeo }
                ]
            },
            {
                subcategory: "Exterior & Punning Wall",
                products: [
                    { name: "SmartCare Damp Proof", imageUrl: SmartCareDampProof }
                ]
            },
            {
                subcategory: "Brick & Stone Walls",
                products: [
                    { name: "SmartCare Crack Seal", imageUrl: SmartCareDampProof }
                ]
            },
            {
                subcategory: "Cracks and Joints",
                products: [
                    { name: "SmartCare Crack Seal", imageUrl: SmartCareDampProof }
                ]
            }
        ]
    }
];

export default products;
