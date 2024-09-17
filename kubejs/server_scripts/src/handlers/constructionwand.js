// requires: constructionwand
// requires: kubejs_create

/**
 * @file Server handler for Construction Wands.
 * @author CelestialAbyss <https://github.com/CelestialAbyss> Modpack lead
 */

ServerEvents.recipes(event => {
  event.remove({ id: 'constructionwand:infinity_wand' })
  event.shaped('constructionwand:infinity_wand', [
    '  C',
    ' S ',
    'S  '
  ], {
    S: 'kubejs:netherite_rod',
    C: 'minecraft:end_crystal'
  }).id('kubejs:constructionwand/infinity_wand')
})

/*
event.recipes.create.filling('kubejs:construction_core_diamond', [
  'minecraft:diamond',
  Fluid.of('kubejs:condensed_universal_entropy', 90)
]).id('finality:construction_diamond_activation')
event.shaped('constructionwand:diamond_wand', [
  '  D',
  ' S ',
  'S  '
], {
  S: 'minecraft:stick',
  D: 'kubejs:construction_core_diamond'
}).id('finality:constructionwand_diamond')
*/