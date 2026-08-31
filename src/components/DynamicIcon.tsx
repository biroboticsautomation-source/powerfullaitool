import React from 'react';
import {
  Bot,
  Sparkles,
  Cpu,
  Image as ImageIcon,
  Palette,
  Video,
  Mic,
  Code,
  Search,
  LayoutGrid,
  TrendingUp,
  Zap,
  Tag,
  CheckCircle2,
  DownloadCloud,
  ShieldCheck,
  Grid,
  Headphones,
  Layers,
  Utensils,
  Car,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  Lock,
  Clock,
  BookOpen,
  FolderDown,
  Check,
  Flame,
  Award,
  Globe,
  Share2,
  FileText,
  Mail,
  Phone,
  Eye,
  Info
} from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name.toLowerCase()) {
    case 'bot':
      return <Bot className={className} />;
    case 'sparkles':
      return <Sparkles className={className} />;
    case 'cpu':
      return <Cpu className={className} />;
    case 'image':
      return <ImageIcon className={className} />;
    case 'palette':
      return <Palette className={className} />;
    case 'video':
      return <Video className={className} />;
    case 'mic':
      return <Mic className={className} />;
    case 'code':
      return <Code className={className} />;
    case 'search':
      return <Search className={className} />;
    case 'layoutgrid':
      return <LayoutGrid className={className} />;
    case 'trendingup':
      return <TrendingUp className={className} />;
    case 'zap':
      return <Zap className={className} />;
    case 'tag':
      return <Tag className={className} />;
    case 'checkcircle2':
      return <CheckCircle2 className={className} />;
    case 'downloadcloud':
      return <DownloadCloud className={className} />;
    case 'shieldcheck':
      return <ShieldCheck className={className} />;
    case 'grid':
      return <Grid className={className} />;
    case 'headphones':
      return <Headphones className={className} />;
    case 'layers':
      return <Layers className={className} />;
    case 'utensils':
      return <Utensils className={className} />;
    case 'car':
      return <Car className={className} />;
    case 'clock':
      return <Clock className={className} />;
    case 'bookopen':
      return <BookOpen className={className} />;
    case 'folderdown':
      return <FolderDown className={className} />;
    case 'lock':
      return <Lock className={className} />;
    case 'flame':
      return <Flame className={className} />;
    case 'award':
      return <Award className={className} />;
    case 'globe':
      return <Globe className={className} />;
    case 'mail':
      return <Mail className={className} />;
    case 'phone':
      return <Phone className={className} />;
    case 'eye':
      return <Eye className={className} />;
    case 'info':
      return <Info className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};
