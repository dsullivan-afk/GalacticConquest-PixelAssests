import { MessageSquarePlus, Upload } from "lucide-react";

export function ContributionBanner() {
  return (
    <div className="max-w-7xl mx-auto mb-8">
      <div className="bg-primary/5 border border-primary/20 rounded-sm p-4 flex flex-col md:flex-row items-center justify-between gap-4 backdrop-blur-sm">
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="p-3 bg-primary/10 rounded-full text-primary hidden md:block">
            <MessageSquarePlus className="w-6 h-6" />
          </div>
          <div>
             <h3 className="font-bold text-white tracking-wide uppercase text-sm mb-1">Missing something?</h3>
             <p className="text-sm text-muted-foreground">Request a specific character variant or upload your own pixel art contributions.</p>
          </div>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
           <a href="https://example.com" className="flex-1 md:flex-none px-6 py-2.5 bg-background/50 border border-border hover:border-primary/50 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 hover:text-primary hover:shadow-[0_0_15px_rgba(0,255,255,0.1)]">
              Request Asset
           </a>
           <a href="https://example.com" className="flex-1 md:flex-none px-6 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(0,255,255,0.3)]">
              <Upload className="w-4 h-4" /> Upload
           </a>
        </div>
      </div>
    </div>
  );
}
