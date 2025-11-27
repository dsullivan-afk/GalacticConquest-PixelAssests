import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Lock, Crown } from "lucide-react";
import { Asset } from "@/lib/assets";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function AssetCard({ asset }: { asset: Asset }) {
  return (
    <motion.div variants={item} layout>
      <Card className="bg-card border-border overflow-hidden group hover:border-primary transition-colors duration-300 h-full flex flex-col">
        <CardContent className="p-0 flex flex-col h-full">
          <div className="relative aspect-square bg-black/40 flex items-center justify-center p-4 border-b border-border/50">
            <div className="absolute top-2 right-2 z-10 flex gap-1">
              {asset.isPro && (
                <Badge variant="outline" className="bg-[#FFD700]/20 backdrop-blur border-[#FFD700] text-[#FFD700] text-[9px] uppercase tracking-wider font-bold flex items-center gap-1">
                  <Crown className="w-3 h-3" /> PRO
                </Badge>
              )}
              <Badge variant="outline" className="bg-background/80 backdrop-blur border-border text-muted-foreground text-[9px] uppercase">
                {asset.resolution}
              </Badge>
              <Badge variant="outline" className="bg-primary/10 backdrop-blur border-primary/30 text-primary text-[9px] uppercase tracking-wider">
                {asset.typeLabel}
              </Badge>
            </div>
            
            {/* Complexity Indicator */}
            <div className="absolute bottom-2 left-2 flex gap-0.5" title={`Complexity: ${asset.complexity}`}>
              <div className={`w-1 h-3 rounded-sm ${['Low', 'Medium', 'High'].includes(asset.complexity) ? 'bg-primary' : 'bg-muted'}`} />
              <div className={`w-1 h-3 rounded-sm ${['Medium', 'High'].includes(asset.complexity) ? 'bg-primary' : 'bg-muted/30'}`} />
              <div className={`w-1 h-3 rounded-sm ${['High'].includes(asset.complexity) ? 'bg-primary' : 'bg-muted/30'}`} />
            </div>

            <img 
              src={asset.src} 
              alt={asset.title} 
              className={`w-full h-full ${asset.resolution === '128px+' ? 'object-cover' : 'object-contain'} image-pixelated group-hover:scale-110 transition-transform duration-500`} 
            />
          </div>
          <div className="p-4 flex flex-col flex-1">
            <h3 className="font-bold text-base text-white mb-1">{asset.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">{asset.description}</p>
            
            {asset.isPro ? (
              <a href="https://example.com" className="w-full mt-auto flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest py-2 bg-[#FFD700]/10 text-[#FFD700] border border-[#FFD700]/30 hover:bg-[#FFD700] hover:text-black transition-colors rounded-sm">
                <Lock className="w-3 h-3" /> Unlock Pro Asset
              </a>
            ) : (
              <a href={asset.src} download className="w-full mt-auto flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest py-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors rounded-sm">
                <Download className="w-3 h-3" /> Download
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
