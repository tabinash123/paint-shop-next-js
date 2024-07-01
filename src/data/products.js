import ApcolitePremiumGlossEnamel from '../../public/assets/paint images/ApcolitePremiumGlossEnamel.png';
import ApcolitePremiumSatinEnamel from '../../public/assets/paint images/ApcolitePremiumSatinEnamel.png';
import ApexDuracastPebbletex from '../../public/assets/paint images/ApexDuracastPebbletex.png';
import ApexUltima from '../../public/assets/paint images/ApexUltima.png';
import ApexUltimaClear from '../../public/assets/paint images/ApexUltimaClear.png';
import ApexWeatherproofEmulsion from '../../public/assets/paint images/ApexWeatherproofEmulsion.png';
import DecoprimeWallPrimer from '../../public/assets/paint images/DecoprimeWallPrimer.png';
import MelamyneSealer from '../../public/assets/paint images/MelamyneSealer.png';
import PUWoodFinish from '../../public/assets/paint images/PUWoodFinish.png';
import RoyaleLuxuryEmulsion from '../../public/assets/paint images/RoyaleLuxuryEmulsion.png';
import RoyalePlayDune from '../../public/assets/paint images/RoyalePlayDune.png';
import SmartCareDampProof from '../../public/assets/paint images/SmartCareDampProof.png';
import TractorEnamel from '../../public/assets/paint images/TractorEnamel.png';
import TractorPrimer from '../../public/assets/paint images/TractorPrimer.png';
import UltimaCreatexCrosstex from '../../public/assets/paint images/UltimaCreatexCrosstex.png';
import UltimaProtekShyne from '../../public/assets/paint images/UltimaProtekShyne.png';

const products = [
    {
        category: "Interior",
        subcategories: [
            {
                subcategory: "Plain Finishes",
                products: [
                    { name: "Tractor Emulsion", imageUrl: TractorEnamel },
                    { name: "Premium Emulsion", imageUrl: ApcolitePremiumGlossEnamel },
                    { name: "Royale Luxury Emulsion", imageUrl: RoyaleLuxuryEmulsion },
                    { name: "Royale Aspira", imageUrl: RoyaleLuxuryEmulsion }
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
                    { name: "Melamyne Glossy", imageUrl: MelamyneSealer }
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
                    { name: "SmartCare Damp Block", imageUrl: SmartCareDampProof }
                ]
            },
            {
                subcategory: "Exterior & Punning Wall",
                products: [
                    { name: "SmartCare Damp Proof", imageUrl: SmartCareDampProof }
                ]
            },
            {
                subcategory: "Bathrooms",
                products: [
                    { name: "SmartCare Bathroom Waterproofing", imageUrl: SmartCareDampProof }
                ]
            },
            {
                subcategory: "Interiors",
                products: [
                    { name: "SmartCare Damp Block", imageUrl: SmartCareDampProof }
                ]
            },
            {
                subcategory: "Terrace and Tanks",
                products: [
                    { name: "SmartCare Roofseal", imageUrl: SmartCareDampProof },
                    { name: "SmartCare Tank Waterproofing", imageUrl: SmartCareDampProof }
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
