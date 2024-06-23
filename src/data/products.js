// // Interior Wall Paints
// import RoyaleAspira from '../../assets/RoyaleAspira.png';
// import RoyaleHealthShield from '../../assets/RoyaleHealthShield.png';
// import RoyaleLuxuryEmulsion from '../../assets/RoyaleLuxuryEmulsion.png';
// import RoyalePlaySafari from '../../assets/RoyalePlaySafari.png';
// import RoyalePlayMetallics from '../../assets/RoyalePlayMetallics.png';
// import RoyalePlayDune from '../../assets/RoyalePlayDune.png';
// import ApexUltimaUndercoats from '../../assets/ApexUltimaUndercoats.png';
// import RoyaleWallBasecoat from '../../assets/RoyaleWallBasecoat.png';

// // Exterior Wall Paints
// import ApexUltima from '../../assets/ApexUltima.png';
// import AceExteriorEmulsion from '../../assets/AceExteriorEmulsion.png';
// import ApexCreatex from '../../assets/ApexCreatex.png';
// import ApexMetallics from '../../assets/ApexMetallics.png';
// import ApexUltimaUndercoat from '../../assets/ApexUltimaUndercoat.png';

// // Metal & Wood Finishes
// import ApcoliteEnamel from '../../assets/ApcoliteEnamel.png';
// import UtsavEnamel from '../../assets/UtsavEnamel.png';
// import WoodTechMelamyne from '../../assets/WoodTechMelamyne.png';
// import WoodTechTouchwood from '../../assets/WoodTechTouchwood.png';

// // Waterproofing
// import SmartCareDampProof from '../../assets/SmartCareDampProof.png';
// import SmartCareHydroloc from '../../assets/SmartCareHydroloc.png';
// import SmartCareBathroomWaterproofing from '../../assets/SmartCareBathroomWaterproofing.png';
// import SmartCareDampProofUltra from '../../assets/SmartCareDampProofUltra.png';
// import SmartCareCrackSeal from '../../assets/SmartCareCrackSeal.png';
import asianpaint from '../../public/assets/asian-paints.png'

const products = [
    {
        category: "Interior Wall Paint",
        subcategories: [
            {
                subcategory: "Plain Finish",
                products: [
                    { name: "Tractor Emulsion", imageUrl: asianpaint },
                    { name: "Premium Emulsion", imageUrl: asianpaint },
                    { name: "Royale Luxury Emulsion", imageUrl: asianpaint },
                    { name: "Royale Aspira", imageUrl: asianpaint }
                ]
            },
            {
                subcategory: "Wall Texture",
                products: [
                    { name: "Royale Play", imageUrl: asianpaint },
                    { name: "Royale Play Safari", imageUrl: asianpaint },
                    { name: "Royale Play Metallics", imageUrl: asianpaint },
                    { name: "Royale Play Dune", imageUrl: asianpaint }
                ]
            },
            {
                subcategory: "Undercoat",
                products: [
                    { name: "Decoprime Wall Primer", imageUrl: asianpaint },
                    { name: "Asian Paints Wall Putty", imageUrl: asianpaint }
                ]
            }
        ]
    },
    {
        category: "Exterior Wall Paints",
        subcategories: [
            {
                subcategory: "Plain Finishes",
                products: [
                    { name: "Apex Weatherproof Emulsion", imageUrl: asianpaint },
                    { name: "Apex Ultima", imageUrl: asianpaint },
                    { name: "Apex Ultima Protek", imageUrl: asianpaint },
                    { name: "Apex Advanced", imageUrl: asianpaint }
                ]
            },
            {
                subcategory: "Wall Textures",
                products: [
                    { name: "Apex Duracast", imageUrl: asianpaint },
                    { name: "Apex Tuff", imageUrl: asianpaint }
                ]
            },
            {
                subcategory: "Undercoats",
                products: [
                    { name: "Apex Ultima Primer", imageUrl: asianpaint },
                    { name: "SmartCare Damp Proof", imageUrl: asianpaint }
                ]
            }
        ]
    },
    {
        category: "Metal & Wood Finishes",
        subcategories: [
            {
                subcategory: "Metal Enamels",
                products: [
                    { name: "Apcolite Enamel", imageUrl: asianpaint },
                    { name: "Apcolite Premium Enamel", imageUrl: asianpaint }
                ]
            },
            {
                subcategory: "Wood Finish",
                products: [
                    { name: "PU Wood Finish", imageUrl: asianpaint },
                    { name: "Melamyne Wood Finish", imageUrl: asianpaint }
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
                    { name: "SmartCare Damp Proof", imageUrl: asianpaint },
                    { name: "SmartCare Damp Block", imageUrl: asianpaint }
                ]
            },
            {
                subcategory: "Exterior & Punning Wall",
                products: [
                    { name: "SmartCare Damp Proof", imageUrl: asianpaint }
                ]
            },
            {
                subcategory: "Bathrooms",
                products: [
                    { name: "SmartCare Bathroom Waterproofing", imageUrl: asianpaint }
                ]
            },
            {
                subcategory: "Interiors",
                products: [
                    { name: "SmartCare Damp Block", imageUrl: asianpaint }
                ]
            },
            {
                subcategory: "Terrace and Tanks",
                products: [
                    { name: "SmartCare Roofseal", imageUrl: asianpaint },
                    { name: "SmartCare Tank Waterproofing", imageUrl: asianpaint }
                ]
            },
            {
                subcategory: "Brick & Stone Walls",
                products: [
                    { name: "SmartCare Crack Seal", imageUrl: asianpaint }
                ]
            },
            {
                subcategory: "Cracks and Joints",
                products: [
                    { name: "SmartCare Crack Seal", imageUrl: asianpaint }
                ]
            }
        ]
    }
];

export default products;
