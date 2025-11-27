import { SlidersHorizontal, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FilterSidebarProps {
  filterRes: string;
  setFilterRes: (value: string) => void;
  filterComplex: string;
  setFilterComplex: (value: string) => void;
  activeFiltersCount: number;
  resetFilters: () => void;
  resultsCount: number;
}

export function FilterSidebar({ 
  filterRes, setFilterRes, 
  filterComplex, setFilterComplex, 
  activeFiltersCount, resetFilters, 
  resultsCount 
}: FilterSidebarProps) {
  return (
    <aside className="w-full lg:w-64 shrink-0 space-y-6">
      <div className="bg-card border border-border p-5 rounded-sm sticky top-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-white flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-primary" /> FILTERS
          </h3>
          {activeFiltersCount > 0 && (
            <button onClick={resetFilters} className="text-[10px] text-destructive hover:underline flex items-center gap-1">
              <X className="w-3 h-3" /> CLEAR
            </button>
          )}
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-xs uppercase text-muted-foreground font-bold tracking-wider">Pixel Resolution</Label>
            <Select value={filterRes} onValueChange={setFilterRes}>
              <SelectTrigger className="w-full bg-background/50 border-border focus:ring-primary/50">
                <SelectValue placeholder="All Sizes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Resolutions</SelectItem>
                <SelectItem value="16px">16px (Micro)</SelectItem>
                <SelectItem value="32px">32px (Standard)</SelectItem>
                <SelectItem value="64px">64px (Large)</SelectItem>
                <SelectItem value="128px+">128px+ (Scene)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-xs uppercase text-muted-foreground font-bold tracking-wider">Visual Complexity</Label>
            <Select value={filterComplex} onValueChange={setFilterComplex}>
              <SelectTrigger className="w-full bg-background/50 border-border focus:ring-primary/50">
                <SelectValue placeholder="All Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Low">Low (Simple)</SelectItem>
                <SelectItem value="Medium">Medium (Standard)</SelectItem>
                <SelectItem value="High">High (Detailed)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-border">
          <div className="text-xs text-muted-foreground">
            Showing <span className="text-primary font-bold">{resultsCount}</span> assets
          </div>
        </div>
      </div>
    </aside>
  );
}
