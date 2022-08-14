/**
 * Represents a set of damage modifiers
 * @param potency - a multiplicative modifier (10% buff = 1.1)
 * @param critRate - an additive critical hit rate buff (10% buff = 0.1)
 * @param directRate - an additive direct hit rate buff
 * @param mainStat - an additive main stat buff
 */
export interface Effect {
    potency?: number
    critRate?: number
    directRate?: number
    mainStat?: number
}
