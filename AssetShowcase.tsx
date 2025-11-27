import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Filter, Box, Crown } from "lucide-react";

// New Components
import { ContributionBanner } from "@/components/showcase/ContributionBanner";
import { DimensionSwitcher } from "@/components/showcase/DimensionSwitcher";
import { FilterSidebar } from "@/components/showcase/FilterSidebar";
import { AssetCard } from "@/components/showcase/AssetCard";
import { ASSETS, CATEGORIES, AssetCategory } from "@/lib/assets";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

function TabItem({ value, icon: Icon, label }: { value: string, icon: any, label: string }) {
  return (
    <TabsTrigger 
      value={value} 
      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground bg-card/50 border border-border px-4 py-2.5 font-bold tracking-wide uppercase text-xs flex items-center gap-2 hover:border-primary/50 transition-all"
    >
      <Icon className="w-4 h-4" /> {label}
    </TabsTrigger>
  );
}

export default function AssetShowcase() {
  const [activeTab, setActiveTab] = useState<AssetCategory>("characters");
  const [viewMode, setViewMode] = useState<"2D" | "3D">("2D");
  const [filterRes, setFilterRes] = useState<string>("all");
  const [filterComplex, setFilterComplex] = useState<string>("all");

  const filteredAssets = useMemo(() => {
    return ASSETS.filter(asset => {
      // If Pro Vault is active, filter only Pro assets regardless of category
      if (activeTab === ("pro_vault" as AssetCategory)) {
        return asset.isPro;
      }
      
      const matchCategory = asset.category === activeTab;
      const matchRes = filterRes === "all" || asset.resolution === filterRes;
      const matchComplex = filterComplex === "all" || asset.complexity === filterComplex;
      return matchCategory && matchRes && matchComplex;
    });
  }, [activeTab, filterRes, filterComplex]);

  const resetFilters = () => {
    setFilterRes("all");
    setFilterComplex("all");
  };

  const activeFiltersCount = (filterRes !== "all" ? 1 : 0) + (filterComplex !== "all" ? 1 : 0);

  return (
    <div className="min-h-screen bg-background text-foreground font-tech p-4 md:p-8 lg:p-12">
      <ContributionBanner />

      <header className="max-w-7xl mx-auto mb-8 space-y-4 border-b border-border/40 pb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-3 h-3 bg-primary animate-pulse" />
          <span className="text-primary tracking-[0.2em] text-sm font-bold uppercase">Asset Database</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-pixel text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
          GALACTIC CONQUEST
        </h1>
      </header>

      <main className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* 2D / 3D Mode Switcher Banner */}
        <DimensionSwitcher viewMode={viewMode} setViewMode={setViewMode} />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Filters */}
          <FilterSidebar 
            filterRes={filterRes} setFilterRes={setFilterRes}
            filterComplex={filterComplex} setFilterComplex={setFilterComplex}
            activeFiltersCount={activeFiltersCount}
            resetFilters={resetFilters}
            resultsCount={filteredAssets.length}
          />

          {/* Main Content */}
          <div className="flex-1">
            {viewMode === "2D" ? (
              <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as AssetCategory)} className="space-y-8">
                <TabsList className="bg-transparent p-0 flex flex-wrap gap-2 h-auto justify-start w-full border-b border-border/40 pb-4 mb-6">
                  {CATEGORIES.map(cat => (
                    <TabItem key={cat.value} value={cat.value} icon={cat.icon} label={cat.label} />
                  ))}
                  
                  <div className="w-full md:w-auto md:ml-auto mt-2 md:mt-0">
                    <TabsTrigger 
                      value="pro_vault" 
                      onClick={() => setActiveTab("pro_vault" as AssetCategory)}
                      className="w-full md:w-auto data-[state=active]:bg-[#FFD700] data-[state=active]:text-black bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] px-4 py-2.5 font-bold tracking-wide uppercase text-xs flex items-center justify-center gap-2 hover:bg-[#FFD700]/20 transition-all shadow-[0_0_10px_rgba(255,215,0,0.1)]"
                    >
                      <Crown className="w-4 h-4" /> PRO VAULT
                    </TabsTrigger>
                  </div>
                </TabsList>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab + filterRes + filterComplex}
                    variants={container}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {filteredAssets.length > 0 ? (
                      filteredAssets.map((asset) => (
                        <AssetCard key={asset.id} asset={asset} />
                      ))
                    ) : (
                      <div className="col-span-full py-12 text-center text-muted-foreground bg-card/30 border border-dashed border-border rounded-sm">
                        <Filter className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        <p>No assets match the current filters.</p>
                        <Button variant="link" onClick={resetFilters} className="text-primary">Clear Filters</Button>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </Tabs>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-32 text-center space-y-6 bg-card/30 border border-dashed border-[#FF0055]/30 rounded-sm"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#FF0055]/20 blur-xl rounded-full animate-pulse" />
                  <Box className="w-24 h-24 text-[#FF0055] relative z-10" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-pixel text-white">3D VOXEL ASSETS</h2>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Our team is currently rendering high-fidelity voxel models. 
                    Check back soon for the 3D asset library release.
                  </p>
                </div>
                <Button variant="outline" className="border-[#FF0055] text-[#FF0055] hover:bg-[#FF0055] hover:text-white mt-4">
                  Notify Me When Available
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
