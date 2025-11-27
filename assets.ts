import { 
  Users, Car, Box, Grid, Monitor, Map, Crown 
} from "lucide-react";

// Asset Categories
export type AssetCategory = "characters" | "environments" | "ui" | "map" | "vehicles" | "structures" | "pro_vault";
export type Resolution = "16px" | "32px" | "64px" | "128px+" | "Mixed";
export type Complexity = "Low" | "Medium" | "High";

export interface Asset {
  id: string;
  title: string;
  category: AssetCategory;
  src: string;
  description: string;
  resolution: Resolution;
  complexity: Complexity;
  typeLabel: string;
  isPro?: boolean;
}

// Import generated assets
import commanderMale from "@assets/generated_images/pixel_art_male_sci-fi_commander_sprite.png";
import commanderFemale from "@assets/generated_images/pixel_art_female_sci-fi_commander_sprite.png";
import alienBlue from "@assets/generated_images/pixel_art_alien_soldier_blue_variant.png";
import alienRed from "@assets/generated_images/pixel_art_alien_soldier_red_variant.png";
import alienGreen from "@assets/generated_images/pixel_art_alien_soldier_green_variant.png";
import alienPurple from "@assets/generated_images/pixel_art_alien_soldier_purple_variant.png";
import envHome from "@assets/generated_images/pixel_art_home_planet_environment_tileset.png";
import envBattle from "@assets/generated_images/pixel_art_asteroid_battlefield_background.png";
import envStation from "@assets/generated_images/pixel_art_space_station_environment.png";
import envLava from "@assets/generated_images/pixel_art_lava_planet_tileset.png";
import mapElements from "@assets/generated_images/pixel_art_galactic_map_planets_and_stars.png";
import uiIcons from "@assets/generated_images/pixel_art_ui_icon_set.png";
import uiHud from "@assets/generated_images/pixel_art_hud_elements.png";
import vehicleTank from "@assets/generated_images/pixel_art_sci-fi_heavy_tank.png";
import vehicleRover from "@assets/generated_images/pixel_art_sci-fi_hover_rover.png";
import structTurret from "@assets/generated_images/pixel_art_defense_turret.png";
import structGenerator from "@assets/generated_images/pixel_art_power_generator.png";

import assetsData from "@/data/assets.json";

// Create a map for dynamic image resolution
export const imageMap: Record<string, string> = {
  "pixel_art_male_sci-fi_commander_sprite.png": commanderMale,
  "pixel_art_female_sci-fi_commander_sprite.png": commanderFemale,
  "pixel_art_alien_soldier_blue_variant.png": alienBlue,
  "pixel_art_alien_soldier_red_variant.png": alienRed,
  "pixel_art_alien_soldier_green_variant.png": alienGreen,
  "pixel_art_alien_soldier_purple_variant.png": alienPurple,
  "pixel_art_home_planet_environment_tileset.png": envHome,
  "pixel_art_asteroid_battlefield_background.png": envBattle,
  "pixel_art_space_station_environment.png": envStation,
  "pixel_art_lava_planet_tileset.png": envLava,
  "pixel_art_galactic_map_planets_and_stars.png": mapElements,
  "pixel_art_ui_icon_set.png": uiIcons,
  "pixel_art_hud_elements.png": uiHud,
  "pixel_art_sci-fi_heavy_tank.png": vehicleTank,
  "pixel_art_sci-fi_hover_rover.png": vehicleRover,
  "pixel_art_defense_turret.png": structTurret,
  "pixel_art_power_generator.png": structGenerator,
};

export const ASSETS: Asset[] = assetsData.assets.map(asset => ({
  ...asset,
  src: imageMap[asset.src] || asset.src,
  category: asset.category as AssetCategory,
  resolution: asset.resolution as Resolution,
  complexity: asset.complexity as Complexity
}));

export const CATEGORIES = [
  { value: "characters", icon: Users, label: "Characters" },
  { value: "vehicles", icon: Car, label: "Vehicles" },
  { value: "structures", icon: Box, label: "Structures" },
  { value: "environments", icon: Grid, label: "Environments" },
  { value: "ui", icon: Monitor, label: "Interface" },
  { value: "map", icon: Map, label: "Map" },
];
