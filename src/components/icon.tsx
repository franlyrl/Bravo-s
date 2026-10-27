import {
  BedDouble, BedSingle, Bike, Car, Clock, Coffee, CookingPot, Lock, Map, PawPrint,
  Plane, ShowerHead, Snowflake, Users, WashingMachine, Wifi, Wine, type LucideProps,
} from "lucide-react";

const icons = {
  BedDouble, BedSingle, Bike, Car, Clock, Coffee, CookingPot, Lock, Map, PawPrint,
  Plane, ShowerHead, Snowflake, Users, WashingMachine, Wifi, Wine,
};

export type IconName = keyof typeof icons;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Component = icons[name];
  return <Component {...props} />;
}
