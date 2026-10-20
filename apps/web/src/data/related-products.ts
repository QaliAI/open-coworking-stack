// Separate paid products from the maintainer. They sit apart from the directory on purpose:
// nothing here affects rankings, tiers, or recommendations (see /ops/trust-policy/).
//
// A product is only rendered once `url` is set to its real public page. Leave `url` undefined
// rather than guessing — an unlinked product is simply not shown.
export interface RelatedProduct {
  id: string;
  name: string;
  /** One neutral sentence. Leave undefined until the maintainer supplies approved copy. */
  summary?: string;
  /** Public landing page. Must be an https URL. */
  url?: string;
}

export const relatedProducts: RelatedProduct[] = [
  { id: 'coworking-launch-manual', name: 'Coworking Launch Manual' },
  { id: 'prospector', name: 'Prospector' },
  { id: 'sellspace', name: 'SellSpace' },
];
