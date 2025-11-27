import { motion } from "framer-motion";
import { Grid, Box } from "lucide-react";

interface DimensionSwitcherProps {
  viewMode: "2D" | "3D";
  setViewMode: (mode: "2D" | "3D") => void;
}

export function DimensionSwitcher({ viewMode, setViewMode }: DimensionSwitcherProps) {
  return (
    <div className="grid grid-cols-2 bg-card border border-border p-1 rounded-sm">
      <button 
        onClick={() => setViewMode("2D")}
        className={`relative py-6 md:py-8 flex flex-col items-center justify-center gap-2 transition-all duration-300 group overflow-hidden ${
          viewMode === "2D" 
            ? "bg-primary/10 text-primary border border-primary/50 shadow-[0_0_30px_rgba(0,255,255,0.1)_inset]" 
            : "hover:bg-white/5 text-muted-foreground hover:text-white"
        }`}
      >
        <div className="flex items-center gap-3 z-10">
          <Grid className={`w-6 h-6 ${viewMode === "2D" ? "text-primary" : "text-muted-foreground group-hover:text-white"}`} />
          <span className="text-2xl md:text-4xl font-pixel tracking-widest">2D</span>
        </div>
        <span className={`text-xs uppercase tracking-[0.3em] font-bold ${viewMode === "2D" ? "text-primary/80" : "text-muted-foreground/50"}`}>Pixel Art Assets</span>
        
        {viewMode === "2D" && (
          <motion.div 
            layoutId="activeMode"
            className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none" 
          />
        )}
      </button>

      <button 
        onClick={() => setViewMode("3D")}
        className={`relative py-6 md:py-8 flex flex-col items-center justify-center gap-2 transition-all duration-300 group overflow-hidden ${
          viewMode === "3D" 
            ? "bg-[#FF0055]/10 text-[#FF0055] border border-[#FF0055]/50 shadow-[0_0_30px_rgba(255,0,85,0.1)_inset]" 
            : "hover:bg-white/5 text-muted-foreground hover:text-white"
        }`}
      >
         <div className="flex items-center gap-3 z-10">
          <Box className={`w-6 h-6 ${viewMode === "3D" ? "text-[#FF0055]" : "text-muted-foreground group-hover:text-white"}`} />
          <span className="text-2xl md:text-4xl font-pixel tracking-widest">3D</span>
        </div>
        <span className={`text-xs uppercase tracking-[0.3em] font-bold ${viewMode === "3D" ? "text-[#FF0055]/80" : "text-muted-foreground/50"}`}>Voxel Models</span>

        {viewMode === "3D" && (
          <motion.div 
            layoutId="activeMode"
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF0055]/5 to-[#FF0055]/10 pointer-events-none" 
          />
        )}
      </button>
    </div>
  );
}
