import {
  Anvil,
  BatteryCharging,
  Bell,
  Blocks,
  Boxes,
  Building2,
  Cable,
  CalendarCheck,
  CircuitBoard,
  Cog,
  CupSoda,
  Factory,
  Globe,
  HardHat,
  House,
  Layers,
  Leaf,
  Milk,
  Newspaper,
  Recycle,
  Scale,
  ShieldCheck,
  Sofa,
  Sprout,
  Store,
  TrendingUp,
  Truck,
  Users,
  Wallet,
  Warehouse,
  WashingMachine,
  Zap,
  type LucideIcon,
} from "lucide-react";

/**
 * Named icon registry. Data files reference icons by name so content stays
 * free of component imports.
 */
export const ICONS = {
  // Trust & process
  calendar: CalendarCheck,
  scale: Scale,
  shield: ShieldCheck,
  trending: TrendingUp,
  truck: Truck,
  wallet: Wallet,
  team: Users,
  recycle: Recycle,
  leaf: Leaf,
  sprout: Sprout,
  globe: Globe,
  sort: Layers,

  // Materials
  iron: Anvil,
  steel: Blocks,
  stainless: Layers,
  aluminium: CupSoda,
  copper: Zap,
  brass: Bell,
  motor: Cog,
  battery: BatteryCharging,
  ewaste: CircuitBoard,
  cable: Cable,
  plastic: Milk,
  paper: Newspaper,
  appliance: WashingMachine,
  furniture: Sofa,

  // Places & services
  factory: Factory,
  warehouse: Warehouse,
  office: Building2,
  site: HardHat,
  household: House,
  commercial: Store,
  section: Boxes,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export const Icon = ({ name, className, strokeWidth = 1.9 }: IconProps) => {
  const Glyph = ICONS[name];
  return <Glyph className={className} strokeWidth={strokeWidth} aria-hidden />;
};
