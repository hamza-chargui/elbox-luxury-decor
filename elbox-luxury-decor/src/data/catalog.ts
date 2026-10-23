export interface CatalogItem {
  id: string;
  ref: string;
  title: string;
  category: 'vases' | 'botanicals' | 'vessels' | 'monochrome';
  material: 'Smoked Glass' | 'Amber Glass' | 'Glazed Ceramic' | 'Alabaster & Marble' | 'Brass & Metallic';
  tone?: 'Amber' | 'Smoked' | 'Cyan' | 'Blanc' | 'Bronze';
  price: number;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  provenance: string;
  origin: string;
  handling: string;
  dimensions: {
    diameter: string;
    height: string;
    mass: string;
  };
  image: string;
  gallery: string[];
  editionInfo: string;
  variants: {
    name: string;
    sublabel: string;
    colors: string[];
  }[];
}

export const CATALOG_ITEMS: CatalogItem[] = [
  {
    id: 'ref-elb-0104',
    ref: 'REF-ELB-0104',
    title: 'Ambre Fluted Vessel & Ceramic Knot',
    category: 'vases',
    material: 'Amber Glass',
    tone: 'Amber',
    price: 240,
    badge: 'Amber Glasswork',
    shortDesc: 'Tortoiseshell optic glass with organic blown mouth rim and artisan knotted ceramic accents.',
    fullDesc: 'Mouth-blown fluted amber glass with hand-glazed noir ceramic ribbon knot. Specially styled with autumnal eucalyptus sprigs. Designed to command ambient afternoon light with dramatic undulating reflections.',
    provenance: 'Single artisanal pull • Hand-turned foot • Glazed in Sidi Bou Said',
    origin: 'La Marsa Workshop, Tunis',
    handling: 'White-glove curation allocation • Numbered batch #01-2025',
    dimensions: {
      diameter: 'Ø 24 cm',
      height: 'H 28 cm',
      mass: '2.45 kg'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPH91FV-Cinkmz654uLvJjRqN8p9_YZBixcXHNbqCu2pbBabYExqgvMPDI3-maO_dTYLssLzVm2uq5qkQbZPPtKqrLkCruZK99of3pZilYUAYOWSdEZKG1m1Ri9C3U5T3BE-nmUInjDYM0PIuKq96kF2cSWGmtPVqBtkspzp7mzFLI1xQW8vpiF6m4j_0ia6puCOABbBC4uBVfZau6IH0HCSoLmHHdzP2Poy2rTLHyETUwbsTwUJw_j-5MMJ0BwrNtFlo',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPH91FV-Cinkmz654uLvJjRqN8p9_YZBixcXHNbqCu2pbBabYExqgvMPDI3-maO_dTYLssLzVm2uq5qkQbZPPtKqrLkCruZK99of3pZilYUAYOWSdEZKG1m1Ri9C3U5T3BE-nmUInjDYM0PIuKq96kF2cSWGmtPVqBtkspzp7mzFLI1xQW8vpiF6m4j_0ia6puCOABbBC4uBVfZau6IH0HCSoLmHHdzP2Poy2rTLHyETUwbsTwUJw_j-5MMJ0BwrNtFlo',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDYy7pt4-2e6voWD5qSKpYWbVLQcKRnYuSr4ZqTgWyATVmeEVfWslmgm2FZeMIQ9lsWdKJ4ZqEHDvGkrRIb_A73JMwVK9HJNBCX2tRRZiJD6gNI7Ie_abxT73u5JRLVfZy1PRwZ7mboQuCOV4svQFto_UjtrVeluvWjeMC9IUg9L-mGXWkhgE2X4ygEYVnad9bf_5wMuKzi_6XAimFN8WBQZJOH5Azz_GMFmWxiay-Z8Lhu19gj9_rR1v9YfTnWWuA9agY',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDgR9L30cd7wp13q4h-9lbREhW9UUGM3BsGsBLKVz9O98rwllp41xl3X3qXqSLiU9tDtuxI5KZNCngWMcMtFb0swJNcN1T5QYFmWZoN8o23xGRtnDgEcdiyUApvKz7nLLHkeKLdexpiisimtGUI5wbPxTLVcoevjPSFQ737B6DD1m2aZmbz-Romz9gAz8_moP-IJ965LqaHVqUt9wOFoWQSi3U1U_0rbm5XCdFSOw2E1kAj78Ecta0xJPchWZmqg3FqzxY',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCyi490mpBfmaCdxEo-3u1cqT0ejnJ1KS-bsZmczdgZiOIadJlO2zH453sLhG_VGA7E9oSBfQSQXUBV2L7UugxkfUpK2QTtcJYscom8hdqxH7PMwg-oi6YwY1OUXT9okwiyCAKgUtyuNA4hqb9iqWjZKvUzXE9eVF5LQrs_sypp5dH-uWs_oCXdvblGlOJELxhCkFj2jMtqFlD0qhcv80_RH51FryHx3L5WT1MRLoP-0QeGI1yGYqAJlDtzRhHOzCu40cw'
    ],
    editionInfo: 'Limited 2025 Edition • Single Vignette Available',
    variants: [
      { name: 'Amber Fluted & Noir Knot', sublabel: 'Noir Knot', colors: ['#795434', '#1c1c17'] },
      { name: 'Cerulean & Bone Knot', sublabel: 'Bone Knot', colors: ['#426173', '#e6e2da'] },
      { name: 'Smoked Olive & Gold Knot', sublabel: 'Gold Knot', colors: ['#555a3f', '#d6c4aa'] }
    ]
  },
  {
    id: 'ref-elb-0105',
    ref: 'REF-ELB-0105',
    title: 'Spiral Candelabra & Amber Monolith',
    category: 'vases',
    material: 'Amber Glass',
    tone: 'Amber',
    price: 310,
    badge: 'Handmade Silhouette',
    shortDesc: 'Sculpted spiral borosilicate candle holders paired with a high-standing faceted amber centerpiece.',
    fullDesc: 'Smoked honey glass with architectural twist candlestick pairing and artisan chain links. Cast to catch late-afternoon sunlight across travertine plinths.',
    provenance: 'Spun borosilicate • Limited to 15 Pieces',
    origin: 'Sidi Bou Saïd Studio, Tunis',
    handling: 'Archival crate with signed Certificate of Authenticity',
    dimensions: {
      diameter: 'Ø 18 cm',
      height: 'H 38 cm',
      mass: '1.95 kg'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj2xyP5URQDF2tgvaA6kCJUUzHjeZCQyZrEwJpNNSw_uTyaBV-PcSLnC3PMsvai_pISgwhOce9BLdHeQeAt7jABixd4JHz2IkpyCHkTXhj8dco4hFEJE2gLqUn7dtoyZYNLP6js4ze_uWIu6u7RZd8Um60DP8iMQIqFDEm2JHZosIl_fA0kHJk0fEpPBSf6E8hrleO0BMFu6FW_t959ngzyYAjjlNDvG_pfLkPj6Fe_l09BDLoFKgzuCSHJH8UXzI1mAU',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDj2xyP5URQDF2tgvaA6kCJUUzHjeZCQyZrEwJpNNSw_uTyaBV-PcSLnC3PMsvai_pISgwhOce9BLdHeQeAt7jABixd4JHz2IkpyCHkTXhj8dco4hFEJE2gLqUn7dtoyZYNLP6js4ze_uWIu6u7RZd8Um60DP8iMQIqFDEm2JHZosIl_fA0kHJk0fEpPBSf6E8hrleO0BMFu6FW_t959ngzyYAjjlNDvG_pfLkPj6Fe_l09BDLoFKgzuCSHJH8UXzI1mAU'
    ],
    editionInfo: 'Numbered Edition • 15 Units Produced',
    variants: [
      { name: 'Honey Amber & Smoke', sublabel: 'Twist Duo', colors: ['#946c4a', '#31302b'] },
      { name: 'Charcoal & Amber', sublabel: 'Noir Edition', colors: ['#31302b', '#ffdcc1'] }
    ]
  },
  {
    id: 'ref-elb-0106',
    ref: 'REF-ELB-0106',
    title: 'Aura Peony Vessel & Brass Meditators',
    category: 'botanicals',
    material: 'Brass & Metallic',
    tone: 'Bronze',
    price: 275,
    badge: 'Botanical & Metal',
    shortDesc: 'Water-ripple blown glass with hand-dyed Mediterranean sunset peonies and cast brass meditation forms.',
    fullDesc: 'Prismatic textured amber glass paired with burnt terra-cotta silk botanicals and cast solid brass meditation talismans. Infuses warm golden glow and grounding presence.',
    provenance: 'Lost-wax cast bronze figurines & flame-shaped glass',
    origin: 'Carthage Metalcraft Atelier, Tunis',
    handling: 'Custom cotton packaging & velvet resting pouch',
    dimensions: {
      diameter: 'Ø 22 cm',
      height: 'H 32 cm',
      mass: '2.80 kg'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAlHOvYSVJio_RcFnqpqSAaG_ylXJotCA-mRi2RW67DHEdmmaoW-27pac1a5PpHCtcNKfhVYf3N7cweaotzkot5KzUlMxnYZoblNVoXCDt2Z81GuH_t-LD9JFWqRQGJmiiWwdnhHzTrlgY3ZqWQx-erxOYz12wBxvOvH1523hUAEyvVC1V2CDCbmZFx7Eu9alvQEUitu_tYtvusMS-_DAm1XJWujKqFceclcxqtXY6iro0NGZ1vD4W4Lrc80on8od3obg',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCAlHOvYSVJio_RcFnqpqSAaG_ylXJotCA-mRi2RW67DHEdmmaoW-27pac1a5PpHCtcNKfhVYf3N7cweaotzkot5KzUlMxnYZoblNVoXCDt2Z81GuH_t-LD9JFWqRQGJmiiWwdnhHzTrlgY3ZqWQx-erxOYz12wBxvOvH1523hUAEyvVC1V2CDCbmZFx7Eu9alvQEUitu_tYtvusMS-_DAm1XJWujKqFceclcxqtXY6iro0NGZ1vD4W4Lrc80on8od3obg'
    ],
    editionInfo: 'Atelier Curated Set • Ready for Placement',
    variants: [
      { name: 'Brushed Brass & Terracotta Peony', sublabel: 'Classic Set', colors: ['#d6c4aa', '#795434'] },
      { name: 'Antiqued Bronze & Ivory Bloom', sublabel: 'Pristine Set', colors: ['#50453c', '#fdf9f1'] }
    ]
  },
  {
    id: 'ref-elb-0107',
    ref: 'REF-ELB-0107',
    title: 'Alabaster Silhouette & Fluted Smoke Pair',
    category: 'monochrome',
    material: 'Alabaster & Marble',
    tone: 'Blanc',
    price: 390,
    badge: 'Cast Alabaster',
    shortDesc: 'Textured ceramic human form with botanical plume canopy beside smoked crystalline vessels.',
    fullDesc: 'Matte plaster feminine form paired with ribbed smoked luster vessels. A contemplative study in shadow and silhouette for library alcoves and gallery consoles.',
    provenance: 'Hand-carved alabaster compound & annealed silica',
    origin: 'La Marsa Sculptural Studio, Tunis',
    handling: 'Foam-formed wooden shipping box',
    dimensions: {
      diameter: 'Ø 20 cm',
      height: 'H 36 cm',
      mass: '3.10 kg'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBTaoQ0rxyspPnh832KM8EsAeNsHhVe_XQ-FAX9uaMORF0VgTEAgNba2qolLmb8oTLof9ncwupHMAVdAFqf_kLlgbEjO-jBfipsCpN5q2PYYfIhbyoYWMjQgnfvE8_NNiVVe34pkdGWHHWrzR87dBv9LSu44y74EdSx0nswhkEbvuBQhEd0WJIXBOlj1HHDodIuH-vhAzioptSxF_Vv7dBBt9V-zLiJL7J0-9yXN5t9jozEuQQ7tRK0qo-tF0bUb9DsRg',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBBTaoQ0rxyspPnh832KM8EsAeNsHhVe_XQ-FAX9uaMORF0VgTEAgNba2qolLmb8oTLof9ncwupHMAVdAFqf_kLlgbEjO-jBfipsCpN5q2PYYfIhbyoYWMjQgnfvE8_NNiVVe34pkdGWHHWrzR87dBv9LSu44y74EdSx0nswhkEbvuBQhEd0WJIXBOlj1HHDodIuH-vhAzioptSxF_Vv7dBBt9V-zLiJL7J0-9yXN5t9jozEuQQ7tRK0qo-tF0bUb9DsRg'
    ],
    editionInfo: 'Signature Edition • Studio Monograph',
    variants: [
      { name: 'Chalk White & Smoked Luster', sublabel: 'Monochrome', colors: ['#ffffff', '#31302b'] }
    ]
  },
  {
    id: 'ref-elb-0108',
    ref: 'REF-ELB-0108',
    title: 'Carthage Shadow Fluted Decanter',
    category: 'vases',
    material: 'Smoked Glass',
    tone: 'Smoked',
    price: 210,
    badge: 'Smoked Glass',
    shortDesc: 'Mouth-blown organic silhouette retaining subtle charcoal bubbles, styled with wild coastal stalks.',
    fullDesc: 'Deep umber optic glass with wide conical body designed for dried olive branches and wild Tunisian sea grasses. Captures low-angle sunset rays.',
    provenance: 'Free-blown optic glass • Hand-formed neck',
    origin: 'Sidi Bou Saïd Atelier, Tunis',
    handling: 'Individually numbered prototype seal',
    dimensions: {
      diameter: 'Ø 26 cm',
      height: 'H 30 cm',
      mass: '2.10 kg'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVru5yjSlbCmqiwckbHJpCozvsacqwEuDV0jGvaQ6JUNFjK5gyTt-S8zJNtfbbQmPS1UwW7LZbGfG6pLNSCiESX6krceOUmMfEBtgwqopWY2I2_5P0Js6F5dNprHw65jsaZfmyI7ILspCdFTR0dVBGMOzGZNw4BKUmTQznlU0XgUlysRiO04cCBNt6-4VvpipVgzc4bpjXCnTEQ0Sbw48pbXkm6u8gfLOw1AEYFQVS2mALphH0hNaV8VwwKvxlnAWmgDs',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCVru5yjSlbCmqiwckbHJpCozvsacqwEuDV0jGvaQ6JUNFjK5gyTt-S8zJNtfbbQmPS1UwW7LZbGfG6pLNSCiESX6krceOUmMfEBtgwqopWY2I2_5P0Js6F5dNprHw65jsaZfmyI7ILspCdFTR0dVBGMOzGZNw4BKUmTQznlU0XgUlysRiO04cCBNt6-4VvpipVgzc4bpjXCnTEQ0Sbw48pbXkm6u8gfLOw1AEYFQVS2mALphH0hNaV8VwwKvxlnAWmgDs'
    ],
    editionInfo: 'Atelier Tunis Prototype • Series 2025',
    variants: [
      { name: 'Charcoal Shadow', sublabel: 'Deep Smoked', colors: ['#31302b', '#50453c'] }
    ]
  },
  {
    id: 'ref-elb-0109',
    ref: 'REF-ELB-0109',
    title: 'Terra Nabeul Low Bowl',
    category: 'vessels',
    material: 'Glazed Ceramic',
    tone: 'Blanc',
    price: 185,
    badge: 'Glazed Ceramic',
    shortDesc: 'A grounded low vessel throwing warm earthen reflections, handcrafted in regional clay batches.',
    fullDesc: 'High-fired grogged stoneware with warm raw sand exterior and glazed basin. Formed with subtle asymmetrical rim line reflecting natural Mediterranean potter traditions.',
    provenance: 'Nabeul refractory clay • Wood-kiln fired',
    origin: 'Nabeul & La Marsa Collaboration',
    handling: 'Signed by Master Potter',
    dimensions: {
      diameter: 'Ø 30 cm',
      height: 'H 12 cm',
      mass: '2.60 kg'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQqMWWtp_iyriosGyc4DqFFJIYV2j98WSDyt88pcBO4uI2HCVawLZbS09ZG8xyN6kAwgGOMor9Utnu4omMA90Imdpw14cKZlK02Rtq_raF1X5UyUcOi22ShptaVNv3aOp5aBdKMhNN5DWxWdlhNatxdWpJwS_k6Pnw2Crn54xKQ0BVar13gkuQjXcfoWeYdH0MRGpUhE2jDh7Wuf-slOAVQoMi3GTiqMpp-UkMQEFRwL3qYqB0ue9QBnNY3hwrK7miXN4',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBQqMWWtp_iyriosGyc4DqFFJIYV2j98WSDyt88pcBO4uI2HCVawLZbS09ZG8xyN6kAwgGOMor9Utnu4omMA90Imdpw14cKZlK02Rtq_raF1X5UyUcOi22ShptaVNv3aOp5aBdKMhNN5DWxWdlhNatxdWpJwS_k6Pnw2Crn54xKQ0BVar13gkuQjXcfoWeYdH0MRGpUhE2jDh7Wuf-slOAVQoMi3GTiqMpp-UkMQEFRwL3qYqB0ue9QBnNY3hwrK7miXN4'
    ],
    editionInfo: 'Numbered Atelier Archive • 20 Units',
    variants: [
      { name: 'Warm Sand & Matte Noir', sublabel: 'Earthen', colors: ['#d6c4aa', '#1c1c17'] }
    ]
  },
  {
    id: 'ref-elb-0110',
    ref: 'REF-ELB-0110',
    title: 'Sidi Bou Saïd Niche Vessel',
    category: 'botanicals',
    material: 'Amber Glass',
    tone: 'Amber',
    price: 260,
    badge: 'Niche Composition',
    shortDesc: 'Sculpted with a gentle parabolic curvature that catches ambient light across limestone walls.',
    fullDesc: 'Asymmetrical blown amber glass body calibrated for recessed architectural lighting. Pairs effortlessly with dried coastal flora and natural unvarnished cedar furniture.',
    provenance: 'Mouth-blown in artisanal batch',
    origin: 'Sidi Bou Saïd Atelier, Tunis',
    handling: 'White-Glove Courier Allocation',
    dimensions: {
      diameter: 'Ø 21 cm',
      height: 'H 31 cm',
      mass: '2.20 kg'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvhbqsCDqZsOvhmNbl5MCoYQwBo2HOgojuDK5QhjnjKndAC-VBh2VIL9zBlA_TxM_5NJZKc09iZeaYyqVNasRNtDGSN7Txur7qmELl9ltIkh9y9WZ627MIIRquWGMCC3DasvBkx2knakjMYXntjeMSvV_a33lkyWKbZEcKHC-K-GZDgAjMptaT8pI6bWMQtFbZ4iIpw4shJlCz2rqHkuqzef5zMhmgdwVutmtI5F_8UVTzi7ffgW_laRjvqkvfxCNgLQQ',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvhbqsCDqZsOvhmNbl5MCoYQwBo2HOgojuDK5QhjnjKndAC-VBh2VIL9zBlA_TxM_5NJZKc09iZeaYyqVNasRNtDGSN7Txur7qmELl9ltIkh9y9WZ627MIIRquWGMCC3DasvBkx2knakjMYXntjeMSvV_a33lkyWKbZEcKHC-K-GZDgAjMptaT8pI6bWMQtFbZ4iIpw4shJlCz2rqHkuqzef5zMhmgdwVutmtI5F_8UVTzi7ffgW_laRjvqkvfxCNgLQQ'
    ],
    editionInfo: 'Atelier Tunis Prototype • Limited Edition',
    variants: [
      { name: 'Warm Amber Optic', sublabel: 'Lustre Finish', colors: ['#795434', '#edbd95'] }
    ]
  },
  {
    id: 'ref-elb-0111',
    ref: 'REF-ELB-0111',
    title: 'Monolith Plaster & Travertine Pedestal',
    category: 'monochrome',
    material: 'Alabaster & Marble',
    tone: 'Blanc',
    price: 340,
    badge: 'Alabaster & Marble',
    shortDesc: 'Architectural geometric study in honed Tunisian travertine paired with an abstract plaster crest.',
    fullDesc: 'Honed light travertine block supporting fine cast chalk-stone figurative study. Unlacquered stone finishes honor the natural porosity and ancient Mediterranean stone masonry.',
    provenance: 'Tunisian travertine core & cast chalk plaster',
    origin: 'Chemtou Quarry & La Marsa Atelier',
    handling: 'Reinforced wood crate with felt isolation pads',
    dimensions: {
      diameter: 'Ø 24 cm',
      height: 'H 34 cm',
      mass: '4.80 kg'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDklHV6jBWMkgoibAEeLm7BsAffeYWvBd5NtWErhYms8m6wbu4iS110Ws96PaWnwGGGVVlK_oxKQdGg94azjEgc3_ra59Ii5GP7pZdB3yO1Ym9eSzRuIj0ZN4CYtkkFfk1seBFCRZPOwDWOTm-XbgBzbE43QV7LDoqea7ywu2mHNPLe5wY1mxUeVflQmz3VmFIuodXmh5GkunAH1TjocNF3dZh0gt8Y1eBHUz6Wj52Gj_oEeG5XkIhXOTGa-CX7aabLcMY',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDklHV6jBWMkgoibAEeLm7BsAffeYWvBd5NtWErhYms8m6wbu4iS110Ws96PaWnwGGGVVlK_oxKQdGg94azjEgc3_ra59Ii5GP7pZdB3yO1Ym9eSzRuIj0ZN4CYtkkFfk1seBFCRZPOwDWOTm-XbgBzbE43QV7LDoqea7ywu2mHNPLe5wY1mxUeVflQmz3VmFIuodXmh5GkunAH1TjocNF3dZh0gt8Y1eBHUz6Wj52Gj_oEeG5XkIhXOTGa-CX7aabLcMY'
    ],
    editionInfo: 'Private Residence Allocation',
    variants: [
      { name: 'Honed Travertine & Plaster', sublabel: 'Natural Ivory', colors: ['#fdf9f1', '#e6e2da'] }
    ]
  },
  {
    id: 'ref-elb-0112',
    ref: 'REF-ELB-0112',
    title: 'Smoked Pedestal Sphere Vessel',
    category: 'vases',
    material: 'Smoked Glass',
    tone: 'Smoked',
    price: 295,
    badge: 'Smoked Glass',
    shortDesc: 'Compact orb profile blown with warm bronze gradients and substantial thermal mass.',
    fullDesc: 'Spherical optic smoked glass base with heavy foot and natural dried foliage. Weighted for formal dining tables, library alcoves, or architectural credenzas.',
    provenance: 'Double-walled soda-lime blown glass',
    origin: 'La Marsa Workshop, Tunis',
    handling: 'White-Glove Courier Delivery',
    dimensions: {
      diameter: 'Ø 25 cm',
      height: 'H 27 cm',
      mass: '2.75 kg'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPH91FV-Cinkmz654uLvJjRqN8p9_YZBixcXHNbqCu2pbBabYExqgvMPDI3-maO_dTYLssLzVm2uq5qkQbZPPtKqrLkCruZK99of3pZilYUAYOWSdEZKG1m1Ri9C3U5T3BE-nmUInjDYM0PIuKq96kF2cSWGmtPVqBtkspzp7mzFLI1xQW8vpiF6m4j_0ia6puCOABbBC4uBVfZau6IH0HCSoLmHHdzP2Poy2rTLHyETUwbsTwUJw_j-5MMJ0BwrNtFlo',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPH91FV-Cinkmz654uLvJjRqN8p9_YZBixcXHNbqCu2pbBabYExqgvMPDI3-maO_dTYLssLzVm2uq5qkQbZPPtKqrLkCruZK99of3pZilYUAYOWSdEZKG1m1Ri9C3U5T3BE-nmUInjDYM0PIuKq96kF2cSWGmtPVqBtkspzp7mzFLI1xQW8vpiF6m4j_0ia6puCOABbBC4uBVfZau6IH0HCSoLmHHdzP2Poy2rTLHyETUwbsTwUJw_j-5MMJ0BwrNtFlo'
    ],
    editionInfo: 'Atelier Tunis Prototype',
    variants: [
      { name: 'Smoked Bronze Sphere', sublabel: 'Lustre Foot', colors: ['#31302b', '#946c4a'] }
    ]
  },
  {
    id: 'ref-elb-0113',
    ref: 'REF-ELB-0113',
    title: 'Aura Tall Optic Gold Cylinder',
    category: 'vessels',
    material: 'Brass & Metallic',
    tone: 'Bronze',
    price: 225,
    badge: 'Brass & Metallic',
    shortDesc: 'Tall textured vase refracting afternoon light like sunlit Mediterranean coastal shallows.',
    fullDesc: 'Hammered vertical ribbed glass paired with cast solid brass yoga talisman. Throws rhythmic rippled shadows across neutral plaster walls.',
    provenance: 'Ribbed silicate mould pull & brass alloy',
    origin: 'Carthage Metalcraft Atelier, Tunis',
    handling: 'Certified numbered batch seal',
    dimensions: {
      diameter: 'Ø 16 cm',
      height: 'H 35 cm',
      mass: '2.30 kg'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1aqZzaoDXUoYb5XNIHf3dHeUOiapOiyR-4pdaZFYazUMcpmg-ll_4VVdxXbJmTZHOb-yKfJNh9-jheA6GqIZcfb6fgD7WdTkkVBHVlN7dDIry3S0utT-rchvnYgf6Pt_UF8o9-1I29L79FSu-5duYOBcP6nev4CcCZPGiXU3AiX0r16i4ipOJGubi-Q6noWARC3RZYy2jOaIp9LSGwBkSkkPBBxDa7-NdaZ6Eh1NxsCwXvkteVI_OatSwS407U-BL-ts',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1aqZzaoDXUoYb5XNIHf3dHeUOiapOiyR-4pdaZFYazUMcpmg-ll_4VVdxXbJmTZHOb-yKfJNh9-jheA6GqIZcfb6fgD7WdTkkVBHVlN7dDIry3S0utT-rchvnYgf6Pt_UF8o9-1I29L79FSu-5duYOBcP6nev4CcCZPGiXU3AiX0r16i4ipOJGubi-Q6noWARC3RZYy2jOaIp9LSGwBkSkkPBBxDa7-NdaZ6Eh1NxsCwXvkteVI_OatSwS407U-BL-ts'
    ],
    editionInfo: 'Numbered Atelier Archive',
    variants: [
      { name: 'Optic Gold & Polished Brass', sublabel: 'Soleil Edition', colors: ['#ffdcc1', '#795434'] }
    ]
  },
  {
    id: 'ref-elb-0114',
    ref: 'REF-ELB-0114',
    title: 'La Marsa Meditative Flora Set',
    category: 'monochrome',
    material: 'Alabaster & Marble',
    tone: 'Blanc',
    price: 420,
    badge: 'Atelier Set',
    shortDesc: 'Complete architectural vignette curated for low console tables and limestone mantels.',
    fullDesc: 'Complete interior styling ensemble: alabaster figurine, smoked vase, white floral spray. Designed as a turnkey focal moment requiring no additional styling adjustments.',
    provenance: 'Curated triple composition',
    origin: 'La Marsa Atelier Showroom, Tunis',
    handling: 'Staged unboxing & room placement included',
    dimensions: {
      diameter: 'Ø 38 cm (Footprint)',
      height: 'H 42 cm',
      mass: '4.20 kg'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAosgY1YHH0jO7YBuXksBhxvNmoeinbkRU4ZurdzEfuOg-7h8V5itPL1TJYorI80DKwSR3-kshnloMyHfcht_FG4pN2VpV4Y-8QY8rdA5qGCoHvsFLKiI2M27pS0I9yEOcfTBRsY4O4UVD8-zHsUOQNyDkwHSiujI8csR0Em5_ORut4u73NuGn9hlmQTzGUHj2ZqbI5fjcnjk1dtqIIBz6OJT5KYTbEXXSktmLSdrXP3taxhAAVw6j6IlCaXxQcQyQhWDI',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAosgY1YHH0jO7YBuXksBhxvNmoeinbkRU4ZurdzEfuOg-7h8V5itPL1TJYorI80DKwSR3-kshnloMyHfcht_FG4pN2VpV4Y-8QY8rdA5qGCoHvsFLKiI2M27pS0I9yEOcfTBRsY4O4UVD8-zHsUOQNyDkwHSiujI8csR0Em5_ORut4u73NuGn9hlmQTzGUHj2ZqbI5fjcnjk1dtqIIBz6OJT5KYTbEXXSktmLSdrXP3taxhAAVw6j6IlCaXxQcQyQhWDI'
    ],
    editionInfo: 'Curated Triple Ensemble • Single Set',
    variants: [
      { name: 'Pure Chalk & Smoked Glass', sublabel: 'Atelier Set', colors: ['#ffffff', '#50453c'] }
    ]
  },
  {
    id: 'ref-elb-0115',
    ref: 'REF-ELB-0115',
    title: 'Twisted Amber Candlestick Duo',
    category: 'vases',
    material: 'Amber Glass',
    tone: 'Amber',
    price: 280,
    badge: 'Amber Glasswork',
    shortDesc: 'Spun borosilicate glass with amber gradients celebrating traditional craftsmanship in modern rhythm.',
    fullDesc: 'Pair of hand-spun architectural glass taper holders with interlocking amber links. Designed to support beeswax tapers with zero tilt.',
    provenance: 'Flameworked borosilicate glass',
    origin: 'Sidi Bou Saïd Studio, Tunis',
    handling: 'Signature packaging with wax seal',
    dimensions: {
      diameter: 'Ø 12 cm',
      height: 'H 29 cm',
      mass: '1.20 kg'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj2xyP5URQDF2tgvaA6kCJUUzHjeZCQyZrEwJpNNSw_uTyaBV-PcSLnC3PMsvai_pISgwhOce9BLdHeQeAt7jABixd4JHz2IkpyCHkTXhj8dco4hFEJE2gLqUn7dtoyZYNLP6js4ze_uWIu6u7RZd8Um60DP8iMQIqFDEm2JHZosIl_fA0kHJk0fEpPBSf6E8hrleO0BMFu6FW_t959ngzyYAjjlNDvG_pfLkPj6Fe_l09BDLoFKgzuCSHJH8UXzI1mAU',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDj2xyP5URQDF2tgvaA6kCJUUzHjeZCQyZrEwJpNNSw_uTyaBV-PcSLnC3PMsvai_pISgwhOce9BLdHeQeAt7jABixd4JHz2IkpyCHkTXhj8dco4hFEJE2gLqUn7dtoyZYNLP6js4ze_uWIu6u7RZd8Um60DP8iMQIqFDEm2JHZosIl_fA0kHJk0fEpPBSf6E8hrleO0BMFu6FW_t959ngzyYAjjlNDvG_pfLkPj6Fe_l09BDLoFKgzuCSHJH8UXzI1mAU'
    ],
    editionInfo: 'Atelier Tunis Prototype',
    variants: [
      { name: 'Twin Amber Spirals', sublabel: 'Set of 2', colors: ['#ffdcc1', '#795434'] }
    ]
  },
  {
    id: 'ref-elb-0022',
    ref: 'REF-ELB-0022',
    title: 'Cerulean Wave Ripple Amphora',
    category: 'vases',
    material: 'Glazed Ceramic',
    tone: 'Cyan',
    price: 310,
    badge: 'Sidi Bou Said Atelier Glass',
    shortDesc: 'High-clarity marine cyan wave ripples with rearing Pegasus art sculpture.',
    fullDesc: 'Formed in tribute to the maritime currents of the Gulf of Tunis. The vessel glass captures ambient coastal light in vivid crystalline blue rhythms.',
    provenance: 'Mouth-blown sodalime cyan matrix',
    origin: 'Sidi Bou Saïd Marine Studio, Tunis',
    handling: 'Reinforced crate with certified allocation code',
    dimensions: {
      diameter: 'Ø 23 cm',
      height: 'H 33 cm',
      mass: '2.70 kg'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBAqBKhtPl1s87jElUta2NyFN7fPFU_Un1vVmkpVcB-3NcsSBcMHuen4crCwBMxO4Gd-Tvo2F209eTdxfAMKl355Vh4KlFMcvZlMIwHtJc7VBHeMz8yY_IH1JhmKXSL5va2f63cNZKViXB8wZQb0P7wFVbotds0K9FHWYkQmNEOg4BMG6aCAua5N9HT_f-nKs1ZGxBrRYQcTQvbRWuDRTmwrtwY8KvDHZjpyrZeYK7zIjQ-GyFCI_j_0VGJPjYnTskAfY',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCBAqBKhtPl1s87jElUta2NyFN7fPFU_Un1vVmkpVcB-3NcsSBcMHuen4crCwBMxO4Gd-Tvo2F209eTdxfAMKl355Vh4KlFMcvZlMIwHtJc7VBHeMz8yY_IH1JhmKXSL5va2f63cNZKViXB8wZQb0P7wFVbotds0K9FHWYkQmNEOg4BMG6aCAua5N9HT_f-nKs1ZGxBrRYQcTQvbRWuDRTmwrtwY8KvDHZjpyrZeYK7zIjQ-GyFCI_j_0VGJPjYnTskAfY'
    ],
    editionInfo: 'Studio Prototype (1 of 6)',
    variants: [
      { name: 'Marine Cyan & White Ceramic', sublabel: 'Gulf Edition', colors: ['#426173', '#fdf9f1'] }
    ]
  },
  {
    id: 'ref-elb-0020',
    ref: 'REF-ELB-0020',
    title: 'Carthage Hammered Brass Disc Vessels',
    category: 'vessels',
    material: 'Brass & Metallic',
    tone: 'Bronze',
    price: 360,
    badge: 'Metalsmith Atelier',
    shortDesc: 'Hand-hammered warm metallic surfaces paired with sculptural floral branches.',
    fullDesc: 'Disc profile vessel hand-dimpled with over 4,000 hammer strikes by Tunis master metalworkers. Antiqued patina protected with organic beeswax sealing.',
    provenance: 'Solid sheet brass hand-dimpled',
    origin: 'Carthage Artisan Foundry',
    handling: 'White-glove uncrating with care kit',
    dimensions: {
      diameter: 'Ø 32 cm',
      height: 'H 24 cm',
      mass: '3.40 kg'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDwfGWdbgYmH5WFBkjHzbSaCGRe8pxgRxwDMbVNr1RmBuAklz661dQB4MGO1tj5iUy_pGApqSL5sN7Ek2GJygRdDMu8fWgAbjY2SaTdP5gngPc3SC-tMABoZ1hlC4FwzbFtdmeOzUA5aHzXF96bsSQr82paVc7u-X3O5KnUHgVJpXpQ1WihlsEumu20BX79EkgwjJAFz2W0qSn3XU0prI091rO0g6fZfp7Zl6XOgwU6Fdnp5bbkY0S8OSkZQTz15CTgSo',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDDwfGWdbgYmH5WFBkjHzbSaCGRe8pxgRxwDMbVNr1RmBuAklz661dQB4MGO1tj5iUy_pGApqSL5sN7Ek2GJygRdDMu8fWgAbjY2SaTdP5gngPc3SC-tMABoZ1hlC4FwzbFtdmeOzUA5aHzXF96bsSQr82paVc7u-X3O5KnUHgVJpXpQ1WihlsEumu20BX79EkgwjJAFz2W0qSn3XU0prI091rO0g6fZfp7Zl6XOgwU6Fdnp5bbkY0S8OSkZQTz15CTgSo'
    ],
    editionInfo: 'Tunis Heritage Edition',
    variants: [
      { name: 'Antiqued Carthage Brass', sublabel: 'Beaten Disc Pair', colors: ['#d6c4aa', '#81735c'] }
    ]
  },
  {
    id: 'ref-elb-0021',
    ref: 'REF-ELB-0021',
    title: 'Spiral Obelisks & Figurine Ensemble',
    category: 'monochrome',
    material: 'Alabaster & Marble',
    tone: 'Blanc',
    price: 310,
    badge: 'Cast Stone • Charcoal',
    shortDesc: 'Architectural ribbon ribbons, Paris-London bookends, and contemplative porcelain muses.',
    fullDesc: 'Refined black and white sculptural grouping celebrating literary reflection and architectural poise. Pair with heavy coffee table monographs or salon consoles.',
    provenance: 'Cast mineral resin & high-fire white porcelain',
    origin: 'La Marsa Atelier, Tunis',
    handling: 'Archival carton with velvet inserts',
    dimensions: {
      diameter: 'Ø 35 cm (Arrangement)',
      height: 'H 29 cm',
      mass: '3.60 kg'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO1ph0EDKrAF71I7D1JPvjd8E2Oq_gupQ1_cq41m0DQz-dB0LTYTubIF-XhdjYFMbLNZ_L-idejkj0ryyfDG9_uvoL9tTZxNX05BC4YPZvK08F6BP_lCU87B9FtFu1f3XEimm7aIbc7qWmINJFNfl040C7QucmZ1uLIJYjrfmDEuajuvp0WK23ZkSyz9d_fuzgnr3yr0GN-zqoTD8MpS_bmOa33ZFcYJLMEB_PuM-UyP-HSsEQzgkU-oVWgsKzaLhvq68',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDO1ph0EDKrAF71I7D1JPvjd8E2Oq_gupQ1_cq41m0DQz-dB0LTYTubIF-XhdjYFMbLNZ_L-idejkj0ryyfDG9_uvoL9tTZxNX05BC4YPZvK08F6BP_lCU87B9FtFu1f3XEimm7aIbc7qWmINJFNfl040C7QucmZ1uLIJYjrfmDEuajuvp0WK23ZkSyz9d_fuzgnr3yr0GN-zqoTD8MpS_bmOa33ZFcYJLMEB_PuM-UyP-HSsEQzgkU-oVWgsKzaLhvq68'
    ],
    editionInfo: 'Limited Run • Atelier Monograph',
    variants: [
      { name: 'Monochrome Study in Opposites', sublabel: 'Noir & Blanc', colors: ['#1c1c17', '#ffffff'] }
    ]
  },
  {
    id: 'ref-elb-0025',
    ref: 'REF-ELB-0025',
    title: 'Forest Emerald Fluted Triple Ensemble',
    category: 'vases',
    material: 'Smoked Glass',
    tone: 'Smoked',
    price: 340,
    badge: 'Emerald & Amber',
    shortDesc: 'Deep sylvan stepped cylinders, marble rosaries, and pristine calla lilies.',
    fullDesc: 'Rich emerald green glass cylinders layered in progressive heights. Refracts emerald coastal hues like Mediterranean pine forests meeting the sea.',
    provenance: 'Fluted cylinder mould with fire-polished rim',
    origin: 'La Marsa Workshop, Tunis',
    handling: 'Delivered as a 3-piece coordinated set',
    dimensions: {
      diameter: 'Ø 12, 16, 20 cm',
      height: 'H 20, 28, 36 cm',
      mass: '3.80 kg'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm9yej5hAEwR6Y1xSXnLbYmYexVB6ckdEGo_TCMcfCK8k7ivyMeMW5JLgTjlhCxwfI1kUsCBE7fHgV31E2vtnuY-SS3HF53tKIjx4ovEHsIF3JAg_GEkFSP8Jm_dKZPAiG2ZcPwVRQKkQhgWWQESZsWKPG7prB2wWCXaUhxmOS0lDzzj2EQIP5cxMRvAB2aX8tv_oa6QzJlNRxaDhVY0uX1XptSMGuICXWkAb_Jc5yVQNrBUvYFUSHKqDl0ZGVKne4Mm4',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBm9yej5hAEwR6Y1xSXnLbYmYexVB6ckdEGo_TCMcfCK8k7ivyMeMW5JLgTjlhCxwfI1kUsCBE7fHgV31E2vtnuY-SS3HF53tKIjx4ovEHsIF3JAg_GEkFSP8Jm_dKZPAiG2ZcPwVRQKkQhgWWQESZsWKPG7prB2wWCXaUhxmOS0lDzzj2EQIP5cxMRvAB2aX8tv_oa6QzJlNRxaDhVY0uX1XptSMGuICXWkAb_Jc5yVQNrBUvYFUSHKqDl0ZGVKne4Mm4'
    ],
    editionInfo: 'Tonal Trio • 3 Pieces',
    variants: [
      { name: 'Sylvan Emerald & Amber Foot', sublabel: 'Triple Set', colors: ['#555a3f', '#795434'] }
    ]
  },
  {
    id: 'ref-elb-0026',
    ref: 'REF-ELB-0026',
    title: 'Amber Torchiere & Lotus Ensemble',
    category: 'vases',
    material: 'Amber Glass',
    tone: 'Amber',
    price: 390,
    badge: 'Warm Luminary',
    shortDesc: 'Hand-blown undulating tall vase paired with sunset silk flora and gold talisman.',
    fullDesc: 'Tall undulating amber body designed to hold high-arching branches or stand alone as a luminous sculpture in private dining rooms.',
    provenance: 'Single glassmaker pull • Hand-twisted finial',
    origin: 'Sidi Bou Saïd Studio, Tunis',
    handling: 'White-glove uncrating included',
    dimensions: {
      diameter: 'Ø 20 cm',
      height: 'H 46 cm',
      mass: '3.20 kg'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1aqZzaoDXUoYb5XNIHf3dHeUOiapOiyR-4pdaZFYazUMcpmg-ll_4VVdxXbJmTZHOb-yKfJNh9-jheA6GqIZcfb6fgD7WdTkkVBHVlN7dDIry3S0utT-rchvnYgf6Pt_UF8o9-1I29L79FSu-5duYOBcP6nev4CcCZPGiXU3AiX0r16i4ipOJGubi-Q6noWARC3RZYy2jOaIp9LSGwBkSkkPBBxDa7-NdaZ6Eh1NxsCwXvkteVI_OatSwS407U-BL-ts',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1aqZzaoDXUoYb5XNIHf3dHeUOiapOiyR-4pdaZFYazUMcpmg-ll_4VVdxXbJmTZHOb-yKfJNh9-jheA6GqIZcfb6fgD7WdTkkVBHVlN7dDIry3S0utT-rchvnYgf6Pt_UF8o9-1I29L79FSu-5duYOBcP6nev4CcCZPGiXU3AiX0r16i4ipOJGubi-Q6noWARC3RZYy2jOaIp9LSGwBkSkkPBBxDa7-NdaZ6Eh1NxsCwXvkteVI_OatSwS407U-BL-ts'
    ],
    editionInfo: 'Signature Edition • Capsule 2025',
    variants: [
      { name: 'Soleil Amber & Lotus Gold', sublabel: 'Signature', colors: ['#ffdcc1', '#795434'] }
    ]
  },
  {
    id: 'ref-elb-0027',
    ref: 'REF-ELB-0027',
    title: 'Alabaster Meditative Silhouette Pair',
    category: 'monochrome',
    material: 'Alabaster & Marble',
    tone: 'Blanc',
    price: 280,
    badge: 'Alabaster Sculpture',
    shortDesc: 'Sublime cast chalk-stone figurative study beside smoked crystalline vessels.',
    fullDesc: 'Gentle contours inspired by classical Hellenic and Punic sculpture found in Carthage ruins. Textured chalk-white finish that absorbs natural light.',
    provenance: 'Honed Tunisian alabaster aggregate',
    origin: 'Carthage Heritage Workshop, Tunis',
    handling: 'Hand-inspected & signed Certificate',
    dimensions: {
      diameter: 'Ø 18 cm',
      height: 'H 28 cm',
      mass: '2.50 kg'
    },
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAosgY1YHH0jO7YBuXksBhxvNmoeinbkRU4ZurdzEfuOg-7h8V5itPL1TJYorI80DKwSR3-kshnloMyHfcht_FG4pN2VpV4Y-8QY8rdA5qGCoHvsFLKiI2M27pS0I9yEOcfTBRsY4O4UVD8-zHsUOQNyDkwHSiujI8csR0Em5_ORut4u73NuGn9hlmQTzGUHj2ZqbI5fjcnjk1dtqIIBz6OJT5KYTbEXXSktmLSdrXP3taxhAAVw6j6IlCaXxQcQyQhWDI',
    gallery: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAosgY1YHH0jO7YBuXksBhxvNmoeinbkRU4ZurdzEfuOg-7h8V5itPL1TJYorI80DKwSR3-kshnloMyHfcht_FG4pN2VpV4Y-8QY8rdA5qGCoHvsFLKiI2M27pS0I9yEOcfTBRsY4O4UVD8-zHsUOQNyDkwHSiujI8csR0Em5_ORut4u73NuGn9hlmQTzGUHj2ZqbI5fjcnjk1dtqIIBz6OJT5KYTbEXXSktmLSdrXP3taxhAAVw6j6IlCaXxQcQyQhWDI'
    ],
    editionInfo: 'Hand-Carved Stone • Archive Series',
    variants: [
      { name: 'Porous Alabaster Stone', sublabel: 'Single Edition', colors: ['#fdf9f1', '#e6e2da'] }
    ]
  }
];

export const DISCIPLINES = [
  {
    id: 'vases',
    number: 'MEDIUM 01',
    title: 'Vases & Sculptural Glass',
    description: 'Mouth-blown ripple glass, cyan Murano wave amphoras, and smoked pedestal silhouettes engineered to prism natural sunlight.',
    count: '14 CURATED OBJECTS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPH91FV-Cinkmz654uLvJjRqN8p9_YZBixcXHNbqCu2pbBabYExqgvMPDI3-maO_dTYLssLzVm2uq5qkQbZPPtKqrLkCruZK99of3pZilYUAYOWSdEZKG1m1Ri9C3U5T3BE-nmUInjDYM0PIuKq96kF2cSWGmtPVqBtkspzp7mzFLI1xQW8vpiF6m4j_0ia6puCOABbBC4uBVfZau6IH0HCSoLmHHdzP2Poy2rTLHyETUwbsTwUJw_j-5MMJ0BwrNtFlo'
  },
  {
    id: 'botanicals',
    number: 'MEDIUM 02',
    title: 'Botanical & Artificial Flora',
    description: 'Hand-textured hyper-realistic frosted magnolias, autumnal terracotta peonies, and enduring branches.',
    count: '8 BOTANICALS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBTaoQ0rxyspPnh832KM8EsAeNsHhVe_XQ-FAX9uaMORF0VgTEAgNba2qolLmb8oTLof9ncwupHMAVdAFqf_kLlgbEjO-jBfipsCpN5q2PYYfIhbyoYWMjQgnfvE8_NNiVVe34pkdGWHHWrzR87dBv9LSu44y74EdSx0nswhkEbvuBQhEd0WJIXBOlj1HHDodIuH-vhAzioptSxF_Vv7dBBt9V-zLiJL7J0-9yXN5t9jozEuQQ7tRK0qo-tF0bUb9DsRg'
  },
  {
    id: 'monochrome',
    number: 'MEDIUM 03',
    title: 'Monochrome Accents',
    description: 'Architectural ribbon ribbons, Paris-London bookends, and contemplative porcelain muses.',
    count: '6 MONOLITHS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO1ph0EDKrAF71I7D1JPvjd8E2Oq_gupQ1_cq41m0DQz-dB0LTYTubIF-XhdjYFMbLNZ_L-idejkj0ryyfDG9_uvoL9tTZxNX05BC4YPZvK08F6BP_lCU87B9FtFu1f3XEimm7aIbc7qWmINJFNfl040C7QucmZ1uLIJYjrfmDEuajuvp0WK23ZkSyz9d_fuzgnr3yr0GN-zqoTD8MpS_bmOa33ZFcYJLMEB_PuM-UyP-HSsEQzgkU-oVWgsKzaLhvq68'
  },
  {
    id: 'vessels',
    number: 'MEDIUM 04',
    title: 'Vessels of Brass & Earth',
    description: 'Hand-hammered warm metallic surfaces paired with sculptural floral branches.',
    count: '7 VESSELS',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDwfGWdbgYmH5WFBkjHzbSaCGRe8pxgRxwDMbVNr1RmBuAklz661dQB4MGO1tj5iUy_pGApqSL5sN7Ek2GJygRdDMu8fWgAbjY2SaTdP5gngPc3SC-tMABoZ1hlC4FwzbFtdmeOzUA5aHzXF96bsSQr82paVc7u-X3O5KnUHgVJpXpQ1WihlsEumu20BX79EkgwjJAFz2W0qSn3XU0prI091rO0g6fZfp7Zl6XOgwU6Fdnp5bbkY0S8OSkZQTz15CTgSo'
  },
  {
    id: 'emerald',
    number: 'MEDIUM 05',
    title: 'Forest Glass & Table Accents',
    description: 'Deep sylvan stepped cylinders, marble rosaries, and pristine calla lilies.',
    count: '5 SUITES',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm9yej5hAEwR6Y1xSXnLbYmYexVB6ckdEGo_TCMcfCK8k7ivyMeMW5JLgTjlhCxwfI1kUsCBE7fHgV31E2vtnuY-SS3HF53tKIjx4ovEHsIF3JAg_GEkFSP8Jm_dKZPAiG2ZcPwVRQKkQhgWWQESZsWKPG7prB2wWCXaUhxmOS0lDzzj2EQIP5cxMRvAB2aX8tv_oa6QzJlNRxaDhVY0uX1XptSMGuICXWkAb_Jc5yVQNrBUvYFUSHKqDl0ZGVKne4Mm4'
  }
];
