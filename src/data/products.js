import ApcolitePremiumGlossEnamel from '../../public/assets/paint images/ApcolitePremiumGlossEnamel.png'; // Matched: Metal Enamels
import ApexUltima from '../../public/assets/paint images/ApexUltima.png'; // Matched: Exterior Plain Finishes
import ApexWeatherproofEmulsion from '../../public/assets/paint images/ApexWeatherproofEmulsion.png'; // Matched: Exterior Plain Finishes
import DecoprimeWallPrimer from '../../public/assets/paint images/DecoprimeWallPrimer.png'; // Matched: Interior Undercoat
import Touchwood from '../../public/assets/paint images/Touchwood.png'; // Matched: Wood Finish
import RoyaleLuxuryEmulsion from '../../public/assets/paint images/RoyaleLuxuryEmulsion.png'; // Matched: Interior Plain Finishes
import TractorEnamel from '../../public/assets/paint images/TractorEnamel.png'; // Matched: Metal Enamels
import UltimaProtekShyne from '../../public/assets/paint images/UltimaProtekShyne.png'; // Matched: Exterior Plain Finishes
import RoyaleAspira from '../../public/assets/paint images/RoyaleAspira.png'; // Matched: Interior Plain Finishes
import RoyalBling from '../../public/assets/paint images/RoyalBling.png'; // Matched: Interior Plain Finishes
import VitaliaNeo from '../../public/assets/paint images/VitaliaNeo.png'; // Matched: Water Proofing
import SmartCareHydroloc from '../../public/assets/paint images/SmartCareHydroloc.png'; // Matched: Water Proofing
import RoyaleHealthShield from '../../public/assets/paint images/Royale Health Shield.png';
import RoyaleLuxuryEmulsionShyne from '../../public/assets/paint images/Royale Luxury Emulsion Shyne.png';
import ApcolitePremiumEmulsion from '../../public/assets/paint images/Apcolite Premium Emulsion.png';
import TractorEmulsion from '../../public/assets/paint images/Tractor Emulsion.png';
import RoyaleGlitter from '../../public/assets/paint images/Royale Glitter.png';
import RoyalePlayMetallic from '../../public/assets/paint images/Royale Play Metallic.png';
import AceExteriorEmulsion from '../../public/assets/paint images/Ace Exterior Emulsion.png';
import SmartCareDampProofFiberTech from '../../public/assets/paint images/SmartCare Damp Proof Fiber Tech.png';
import SmartCareDampSheathInterior from '../../public/assets/paint images/SmartCare Damp Sheath Interior.png';
import DampProofSpark from '../../public/assets/paint images/DampProofSpark.png';
import SmartCareDampBlock2K from '../../public/assets/paint images/SmartCareDampBlock2K.png';
import SmartCareDampDefense from '../../public/assets/paint images/SmartCareDampDefense.png';

const products = [
    {
        category: "Interior",
        subcategories: [
            {
                subcategory: "Plain Finishes",
                products: [
                    { name: "Royale Bling", imageUrl: RoyalBling },
                    { name: "Royale Health Shield", imageUrl: RoyaleHealthShield },
                    { name: "Royale Aspira", imageUrl: RoyaleAspira },
                    { name: "Royale Luxury Emulsion Shyne", imageUrl: RoyaleLuxuryEmulsionShyne },
                    { name: "Royale Luxury Emulsion", imageUrl: RoyaleLuxuryEmulsion },
                    { name: "Apcolite Premium Emulsion", imageUrl: ApcolitePremiumEmulsion },
                    { name: "Tractor Emulsion", imageUrl: TractorEmulsion }
                ]
            },
            {
                subcategory: "Wall Texture",
                products: [
                    { name: "Royale Glitter", imageUrl: RoyaleGlitter },
                    { name: "Royale Play Metallic", imageUrl: RoyalePlayMetallic }
                ]
            },
            {
                subcategory: "Undercoat",
                products: [
                    { name: "Decoprime Wall Primer", imageUrl: DecoprimeWallPrimer }
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
                    { name: "Ultima Protek Shyne", imageUrl: UltimaProtekShyne },
                    { name: "Apex Ultima", imageUrl: ApexUltima },
                    { name: "Ace Exterior Emulsion", imageUrl: AceExteriorEmulsion }
                ]
            }
        ]
    },
    {
        category: "Metal & Wood",
        subcategories: [
            {
                subcategory: "Metal Enamels",
                products: [
                    { name: "Apcolite Premium Gloss Enamel", imageUrl: ApcolitePremiumGlossEnamel },
                    { name: "Tractor Enamel", imageUrl: TractorEnamel }
                ]
            },
            {
                subcategory: "Wood Finish",
                products: [
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
                    { name: "SmartCare Hydroloc", imageUrl: SmartCareHydroloc },
                    { name: "Vitalia Neo", imageUrl: VitaliaNeo },
                    { name: "SmartCare Damp Proof Fiber Tech", imageUrl: SmartCareDampProofFiberTech },
                    { name: "SmartCare Damp Sheath Interior", imageUrl: SmartCareDampSheathInterior },
                    { name: "Damp Proof Spark", imageUrl: DampProofSpark },
                    { name: "SmartCare Damp Block 2K", imageUrl: SmartCareDampBlock2K },
                    { name: "SmartCare Damp Defense", imageUrl: SmartCareDampDefense }
                ]
            }
        ]
    }
];

export default products;
